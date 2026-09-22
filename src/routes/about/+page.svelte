<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import OurStory from '$lib/components/sections/OurStory.svelte';
	import Approach from '$lib/components/sections/Approach.svelte';
	import WhyChooseUs from '$lib/components/sections/WhyChooseUs.svelte';
	import PromiseBanner from '$lib/components/sections/PromiseBanner.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import { reveal } from '$lib/utils/reveal';
</script>

<svelte:head>
	<title>About Us | FIAT Creative Events Company Limited</title>
	<meta name="description" content="FIAT began in branding — eight years of building identities that stuck. Today we're a full creative events and branding house, hospitality-first and community-rooted." />
</svelte:head>

<OurStory />

<section class="full-width content-grid bg-surface py-20 md:py-28">
    <div class="breakout text-center" use:reveal>
        <Eyebrow text="Our Commitment" />
        <h2 class="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span class="italic">A brand is not just seen</span> <br>it is experienced.
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">
            Every stage, product launch, and corporate gathering is a moment to build trust. Whether we are producing your live event, designing your spatial setup, or executing a brand activation, we deliver with military-grade precision and unmatched hospitality.
        </p>
    </div>
</section>

<!-- <Approach /> -->
<WhyChooseUs />
<PromiseBanner />
<!-- <CTA
	title="Ready to bring your brand to life?"
	description="Let's talk about your next launch, activation or gathering."
/> -->
