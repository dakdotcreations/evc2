import { onMount, onDestroy } from "svelte";

type GsapModules = {
    gsap: typeof import("gsap").default;
    ScrollTrigger: any;
    ScrollSmoother: any;
    SplitText: any;
};

let gsapPromise: Promise<GsapModules> | null = null;

async function loadGsap(): Promise<GsapModules> {
    if (!gsapPromise) {
        gsapPromise = (async () => {
            // Parallelize module loading
            const [
                gsapModule,
                ScrollTriggerModule,
                ScrollSmootherModule,
                SplitTextModule
            ] = await Promise.all([
                import("gsap"),
                import("gsap/ScrollTrigger"),
                import("gsap/ScrollSmoother"), // Requires GSAP Club membership / package setup
                import("gsap/SplitText")
            ]);

            const gsap = gsapModule.default || gsapModule;
            const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;
            const ScrollSmoother = ScrollSmootherModule.default || ScrollSmootherModule;
            const SplitText = SplitTextModule.default || SplitTextModule;

            // ScrollSmoother requires ScrollTrigger to be registered alongside it
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

            return { gsap, ScrollTrigger, ScrollSmoother, SplitText };
        })();
    }
    return gsapPromise;
}

export function useGsap(
    setup: (deps: GsapModules) => (() => void) | void,
    scope?: HTMLElement | string
) {
    let userCleanup: (() => void) | void;
    let ctx: gsap.Context | null = null;

    onMount(async () => {
        const deps = await loadGsap();

        ctx = deps.gsap.context(() => {
            userCleanup = setup(deps);
        }, scope);

        deps.ScrollTrigger.refresh();
    });

    onDestroy(() => {
        userCleanup?.();
        ctx?.revert(); // Automatically kills ScrollSmoother instances created inside ctx
    });
}