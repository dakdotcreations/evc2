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

<section class="full-width content-grid bg-background pb-12">
	<div class="breakout grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
			<div class="aspect-7/8 rounded-3xl bg-surface-soft">
				<img src="/images/2151320713.webp" alt="" class="w-full h-full object-cover">
			</div>
		</div>
	</div>
</section>
