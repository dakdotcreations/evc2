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

<PageHeader
	eyebrow="About FIAT"
	title="Branding roots. Events range."
	description="We are a proudly hospitality-first, community-rooted team. We believe great work should feel warm, not stiff — playful, not chaotic."
/>

<OurStory />

<section class="full-width content-grid bg-surface py-24 md:py-32">
	<div class="breakout max-w-3xl" use:reveal>
		<Eyebrow text="Our commitment" />
		<h2 class="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
			A brand isn't just seen — it's experienced, hosted, and remembered.
		</h2>
		<p class="mt-6 text-lg leading-relaxed text-foreground-muted">
			Our commitment is to bring the same care we once poured into walls and signage into every
			stage, every launch and every gathering we touch. Whether we're branding your space,
			producing your event, designing your set, or activating your next big idea, FIAT shows up
			with warmth, precision and a genuine love for the craft.
		</p>
	</div>
</section>

<Approach />
<WhyChooseUs />
<PromiseBanner />
<CTA
	title="Ready to bring your brand to life?"
	description="Let's talk about your next launch, activation or gathering."
/>
