<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { Camera } from '@lucide/svelte';

	const tiles = [
		{ label: 'Feature wall installation', caption: 'Corporate HQ lobby, wall graphics mid-install', tall: true, image: 'images/wall-feat.jpg', tone: 'bg-primary/5' },
		{ label: 'Live stage & lighting rig', caption: 'Executive summit, main stage at golden hour', tall: false, image: 'images/wall-feat.jpg', tone: 'bg-secondary/10' },
		{ label: 'VIP lounge styling', caption: 'Florals, textures and warm ambient lighting', tall: true, image: 'images/wall-feat.jpg', tone: 'bg-deep/5' },
		{ label: 'Product launch', caption: 'Launching product at events', tall: true, image: 'images/e.webp', tone: 'bg-accent/10' },
		{ label: 'Large-format banner print', caption: 'On-site production and installation crew at work', tall: false, image: 'images/wall-feat.jpg', tone: 'bg-secondary/10' },
		{ label: 'Branded merchandise flat-lay', caption: 'Promotional items carrying the client identity', tall: false, image: 'images/wall-feat.jpg', tone: 'bg-primary/5' }
	];
</script>

<section class="full-width bg-background py-24 md:py-32">
	<div class=" content-grid">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" use:reveal>
			<div>
				<Eyebrow text="Recent work" />
				<h2 class="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
					A glimpse behind the build.
				</h2>
			</div>
			<p class="max-w-sm text-foreground-muted">
				From feature walls to full-scale stages — a look at the moments and spaces we've shaped.
			</p>
		</div>

		<div class="mt-14 grid auto-rows-[9rem] grid-cols-2 gap-4 md:grid-cols-3">
			{#each tiles as tile, i (tile.label)}
				<div
					class={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${tile.tone} ${tile.tall ? 'row-span-2' : 'row-span-1'}`}
					use:reveal={i * 70}
				>
					{#if tile.image && tile.tall}
					<img src="{tile.image}" alt="" class="object-cover -z-10">
					{/if}
					<div class={`p-4 ${tile.tone}`}>
						<Camera class="absolute top-5 left-5 size-5 text-foreground-muted/40 transition-colors group-hover:text-secondary" />
						<p class="font-display text-sm font-bold text-foreground">{tile.label}</p>
						<p class="mt-1 text-xs leading-snug text-foreground-muted">{tile.caption}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
