<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import { whyChoosePoints } from '$lib/data/approach';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
</script>

<section class="full-width content-grid bg-background py-8">
	<div class="breakout overflow-hidden rounded-[2.5rem] bg-primary py-16 text-primary-foreground md:py-20" use:reveal>
		<div class="content-grid">
			<div class="breakout max-w-xl">
				<Eyebrow text="Why choose FIAT" light />
				<h2 class="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
					Fun to work with. Painfully reliable.
				</h2>
			</div>

			<div class="breakout mt-12 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
				{#each whyChoosePoints as point, i (point.title)}
					<div class="bg-primary p-8" use:reveal={i * 60}>
						<span class="font-display text-lg font-extrabold text-accent">0{i + 1}</span>
						<h3 class="mt-3 font-display text-lg font-bold">{point.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-primary-foreground/70">{point.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
