<script lang="ts">
	const words = ['Branding', 'Event production', 'Set design', 'Brand activation', 'Hospitality', 'Culture'];
</script>

<div class="full-width overflow-hidden border-y border-primary-foreground/10 bg-primary py-4">
	<div class="flex w-max animate-marquee items-center gap-10">
		{#each Array(2) as _, loop (loop)}
			<div class="flex shrink-0 items-center gap-10" aria-hidden={loop === 1}>
				{#each words as word (word)}
					<span class="flex items-center gap-10 font-display text-lg font-bold tracking-tight whitespace-nowrap text-primary-foreground uppercase">
						{word}
						<span class="text-accent">—</span>
					</span>
				{/each}
			</div>
		{/each}
	</div>
</div>
