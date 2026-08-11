<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ImageIcon } from '@lucide/svelte';

	let { compact = false }: { compact?: boolean } = $props();
</script>

<section class="full-width content-grid bg-background py-24 md:py-32">
	<div class={`breakout grid gap-14  ${compact ? 'lg:grid-cols-[2fr_1fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}>
		<div use:reveal>
			<Eyebrow text="Our story" />
			<h2 class="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
				Branding people who happen to be excellent at events.
			</h2>

			<div class={`mt-8 w-full overflow-hidden rounded-lg ${compact ? 'aspect-3/2' : 'aspect-16/10'}`}>
				<img src="/images/vinyl_signage.jpeg" alt="" class="h-full w-full object-cover">
			</div>
		</div>

		<div use:reveal={120}>
			<div class="opacity-0 mb-8 hidden lg:block">
				<Eyebrow text="Our story" />
				<div class="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
					Branding people 
				</div>
			</div>
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

			{#if compact}
				<a href="/about" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-secondary/50 underline-offset-4 hover:text-secondary">
					Read our full story
				</a>
			{/if}
		</div>
	</div>
</section>
