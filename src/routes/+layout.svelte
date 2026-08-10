<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import gsap from "gsap";

    // import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
    import { Menu, X } from "@lucide/svelte"

	import Button from '$lib/components/ui/button.svelte'
	import NavMenu from '$lib/components/sections/navMenu.svelte'
	import Footer from '$lib/components/sections/Footer.svelte'
    import { useGsap } from '$lib/utils/UseGsap';
	import Logo from '$lib/components/logo.svelte'
	import { navLinks } from '$lib/data/nav';
    
    useGsap(({ ScrollSmoother }) => {
        gsap.registerPlugin(ScrollSmoother);
        
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    })

    let isMenuOpen = $state(false)
    
	function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen
	}

    let { children } = $props();
</script>

<svelte:head>
	<title>FIAT Creative Events Company Limited | Branding · Events · Culture</title>
	<meta name="description" content="FIAT is a branding, events and brand activation company that builds culture through everything we touch — spaces, moments, and the small details in between." />

	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet">

	<link rel="icon" href={favicon} />
</svelte:head>


<div class="min-h-screen flex flex-col relative selection:bg-accent selection:text-accent-foreground content-grid font-body text-foreground" id="smooth-wrapper">
	<!-- Primary Site Header -->
	<header class="sticky top-0 z-50 content-grid border-b border-border bg-background/90 backdrop-blur-md">
		<div class="h-18 flex items-center justify-between breakout md:h-20">
			<!-- Brand Logo & Identity -->
			<a href="/" class="flex items-center gap-4 group">
                <Logo class="h-8 md:h-9" />
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-8 md:flex">
				{#each navLinks as link (link.href)}
					<a href={link.href} class="group relative pb-1 text-sm font-semibold text-foreground-muted transition-colors hover:text-foreground">
						{link.label}
						<span class="absolute inset-x-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
					</a>
				{/each}
			</nav>

			<!-- Action Callouts -->
			<div class="flex items-center gap-3">
				<a href="/contact" class="hidden md:block">
                    <Button variant="outline">
                        Talk to us
                    </Button>
				</a>

                <!-- Mobile Menu Button -->
                <Button onclick={toggleMobileMenu} variant="outline" size="icon" class="md:hidden">
                    {#if isMenuOpen}
                        <X class="size-5" />
                    {:else}
                        <Menu class="size-5" />
                    {/if}
                </Button>
			</div>
		</div>
	</header>

	<!-- Mobile Dropdown Menu (kept outside header so its own fixed overlay isn't trapped by the header's backdrop-blur containing block) -->
	<NavMenu bind:isMenuOpen />

	<!-- Main Viewport -->
	<main class="grow content-grid" id="smooth-content">
		{@render children()}
    	<Footer />
	</main>
</div>

