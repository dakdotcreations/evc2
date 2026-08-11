<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Button from '$lib/components/ui/button.svelte';
	import { ArrowUpRight } from '@lucide/svelte';

	let {
		title = "Let's build your next moment.",
		description = 'Tell us what you are launching, celebrating or activating - we will bring the plan, the craft and the hospitality.',
		buttonLabel = 'Start a project',
		href = '/contact'
	}: {
		title?: string;
		description?: string;
		buttonLabel?: string;
		href?: string;
	} = $props();
</script>

<section class="full-width content-grid bg-background py-24 md:py-28">
	<div
		class="flex flex-col items-center gap-8 rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 md:flex-row md:justify-between md:text-left"
		use:reveal
	>
		<div>
			<h2 class="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
			<p class="mt-3 max-w-md text-primary-foreground/70">{description}</p>
		</div>
		<a href={href} class="shrink-0">
			<Button variant="accent">
				{buttonLabel}
				<ArrowUpRight class="size-4" />
			</Button>
		</a>
	</div>
</section>
