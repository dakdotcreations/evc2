<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import type { ServiceCategory } from '$lib/data/services';
	import { Check, ImageIcon } from '@lucide/svelte';

	let { service, index }: { service: ServiceCategory; index: number } = $props();

	const reversed = $derived(index % 2 === 1);
</script>

<section
	id={service.slug}
	class="full-width content-grid scroll-mt-36 border-b border-border py-20 last:border-b-0 md:py-28"
	class:bg-surface-soft={index % 2 === 1}
>
	<div class="breakout grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
		<div class:lg:order-2={reversed} use:reveal>
			<div class="flex items-center gap-4">
				<div class="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
					<service.icon class="size-6" />
				</div>
				<span class="font-display text-5xl font-extrabold text-border">{service.number}</span>
			</div>

			<h2 class="mt-6 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{service.title}</h2>
			<p class="mt-4 max-w-lg text-lg leading-relaxed text-foreground-muted">{service.summary}</p>

			<div class="mt-8 flex aspect-video max-w-lg flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-background overflow-hidden">
				<img src="{service.image}" alt="" class="h-full w-full aspect-video object-cover">
			</div>
		</div>

		<div class:lg:order-1={reversed} use:reveal={120}>
			<ul class="grid gap-4 sm:grid-cols-2">
				{#each service.items as item, i (item.title)}
					<li
						class="flex gap-3 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10"
						use:reveal={i * 60}
					>
						<Check class="mt-0.5 size-4 shrink-0 text-secondary" />
						<div>
							<p class="font-medium text-foreground">{item.title}</p>
							<p class="mt-1 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
