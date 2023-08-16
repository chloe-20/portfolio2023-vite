import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function portfolio() {
    gsap.registerPlugin(ScrollTrigger);
    const wholeSection = gsap.utils.toArray(".portfolio__item");

    gsap.to(wholeSection, {
        xPercent: -120 * (wholeSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}