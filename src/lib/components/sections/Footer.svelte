<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import { navLinks } from '$lib/data/nav';
	import { Phone, Mail, MapPin, Globe } from '@lucide/svelte';

	const year = new Date().getFullYear();
</script>

<footer class="full-width bg-deep text-deep-foreground content-grid">
	<div class="breakout grid gap-12 pt-20 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:pt-28">
		<div>
			<Logo class="h-8 brightness-0 invert" />
			<p class="mt-4 max-w-sm text-sm leading-relaxed text-deep-foreground/70">
				Branding, events and brand activation built on eight years of craft, hospitality and
				respect for the clock.
			</p>
			<p class="font-voice mt-6 text-2xl text-accent italic">Time. Hospitality. Community. Excellence.</p>
		</div>

		<div>
			<p class="text-xs font-bold tracking-[0.16em] text-deep-foreground/50 uppercase">Studio</p>
			<ul class="mt-4 space-y-3">
				{#each navLinks as link (link.href)}
					<li>
						<a href={link.href} class="text-sm font-medium text-deep-foreground/80 transition-colors hover:text-accent">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="text-xs font-bold tracking-[0.16em] text-deep-foreground/50 uppercase">Work with us</p>
			<ul class="mt-4 space-y-3 text-sm text-deep-foreground/80">
				<li>
					<a href="tel:+2340000000000" class="flex items-center gap-2 hover:text-accent transition-colors">
						<Phone class="size-3.5 shrink-0" /> +234 000 000 0000
					</a>
				</li>
				<li>
					<a href="mailto:hello@fiatcreative.com" class="flex items-center gap-2 hover:text-accent transition-colors">
						<Mail class="size-3.5 shrink-0" /> hello@fiatcreative.com
					</a>
				</li>
				<li class="flex items-center gap-2">
					<MapPin class="size-3.5 shrink-0" /> Lagos, Nigeria
				</li>
			</ul>
		</div>

		<div>
			<p class="text-xs font-bold tracking-[0.16em] text-deep-foreground/50 uppercase">Follow</p>
			<ul class="mt-4 space-y-3 text-sm text-deep-foreground/80">
				<li>
					<a href="https://instagram.com" class="flex items-center gap-2 hover:text-accent transition-colors">
						<Globe class="size-3.5 shrink-0" /> Instagram
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="breakout flex flex-col items-center justify-between gap-4 border-t border-deep-foreground/10 py-8 text-xs text-deep-foreground/50 sm:flex-row">
		<p>© {year} FIAT Creative Events Company Limited. All rights reserved.</p>
		<p>Branding · Events · Culture</p>
	</div>
</footer>
