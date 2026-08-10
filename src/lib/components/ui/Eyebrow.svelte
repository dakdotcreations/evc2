<script lang="ts">
	let {
		text,
		class: className = '',
		light = false
	}: { text: string; class?: string; light?: boolean } = $props();
</script>

<span
	class={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase ${light ? 'text-primary-foreground/70' : 'text-secondary'} ${className}`}
>
	<span class="h-0.5 w-4 bg-accent"></span>
	{text}
</span>
