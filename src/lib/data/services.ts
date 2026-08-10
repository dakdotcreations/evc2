import type { Component } from 'svelte';
import { Paintbrush, CalendarClock, LayoutTemplate, Megaphone } from '@lucide/svelte';

export type ServiceItem = {
	title: string;
	description: string;
};

export type ServiceCategory = {
	slug: string;
	number: string;
	icon: Component;
	title: string;
	summary: string;
	image: string;
	items: ServiceItem[];
};

export const services: ServiceCategory[] = [
	{
		slug: 'branding',
		number: '01',
		icon: Paintbrush,
		title: 'Branding & Visual Communication',
		summary:
			'This is where FIAT was born, and it remains our sharpest edge. We turn brand identities into physical, felt experiences — across offices, retail spaces, events and everyday touchpoints.',
		image: 'Feature wall graphics being applied in a corporate reception',
		items: [
			{
				title: 'Corporate & Environmental Branding',
				description:
					'Wall graphics, feature walls, signage, reception and interior brand applications.'
			},
			{
				title: 'Large-Format Graphics & Production',
				description: 'Banners, wallpapers, displays, decals and signage, from concept to installation.'
			},
			{
				title: 'Brand Identity Implementation',
				description:
					'Consistent, accurate application of logo, colour, typography and guidelines across every touchpoint.'
			},
			{
				title: 'Promotional & Branded Merchandise',
				description: "Branded items that carry your identity beyond the space and into people's hands."
			},
			{
				title: 'Brand Activations & Experiential Design',
				description: 'Interactive, attention-grabbing touchpoints designed to be noticed, not ignored.'
			}
		]
	},
	{
		slug: 'events',
		number: '02',
		icon: CalendarClock,
		title: 'Event Management & Production',
		summary:
			'Because branding taught us that details matter, we bring that same precision into full event delivery — from first concept to final teardown.',
		image: 'Live stage, lighting rig and AV setup at an executive summit',
		items: [
			{
				title: 'Event Strategy & Creative Direction',
				description: 'Translating your objective into a clear, compelling event concept.'
			},
			{
				title: 'Event Planning & Production',
				description:
					'Logistics, supplier coordination, technical planning and on-site delivery, managed end to end.'
			},
			{
				title: 'Corporate Events & Brand Experiences',
				description:
					'Curated gatherings for clients, staff, partners and VIPs that leave the right impression.'
			},
			{
				title: 'Conferences, Summits & Executive Events',
				description: 'Seamless delivery of forums, launches, awards and executive engagements.'
			},
			{
				title: 'Technical & Event Production',
				description: 'Staging, sound, lighting, LED and AV, delivered to a professional standard.'
			},
			{
				title: 'Talent, Guest & Stakeholder Management',
				description: 'Coordinating hosts, speakers, performers and VIPs so nothing is left to chance.'
			},
			{
				title: 'Logistics & On-Site Operations',
				description: 'Suppliers, installations, rehearsals, event-day running and post-event dismantling.'
			}
		]
	},
	{
		slug: 'set-design',
		number: '03',
		icon: LayoutTemplate,
		title: 'Set Design',
		summary:
			'We transform ordinary venues into environments that feel intentional — designed, styled and built around your brand and your guests.',
		image: 'Styled stage set with florals, texture and layered lighting',
		items: [
			{
				title: 'Spatial Design & Styling',
				description: 'Venue layouts that balance beauty, function and guest flow.'
			},
			{
				title: 'Creative Set & Stage Design',
				description: 'Stage environments and focal features that bring your event concept to life.'
			},
			{
				title: 'Décor & Styling',
				description: 'Furniture, fabric, florals, texture and props, curated with intention.'
			},
			{
				title: 'Lighting & Atmosphere',
				description: 'Lighting design that shapes mood and elevates a space in an instant.'
			},
			{
				title: 'Brand Integration',
				description: 'Your identity woven through the venue via signage, graphics and structures.'
			},
			{
				title: 'Venue Transformation & Production',
				description: 'Full set-up, styling, technical coordination and dismantling, handled by us.'
			}
		]
	},
	{
		slug: 'brand-activation',
		number: '04',
		icon: Megaphone,
		title: 'Brand Strategy & Activation',
		summary:
			'We create the moments where a brand actually meets its audience, and make sure that meeting is memorable.',
		image: 'Guests engaging with a branded activation booth at a product launch',
		items: [
			{
				title: 'Corporate Brand Activations',
				description: 'Campaigns that put your brand directly in front of the people who matter.'
			},
			{
				title: 'Public Awareness & Promotional Campaigns',
				description: 'Visibility-driven campaigns built for engagement, not just impressions.'
			},
			{
				title: 'Product & Service Launches',
				description: 'Launches designed to introduce, excite and convert.'
			},
			{
				title: 'Branded Customer Experiences',
				description: 'Touchpoints that turn customers into community.'
			},
			{
				title: 'Promotional Merchandise',
				description: 'Tangible brand pieces that extend the experience beyond the day.'
			}
		]
	}
];
