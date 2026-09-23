<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import { services } from '$lib/data/services';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ArrowUpRight, ImageIcon } from '@lucide/svelte';

	const tones = ['bg-primary/5', 'bg-secondary/10', 'bg-deep/5', 'bg-accent/10'];
</script>

<section class="full-width content-grid bg-background py-24 md:py-32 pt-0">
	<div class="breakout">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" use:reveal>
			<div>
				<Eyebrow text="What do we do" />
				<h2 class="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
					Four disciplines. <br> One creative house.
				</h2>
			</div>
			<p class="max-w-sm text-foreground-muted">
				We start in branding, and it still shapes everything from full event production to
				set design and brand activations.
			</p>
		</div>

		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {#each services as service, i (service.slug)}
                {@const Icon = service.icon}
                <a
                    href={`/services#${service.slug}`}
                    use:reveal={i * 100}
                    class="group relative flex aspect-16/12 w-full flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-surface p-4 shadow-md transition-all duration-700 ease-out hover:-translate-y-2 hover:border-secondary/60 hover:shadow-2xl hover:shadow-secondary/20"
                >
                    <!-- Background Image with Scale Effect -->
                    <img
                        src={service.image}
                        alt={service.title}
                        class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <!-- Dark Overlay Gradients for Dynamic Contrast -->
                    <div class="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-primary/0 transition-all duration-500 group-hover:via-primary/30"></div>

                    <!-- Top Floating Icon Badge -->
                    <div class="relative z-10 self-end">
                        <div class="flex size-12 items-center justify-center rounded-2xl bg-surface/70 text-foreground backdrop-blur-md border border-border/40 transition-all duration-300 group-hover:scale-110 group-hover:border-secondary/40 group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:shadow-lg">
                            <Icon class="size-6 transition-transform duration-300 group-hover:rotate-6" />
                        </div>
                    </div>

                    <!-- Overlay Content (Title & Interactive CTA Reveal) -->
                    <div class="relative z-10 flex justify-between w-full gap-4">
                        <h3 class="font-display text-xl font-extrabold tracking-tight text-surface transition-colors duration-300 sm:text-2xl">
                            {service.title}
                        </h3>

                        <!-- Link Reveal on Hover -->
                        <div class="flex items-center gap-3 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
                            <span class="text-sm font-semibold uppercase text-accent opacity-0">
                                View
                            </span>

                            <div class="flex size-9 -translate-x-3 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all duration-300 ease-out group-hover:translate-x-0">
                                <ArrowUpRight class="size-4" />
                            </div>
                        </div>
                    </div>

                    <!-- Subtle Glow Accent on Hover -->
                    <div class="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-secondary/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                </a>
            {/each}
        </div>
	</div>
</section>
