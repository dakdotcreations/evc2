<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import { services } from '$lib/data/services';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ArrowUpRight, ImageIcon } from '@lucide/svelte';

	const tones = ['bg-primary/5', 'bg-secondary/10', 'bg-deep/5', 'bg-accent/10'];
</script>

<section class="full-width content-grid bg-background py-24 md:py-32">
	<div class="breakout">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" use:reveal>
			<div>
				<Eyebrow text="What we do" />
				<h2 class="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
					Four disciplines. <br> One creative house.
				</h2>
			</div>
			<p class="max-w-sm text-foreground-muted">
				We start in branding, and it still shapes everything from full event production to
				set design and brand activations.
			</p>
		</div>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each services as service, i (service.slug)}
				<a
					href={`/services#${service.slug}`}
					use:reveal={i * 80}
					class="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10"
				>
					<div class={`${tones[i % tones.length]}`}>
						<img src="{service.image}" alt="" class="h-full w-full aspect-16/10 object-cover">
					</div>

					<div class="flex flex-1 flex-col justify-between p-6 pt-8">
						<div>
							<span class="font-display text-xs font-bold text-secondary">{service.number}</span>
							<h3 class="mt-2 font-display text-lg font-bold text-foreground">{service.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-foreground-muted">{service.summary}</p>
						</div>

						<div class="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
							Explore
							<ArrowUpRight class="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
