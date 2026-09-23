<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { ArrowUpRight } from '@lucide/svelte';

	let { compact = false }: { compact?: boolean } = $props();
</script>

<section class="full-width content-grid bg-background py-20 md:py-28">
    {#if compact}
        <!-- ================= HOMEPAGE VERSION (COMPACT TEASER) ================= -->
        <div class="breakout grid gap-12 lg:grid-cols-12 lg:items-center">
            <!-- Image Block -->
            <div use:reveal class="lg:col-span-5">
                <div class="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border/40 shadow-xl">
                    <img 
                        src="/fiat/Speakers_on_conference_stage_2K_20260922221049.jpeg" 
                        alt="Event Setup and Vinyl Signage Production" 
                        class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>

            <!-- Content Block -->
            <div use:reveal={120} class="lg:col-span-7 flex flex-col justify-center">
                <Eyebrow text="Who are we" />
                <h2 class="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    Spatial branding meets full-scale event execution.
                </h2>

                <p class="mt-6 text-lg leading-relaxed text-foreground-muted">
                    Rooted in environmental branding, we bring physical spatial design, precision staging, and full-scale production to corporate events and brand activations.
                </p>

                <div class="my-8 rounded-2xl border-l-4 border-accent bg-surface-soft p-6 shadow-sm">
                    <p class="font-voice text-xl leading-snug font-medium text-foreground italic">
                        "Hospitality isn't a department at FIAT. It's a default setting."
                    </p>
                </div>

                <div>
                    <a 
                        href="/about" 
                        class="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground hover:shadow-lg"
                    >
                        <span>Discover Our Story</span>
                        <ArrowUpRight class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </div>
    {:else}
        <!-- ================= ABOUT PAGE VERSION (FULL NARRATIVE) ================= -->
        <div class="breakout flex flex-col gap-12 lg:gap-16">
            <!-- Header & Banner Image -->
            <div use:reveal class="flex flex-col gap-6">
                <!-- <Eyebrow text="Our Story" /> -->
                <h1 class="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Branding Corporate Culture.
                </h1>

                <div class="relative mt-4 aspect-16/8 w-full overflow-hidden rounded-3xl border border-border/40">
                    <img 
                        src="/fiat/Speakers_on_conference_stage_2K_20260922221049.jpeg" 
                        alt="FIAT Brand Activation Production" 
                        class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>

            <!-- Narrative Content Grid -->
            <div class="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
                <!-- Left Column -->
                <div use:reveal={80} class="lg:col-span-6 space-y-4 text-lg leading-relaxed text-foreground-muted">
                    <h3 class="font-display text-2xl font-bold text-foreground">
                        Born from Precision, Built for Scale
                    </h3>
                    <p>
                        FIAT builds physical brand environments shaping spaces, staging, and identity into live experiences. We apply that same spatial mastery to corporate gatherings, product launches, and brand activations.
                    </p>
                    <p>
                        With deep expertise in graphic production, set design, and AV workflows, we deliver live events with total technical control.
                    </p>
                </div>

                <!-- Right Column -->
                <div use:reveal={120} class="lg:col-span-6 space-y-4 text-lg leading-relaxed text-foreground-muted">
                    <div class="rounded-3xl border border-border bg-surface-soft p-6">
                        <p class="font-voice text-xl leading-snug font-medium text-foreground italic">
                            Hospitality isn't a department at FIAT. It's a default setting.
                        </p>
                        <p class="mt-3 text-sm leading-relaxed text-foreground-muted">
                            Every delegate, guest, and vendor experiences flawless execution delivered with warmth and clarity.
                        </p>
                    </div>

                    <p>
                        Driven by punctuality and creative direction, we handle the production logistics so you can focus on driving impact.
                    </p>
                </div>
            </div>

            <!-- Event & Activation Pillars -->
            <div use:reveal={160} class="mt-4 grid gap-6 sm:grid-cols-3">
                <div class="flex flex-col gap-2 rounded-2xl border border-border/60 bg-surface-soft p-6">
                    <h4 class="font-bold text-foreground">Brand Activations</h4>
                    <p class="text-sm text-foreground-muted">Interactive environments designed to connect directly with your audience.</p>
                </div>
                <div class="flex flex-col gap-2 rounded-2xl border border-border/60 bg-surface-soft p-6">
                    <h4 class="font-bold text-foreground">Staging & AV</h4>
                    <p class="text-sm text-foreground-muted">Broadcast-quality sound, lighting, displays, and custom set designs.</p>
                </div>
                <div class="flex flex-col gap-2 rounded-2xl border border-border/60 bg-surface-soft p-6">
                    <h4 class="font-bold text-foreground">On-Site Logistics</h4>
                    <p class="text-sm text-foreground-muted">Military-grade precision managing timing, vendors, and attendee flow.</p>
                </div>
            </div>
        </div>
    {/if}
</section>
