<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import { approachSteps } from '$lib/data/approach';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';

	let { compact = false }: { compact?: boolean } = $props();

	const visibleSteps = $derived(compact ? approachSteps.slice(0, 3) : approachSteps);
</script>

<section class="full-width content-grid bg-background py-24 md:py-32">
	<div class="breakout">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" use:reveal>
			<div>
				<Eyebrow text="Our approach" />
				<h2 class="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
					Warm, not stiff. Playful, not chaotic.
				</h2>
			</div>
			{#if compact}
				<a href="/about" class="text-sm font-semibold text-primary underline decoration-secondary/50 underline-offset-4 hover:text-secondary">
					Read our full approach
				</a>
			{/if}
		</div>

		<ol class="mt-12 flex flex-col border-t border-border">
			{#each visibleSteps as step, i (step.title)}
				<li
					class="group grid grid-cols-[3rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-border py-6 transition-colors duration-300 hover:bg-surface-soft sm:grid-cols-[5.5rem_16rem_1fr] sm:px-4"
					use:reveal={i * 60}
				>
					<span class="font-display text-2xl font-extrabold text-accent">0{i + 1}</span>
					<h3 class="font-display text-lg font-bold text-foreground">{step.title}</h3>
					<p class="col-span-2 max-w-xl text-sm leading-relaxed text-foreground-muted sm:col-span-1">{step.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
