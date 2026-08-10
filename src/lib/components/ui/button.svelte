<script lang="ts">
	import type { Snippet } from "svelte"

	type Variant = "primary" | "accent" | "default" | "outline" | "outlineDark"
	type Size = "default" | "icon"
	type ButtonType = "button" | "submit" | "reset"

	let {
		variant = "primary",
		size = "default",
		type = "button",
		disabled = false,
        class: className = "",
		children,
        ...rest
	}: {
		variant?: Variant
		size?: Size
		type?: ButtonType
		disabled?: boolean
        class?: string
		children: Snippet
        [key: string]: any
	} = $props()

	const base =
		"text-base font-medium rounded-full flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"

	const styles: Record<Variant, string> = {
		primary: "bg-primary text-primary-foreground hover:bg-deep shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5",
		accent: "bg-accent text-accent-foreground hover:bg-secondary hover:text-secondary-foreground shadow-lg shadow-accent/25 hover:-translate-y-0.5",
		default: "bg-surface text-foreground hover:bg-border",
		outline: "border border-primary/25 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
		outlineDark: "border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10",
	}

    const sizes: Record<Size, string> = {
		default: "px-8 h-14",
		icon: "size-14",
	}
</script>

<button {type} {disabled} class={`${base} ${styles[variant]} ${sizes[size]} ${className}`} {...rest}>
	{@render children()}
</button>
