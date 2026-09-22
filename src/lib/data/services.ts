import type { Component } from 'svelte';
import { Building2, Briefcase, Wrench, Video } from '@lucide/svelte';

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
        slug: 'large-scale-events',
        number: '01',
        icon: Building2,
        title: 'Corporate Events',
        summary:
            'From major industry summits to high-profile celebrations.',
        image: '/fiat/fiat (4).jpg',
        items: [
            {
                title: 'Conferences, Conventions & Expos',
                description:
                    'Multi-day industry gatherings featuring keynote presentations, breakout sessions, sponsor booths, and seamless audience flow.'
            },
            {
                title: 'Product Launches & Brand Activations',
                description:
                    'Immersive media showcases and high-impact reveals designed to generate press coverage and social engagement.'
            },
            {
                title: 'Annual Galas & Award Ceremonies',
                description:
                    'Black-tie celebrations, milestone events, and industry recognition evenings with high-end staging and entertainment.'
            }
        ]
    },
    {
        slug: 'executive-gatherings',
        number: '02',
        icon: Briefcase,
        title: 'Executive Business Gatherings',
        summary:
            'Tailored corporate environments designed for strategic alignment, leadership focus, and building strong organizational culture.',
        image: '/fiat/fiat (2).jpg',
        items: [
            {
                title: 'Executive Retreats & Board Meetings',
                description:
                    'High-security, luxury off-site meetings tailored for C-suite executives and board directors.'
            },
            {
                title: 'Corporate Anniversaries & Shareholder Meetings',
                description:
                    'Professional, polished corporate assemblies with structured presentations and live streaming capabilities.'
            },
            {
                title: 'Team Building & Corporate Workshops',
                description:
                    'Interactive indoor and outdoor team experiences designed to boost morale, collaboration, and company culture.'
            }
        ]
    },
    {
        slug: 'end-to-end-production',
        number: '03',
        icon: Wrench,
        title: 'End-to-End Production & Execution',
        summary:
            'Complete technical and operational delivery.',
        image: '/fiat/Podium_on_stage_with_microphones_2K_20260922212414.jpeg',
        items: [
            {
                title: 'Event Strategy & Design',
                description:
                    'Spatial planning, thematic branding, concept development, and custom stage set creation.'
            },
            {
                title: 'Audiovisual & Technical Production',
                description:
                    'Professional lighting rigs, sound engineering, LED video walls, live webcasting, and hybrid event technology.'
            },
            {
                title: 'Vendor & Logistics Management',
                description:
                    'Venue sourcing, catering design, decor setup, transportation, security, and protocol management.'
            }
        ]
    },
    {
        slug: 'specialised-formats',
        number: '04',
        icon: Video,
        title: 'Specialised & Hybrid Formats',
        summary:
            'Modern event delivery combining digital reach with curated, high-touch physical environments for exclusive audiences.',
        image: '/fiat/Gala_dinner_stage_setup_2K_20260922210159.jpeg',
        items: [
            {
                title: 'Virtual & Hybrid Events',
                description:
                    'Seamless digital streaming platforms, remote speaker integration, and interactive attendee portals.'
            },
            {
                title: 'Client Appreciation Dinners & VIP Experiences',
                description:
                    'Curated, intimate dining and entertainment experiences for high-value clients and partners.'
            }
        ]
    }
];
