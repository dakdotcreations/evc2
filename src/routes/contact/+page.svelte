<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import ContactForm from '$lib/components/sections/ContactForm.svelte';
	import ContactInfoCards from '$lib/components/sections/ContactInfoCards.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ImageIcon } from '@lucide/svelte';
	import { reveal } from '$lib/utils/reveal';
</script>

<svelte:head>
	<title>Contact | FIAT Creative Events Company Limited</title>
	<meta name="description" content="Start a conversation with FIAT about your next branding project, event or activation." />
</svelte:head>

<PageHeader
	eyebrow="Get in touch"
	title="Let's build your next moment."
	description="Whether it's a brand refresh, a launch, or a full-scale activation — tell us where you're headed and we'll help you get there, on time."
/>

<section class="full-width content-grid bg-background py-24 md:py-32">
	<div class="breakout grid gap-16 items-end lg:grid-cols-[0.9fr_1.1fr]">
		<div use:reveal>
			<Eyebrow text="Contact details" />
			<h2 class="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
				We'd love to hear from you.
			</h2>
			<p class="mt-4 text-foreground-muted">
				Reach out directly, or fill in the form and our team will respond within one business day.
			</p>

			<div class="mt-10">
				<ContactInfoCards />
			</div>

		</div>
		
		<div use:reveal={120} >
			<div class="flex aspect-16/10 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface-soft overflow-hidden">
				<img src="images/2151320699.jpg" alt="" class="object-cover size-full">
			</div>
			<!-- <h3 class="font-display text-2xl font-extrabold text-foreground">Send us a message</h3>
			<p class="mt-2 text-sm text-foreground-muted">Every project starts with a conversation.</p>
			<div class="mt-8">
				<ContactForm />
			</div> -->
		</div>
	</div>
</section>
