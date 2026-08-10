<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ImageIcon } from '@lucide/svelte';

	let { compact = false }: { compact?: boolean } = $props();
</script>

<section class="full-width content-grid bg-background py-24 md:py-32">
	<div class="breakout grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
		<div use:reveal>
			<Eyebrow text="Our story" />
			<h2 class="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
				Branding people who happen to be excellent at events.
			</h2>

			<div class="mt-8 flex aspect-4/3 flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-surface p-8 text-center">
				<ImageIcon class="size-5 text-deep" />
				<span class="font-display text-lg font-bold text-deep">Image</span>
				<p class="max-w-[28ch] text-sm text-foreground-muted">
					FIAT's early days — a hand applying vinyl signage to a feature wall, mid-installation.
				</p>
			</div>
		</div>

		<div use:reveal={120}>
			<div class="space-y-4 text-lg leading-relaxed text-foreground-muted">
				<p>
					FIAT began in branding — eight years of building identities, transforming walls, signage
					and spaces into brand statements that stuck. Somewhere along the way, our clients kept
					asking us to bring that same energy to their launches, activations and gatherings. So we
					did.
				</p>
			</div>

			<p class="font-voice my-8 border-l-2 border-accent pl-6 text-2xl leading-snug font-medium text-deep italic">
				Hospitality isn't a department at FIAT. It's a default setting.
			</p>

			{#if !compact}
				<div class="space-y-4 text-lg leading-relaxed text-foreground-muted">
					<p>
						Today, FIAT is a full creative events and branding house, but our roots still show: we
						are, at our core, branding people who happen to be excellent at events. What sets us
						apart isn't just what we build — it's how we make people feel while we build it.
					</p>
					<p>
						Every client, guest, vendor and supplier who works with us should walk away feeling
						looked after. Combine that with our obsession for punctuality and precision, and you
						get a team that is genuinely fun to work with, and painfully reliable to work with.
					</p>
				</div>
			{/if}

			<div class="mt-8 grid grid-cols-2 gap-4">
				<div class="rounded-2xl border border-border bg-surface-soft p-6">
					<p class="font-display text-3xl font-extrabold text-primary">8 yrs</p>
					<p class="mt-1 text-sm text-foreground-muted">Branding heritage before events</p>
				</div>
				<div class="rounded-2xl border border-border bg-surface-soft p-6">
					<p class="font-display text-3xl font-extrabold text-primary">4</p>
					<p class="mt-1 text-sm text-foreground-muted">Disciplines under one roof</p>
				</div>
			</div>

			{#if compact}
				<a href="/about" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-secondary/50 underline-offset-4 hover:text-secondary">
					Read our full story
				</a>
			{/if}
		</div>
	</div>
</section>
