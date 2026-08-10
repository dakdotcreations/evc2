<script lang="ts">
	import PageHeader from '$lib/components/sections/PageHeader.svelte';
	import ServiceDetail from '$lib/components/sections/ServiceDetail.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
	import { services } from '$lib/data/services';
	import { reveal } from '$lib/utils/reveal';
</script>

<svelte:head>
	<title>Services | FIAT Creative Events Company Limited</title>
	<meta name="description" content="Branding & visual communication, event management & production, set design, and brand strategy & activation." />
</svelte:head>

<PageHeader
	eyebrow="What we do"
	title="Four disciplines, one creative house."
	description="We don't just decorate an occasion, we bring a brand to life inside it. From branding roots to full-scale event production, every service is built around the same instinct: make it felt, not just seen."
/>

<nav class="full-width content-grid sticky top-[4.5rem] z-30 border-b border-border bg-background/90 backdrop-blur-md md:top-20" use:reveal>
	<div class="breakout flex gap-6 overflow-x-auto py-4 text-sm font-medium whitespace-nowrap text-foreground-muted">
		{#each services as service (service.slug)}
			<a href={`#${service.slug}`} class="transition-colors hover:text-secondary">{service.title}</a>
		{/each}
	</div>
</nav>

{#each services as service, i (service.slug)}
	<ServiceDetail {service} index={i} />
{/each}

<CTA
	title="Not sure which discipline you need?"
	description="Tell us the vision — we'll tell you the plan. Most projects blend more than one of our services."
	buttonLabel="Talk to our team"
/>
