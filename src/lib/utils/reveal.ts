// Svelte action that toggles data-reveal="in" when the node enters the viewport.
// Pairs with the [data-reveal] CSS transition defined in layout.css.
export function reveal(node: HTMLElement, delay = 0) {
	node.setAttribute('data-reveal', '');
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.setAttribute('data-reveal', 'in');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
