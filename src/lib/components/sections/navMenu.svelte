<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/state';
	import { navLinks } from '$lib/data/nav';
	import { Phone, Mail, Globe, ArrowUpRight } from '@lucide/svelte';

	let { isMenuOpen = $bindable(false) }: { isMenuOpen?: boolean } = $props();

	function close() {
		isMenuOpen = false;
	}
</script>

{#if isMenuOpen}
	<div
		class="fixed inset-0 z-40 bg-primary text-primary-foreground overflow-y-auto"
		transition:fade={{ duration: 250, easing: cubicOut }}
	>
		<div class="content-grid min-h-screen py-32 pb-16">
			<div class="breakout grid gap-12 md:grid-cols-[1.3fr_1fr]">
				<nav>
					<ul class="flex flex-col gap-2">
						{#each navLinks as link, i (link.href)}
							<li in:fly={{ y: 24, duration: 400, delay: 80 + i * 60, easing: cubicOut }}>
								<a
									href={link.href}
									onclick={close}
									class="group flex items-baseline gap-4 py-3 border-b border-primary-foreground/10 font-display text-4xl font-extrabold tracking-tight transition-colors hover:text-accent sm:text-6xl"
									class:text-accent={page.url.pathname === link.href}
								>
									<span class="text-sm font-body text-primary-foreground/40 group-hover:text-accent/70">0{i + 1}</span>
									{link.label}
									<ArrowUpRight class="ml-auto size-6 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:size-9" />
								</a>
							</li>
						{/each}
					</ul>
				</nav>

				<div
					class="flex flex-col justify-between gap-10 border-t border-primary-foreground/10 pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0"
					in:fly={{ y: 24, duration: 400, delay: 340, easing: cubicOut }}
				>
					<div class="space-y-3 text-sm text-primary-foreground/70">
						<p class="font-display text-lg font-bold text-primary-foreground">Let's build culture, on time.</p>
						<a href="tel:+2340000000000" class="flex items-center gap-3 hover:text-accent transition-colors">
							<Phone class="size-4" /> +234 000 000 0000
						</a>
						<a href="mailto:hello@fiatcreative.com" class="flex items-center gap-3 hover:text-accent transition-colors">
							<Mail class="size-4" /> hello@fiatcreative.com
						</a>
					</div>

					<div class="flex items-center gap-4 text-sm text-primary-foreground/70">
						<a href="https://instagram.com" class="flex items-center gap-2 hover:text-accent transition-colors">
							<Globe class="size-4" /> Instagram
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
