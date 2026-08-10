<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Button from '$lib/components/ui/button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ArrowUpRight, ImageIcon } from '@lucide/svelte';

	const stats = [
		{ value: '8+', label: 'Years in branding' },
		{ value: '4', label: 'Disciplines, one house' },
		{ value: '100%', label: 'Hospitality first' }
	];

	const swatches = [
		{ name: 'Navy', tag: 'Primary', class: 'bg-primary text-primary-foreground' },
		{ name: 'Gold', tag: 'Accent', class: 'bg-accent text-accent-foreground' },
		{ name: 'Maroon', tag: 'Deep', class: 'bg-deep text-deep-foreground' },
		{ name: 'Bronze', tag: 'Secondary', class: 'bg-secondary text-secondary-foreground' }
	];
</script>

<section class="full-width content-grid bg-background pt-14 pb-20 md:pt-20 md:pb-28">
	<div class="breakout grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
		<div use:reveal>
			<Eyebrow text="Branding · Events · Culture" />

			<h1 class="mt-5 font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
				We build <span class="font-voice font-medium text-deep italic">culture</span>
				— on time, every time.
			</h1>

			<p class="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
				FIAT is a branding and creative events company. Eight years of turning brand identities
				into spaces people remember, now applied to launches, activations and live experiences
				that move.
			</p>

			<div class="mt-9 flex flex-wrap items-center gap-4">
				<a href="/contact">
					<Button variant="primary">
						Start a project
						<ArrowUpRight class="size-4" />
					</Button>
				</a>
				<a href="/services">
					<Button variant="outline">See what we do</Button>
				</a>
			</div>

			<div class="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-8">
				{#each stats as stat (stat.label)}
					<div>
						<p class="font-display text-3xl font-extrabold text-foreground">{stat.value}</p>
						<p class="text-xs tracking-wide text-foreground-muted uppercase">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="relative" use:reveal={150}>
			<div class="flex aspect-4/5 flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-surface-soft p-8 text-center sm:aspect-3/4 lg:aspect-4/5">
				<ImageIcon class="size-6 text-secondary" />
				<span class="font-display text-lg font-bold text-foreground">Image</span>
				<p class="max-w-[26ch] text-sm text-foreground-muted">
					Branded event space mid-activation — guests mingling under styled lighting and a
					feature backdrop bearing the FIAT identity.
				</p>
			</div>

			<div class="absolute -bottom-6 -left-6 hidden w-48 grid-cols-2 gap-2 rounded-2xl border border-border bg-background p-3 shadow-2xl sm:grid">
				{#each swatches as swatch (swatch.name)}
					<div class={`flex aspect-square flex-col justify-between rounded-lg p-2.5 text-[0.6rem] font-bold tracking-wide uppercase ${swatch.class}`}>
						{swatch.name}
						<span class="text-[0.55rem] font-semibold opacity-70">{swatch.tag}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
