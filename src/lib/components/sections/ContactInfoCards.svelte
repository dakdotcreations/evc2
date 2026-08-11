<script lang="ts">
	import { reveal } from "$lib/utils/reveal";
	import { Phone, Mail, MapPin, Clock3 } from "@lucide/svelte";

	const cards = [
		{
			icon: Phone,
			label: "Call us",
			value: "+256 752 606 904",
			href: "tel:+256752606904",
		},
		{
			icon: Mail,
			label: "Email us",
			value: "hello@fiatcreativeevents.com",
			href: "mailto:hello@fiatcreativeevents.com",
		},
		{
			icon: MapPin,
			label: "Studio",
			value: "Kampala, Uganda",
			href: undefined,
		},
		{
			icon: Clock3,
			label: "Hours",
			value: "Mon – Sat: 9am – 6pm EAT",
			href: undefined,
		},
	];
</script>

<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
	{#each cards as card, i (card.label)}
		<div
			class="flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface-soft p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/10"
			use:reveal={i * 70}
		>
			<div class="flex justify-between items-center w-full">
				<div
					class="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
				>
					<card.icon class="size-5" />
				</div>
				<p
					class="text-xs font-semibold tracking-[0.15em] text-foreground-muted uppercase"
				>
					{card.label}
				</p>
			</div>
			<div class="w-full">
				{#if card.href}
					<a
						href={card.href}
						class="mt-1 block font-medium text-foreground text-wrap hover:text-secondary transition-colors"
						>{card.value}</a
					>
				{:else}
					<p class="mt-1 font-medium text-foreground">{card.value}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>
