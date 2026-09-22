<script lang="ts">
	import { reveal } from '$lib/utils/reveal';
	import type { ServiceCategory } from '$lib/data/services';
	import { Check, ImageIcon } from '@lucide/svelte';

	let { service, index }: { service: ServiceCategory; index: number } = $props();

	const reversed = $derived(index % 2 === 1);
</script>

<section
    id={service.slug}
    class="full-width content-grid scroll-mt-36 border-b border-border py-16 md:py-24"
    class:bg-surface-soft={index % 2 === 1}
>
    <div class="breakout flex flex-col gap-12 lg:gap-16">
        <!-- Full-Width Media Showcase (Clean, No Overlays) -->
        <div 
            use:reveal 
            class="relative aspect-16/8 w-full overflow-hidden rounded-3xl"
        >
            <img
                src={service.image2 || service.image}
                alt={service.title}
                class="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />

            <!-- Floating Category Icon Badge -->
            
        </div>

        <!-- Details Section Below Image -->
        <div class="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <!-- Left Side: Title & Summary -->
            <div use:reveal={80} class="lg:col-span-5 flex flex-col justify-between">
                <div>
                    <div class="flex size-14 items-center justify-center rounded-2xl bg-surface/90 text-primary backdrop-blur-md border border-border/40 mb-4">
                        {#each [service.icon] as Icon}
                            <Icon class="size-7" />
                        {/each}
                    </div>
                    <h2 class="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        {service.title}
                    </h2>
                    <p class="mt-4 text-lg leading-relaxed text-foreground-muted">
                        {service.summary}
                    </p>
                </div>
            </div>

            <!-- Right Side: Service Offering List (Minimal, Non-Card Layout) -->
            <div use:reveal={120} class="lg:col-span-7">
                <ul class="grid gap-8">
                    {#each service.items as item, i (item.title)}
                        <li use:reveal={i * 60} class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2.5">
                                <Check class="size-4 shrink-0 text-secondary" />
                                <h3 class="font-bold text-foreground">
                                    {item.title}
                                </h3>
                            </div>
                            <p class="pl-6 text-sm leading-relaxed text-foreground-muted">
                                {item.description}
                            </p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>
