<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Send, CheckCircle2, Loader2 } from '@lucide/svelte';
	import Button from '$lib/components/ui/button.svelte';

	type FormData = {
		name: string;
		email: string;
		phone: string;
		eventType: string;
		message: string;
	};

	let form = $state<FormData>({ name: '', email: '', phone: '', eventType: '', message: '' });
	let errors = $state<Partial<Record<keyof FormData, string>>>({});
	let submitting = $state(false);
	let submitted = $state(false);

	const eventTypes = [
		'Corporate Branding',
		'Event Management & Production',
		'Set Design',
		'Brand Activation',
		'Something else'
	];

	function validate() {
		const next: typeof errors = {};
		if (!form.name.trim()) next.name = 'Please tell us your name.';
		if (!form.email.trim()) {
			next.email = 'An email helps us get back to you.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			next.email = 'That email looks incomplete.';
		}
		if (!form.eventType) next.eventType = 'Pick what this is about.';
		if (!form.message.trim()) next.message = "Tell us a bit about what you're planning.";
		errors = next;
		return Object.keys(next).length === 0;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;

		submitting = true;
		// Simulated submission — wire this up to a real endpoint/form action when available.
		await new Promise((resolve) => setTimeout(resolve, 900));
		submitting = false;
		submitted = true;
	}
</script>

{#if submitted}
	<div
		class="flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface-soft p-12 text-center"
		in:fly={{ y: 16, duration: 400 }}
	>
		<CheckCircle2 class="size-10 text-secondary" />
		<h3 class="font-display text-2xl font-extrabold text-foreground">Message sent!</h3>
		<p class="max-w-sm text-foreground-muted">
			Thank you, {form.name.split(' ')[0]}. Our team will be in touch shortly to talk through your
			project.
		</p>
	</div>
{:else}
	<form novalidate onsubmit={handleSubmit} class="grid gap-6 sm:grid-cols-2">
		<div class="sm:col-span-1">
			<label for="name" class="mb-2 block text-sm font-medium text-foreground">Full name</label>
			<input
				id="name"
				type="text"
				bind:value={form.name}
				placeholder="Jane Doe"
				class="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
			/>
			{#if errors.name}<p class="mt-1.5 text-sm text-deep">{errors.name}</p>{/if}
		</div>

		<div class="sm:col-span-1">
			<label for="email" class="mb-2 block text-sm font-medium text-foreground">Email</label>
			<input
				id="email"
				type="email"
				bind:value={form.email}
				placeholder="jane@company.com"
				class="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
			/>
			{#if errors.email}<p class="mt-1.5 text-sm text-deep">{errors.email}</p>{/if}
		</div>

		<div class="sm:col-span-1">
			<label for="phone" class="mb-2 block text-sm font-medium text-foreground">Phone (optional)</label>
			<input
				id="phone"
				type="tel"
				bind:value={form.phone}
				placeholder="+234 000 000 0000"
				class="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
			/>
		</div>

		<div class="sm:col-span-1">
			<label for="eventType" class="mb-2 block text-sm font-medium text-foreground">This is about</label>
			<select
				id="eventType"
				bind:value={form.eventType}
				class="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
			>
				<option value="" disabled selected>Select one</option>
				{#each eventTypes as type (type)}
					<option value={type}>{type}</option>
				{/each}
			</select>
			{#if errors.eventType}<p class="mt-1.5 text-sm text-deep">{errors.eventType}</p>{/if}
		</div>

		<div class="sm:col-span-2">
			<label for="message" class="mb-2 block text-sm font-medium text-foreground">Tell us about your project</label>
			<textarea
				id="message"
				rows="5"
				bind:value={form.message}
				placeholder="What are you planning, when, and for how many guests?"
				class="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
			></textarea>
			{#if errors.message}<p class="mt-1.5 text-sm text-deep">{errors.message}</p>{/if}
		</div>

		<div class="sm:col-span-2">
			<Button type="submit" variant="primary" disabled={submitting} class="w-full sm:w-auto">
				{#if submitting}
					<Loader2 class="size-4 animate-spin" /> Sending...
				{:else}
					<Send class="size-4" /> Send message
				{/if}
			</Button>
		</div>
	</form>
{/if}
