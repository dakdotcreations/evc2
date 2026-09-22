<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import MarqueeBand from '$lib/components/sections/MarqueeBand.svelte';
	import ServicesOverview from '$lib/components/sections/ServicesOverview.svelte';
	import OurStory from '$lib/components/sections/OurStory.svelte';
	import WorkGallery from '$lib/components/sections/WorkGallery.svelte';
	import WhyChooseUs from '$lib/components/sections/WhyChooseUs.svelte';
	import Approach from '$lib/components/sections/Approach.svelte';
	import PromiseBanner from '$lib/components/sections/PromiseBanner.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
</script>

<svelte:head>
	<title>FIAT Creative Events Company Limited | Branding · Events · Culture</title>
	<meta name="description" content="Branding, events and brand activation. FIAT builds culture through spaces, moments and the small details in between." />
</svelte:head>

<Hero />
<MarqueeBand />
<OurStory compact />
<ServicesOverview />
<!-- <WorkGallery /> -->
<!-- <Approach compact /> -->
<WhyChooseUs />
<PromiseBanner />
<CTA />

