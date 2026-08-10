<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';

	let {
		eyebrow,
		title,
		description
	}: {
		eyebrow: string;
		title: string;
		description: string;
	} = $props();
</script>

<section class="full-width content-grid relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
	<div class="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-accent/15 blur-3xl"></div>

	<div class="breakout relative" use:reveal>
		<Eyebrow text={eyebrow} light />
		<h1 class="mt-5 max-w-3xl font-display text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			{title}
		</h1>
		<p class="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
			{description}
		</p>
	</div>
</section>
