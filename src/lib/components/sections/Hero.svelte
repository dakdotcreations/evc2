<script lang="ts">
	import { reveal } from "$lib/utils/reveal";
	import Button from "$lib/components/ui/button.svelte";
	import Eyebrow from "$lib/components/ui/Eyebrow.svelte";
	import { ArrowUpRight, ImageIcon } from "@lucide/svelte";

	const swatches = [
		{
			name: "Navy",
			tag: "Primary",
			class: "bg-primary text-primary-foreground",
		},
		{
			name: "Gold",
			tag: "Accent",
			class: "bg-accent text-accent-foreground",
		},
		{ name: "Maroon", tag: "Deep", class: "bg-deep text-deep-foreground" },
		{
			name: "Bronze",
			tag: "Secondary",
			class: "bg-secondary text-secondary-foreground",
		},
	];
</script>

<section class="full-width bg-background pb-12 pt-20">
	<div class="breakout flex flex-col-reverse relative">
		<div use:reveal class="lg:absolute lg:inset-0 z-10 md:grid md:place-content-center md:text-center p-4">
			<h1
				class="mt-5 font-display h1 leading-[1.05] font-extrabold tracking-tight text-foreground lg:text-surface"
			>
				Branding is <span
					class="font-voice font-medium text-deep lg:text-background italic"
					>culture</span
				> <br/> We bring it to life.
			</h1>

			<p
				class="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted lg:text-surface/80"
			>
				Immersive experiences that align with your brand
				strategy and identity.
			</p>

			<div class="mt-9 hidden lg:flex flex-wrap items-center justify-center gap-4">
				<a href="/contact">
					<Button variant="default">
						Start a project
						<ArrowUpRight class="size-4" />
					</Button>
				</a>
				<a href="/services">
					<Button variant="outlineDark">See what we do</Button>
				</a>
			</div>
			<div class="mt-9 flex flex-wrap items-center justify-center lg:hidden gap-4">
				<a href="/contact">
					<Button variant="primary">
						Start a project
						<ArrowUpRight class="size-4" />
					</Button>
				</a>
				<a href="/services">
					<Button variant="outline">See what we do</Button>
				</a>
			</div>
		</div>

		<div class="relative p-4" use:reveal={150}>
			<div class="aspect-square sm:aspect-16/12 md:aspect-16/10 lg:aspect-16/8 rounded-3xl overflow-hidden relative hero-container">
				<img
					src="/fiat/fiat_(6)_2K_20260922195257.jpeg"
					alt=""
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>


<style>
	.hero-container{
        @media (width >= 64rem /* 1024px */) {
            &::before {
                content: '';
                position: absolute;
                inset: 0;
                
                background: radial-gradient(
                    ellipse at 50% 45%,           /* Target center height (X%, Y%) */
                    rgba(15, 23, 42, 0.9) 0%,     /* Darkest core color */
                    rgba(15, 23, 42, 0.5) 40%,    /* Soft transition */
                    transparent 75%               /* Fade to image edges */
                );
                
                pointer-events: none; /* Allows clicks to pass through to elements below */
                z-index: 1;
            }
        }

        img {
            animation: pulseZoom 10s ease-in-out infinite alternate;
        }
    }



    @keyframes pulseZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.06); /* Zooms in by 6% */
  }
}
</style>