// @ts-nocheck
"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MyParallaxBody() {
	gsap.registerPlugin(ScrollTrigger);
	const main = useRef();
	const refs = useRef([]);

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			let getRatio = (el: any) =>
				window.innerHeight / (window.innerHeight + el.offsetHeight);

			// gsap.utils.toArray("section").forEach((section, i) => {
			refs.current.forEach((section, i) => {
				section.bg = section.querySelector(".bg");

				const urls = [
					"https://images.pexels.com/photos/1731447/pexels-photo-1731447.jpeg",
					"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg",
					"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
					"https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg",
					"https://images.pexels.com/photos/2387966/pexels-photo-2387966.jpeg",
				];

				section.bg.style.backgroundImage = `url(${urls[i]})`;

				// the first image (i === 0) should be handled differently because it should start at the very top.
				// use function-based values in order to keep things responsive
				gsap.fromTo(
					section.bg,
					{
						backgroundPosition: () =>
							i + 1
								? `50% ${-window.innerHeight * getRatio(section)}px`
								: "50% 0px",
					},
					{
						backgroundPosition: () =>
							`50% ${window.innerHeight * (1 - getRatio(section))}px`,
						ease: "none",
						scrollTrigger: {
							trigger: section,
							start: () => (i + 1 ? "top bottom" : "top top"),
							end: "bottom top",
							scrub: true,
							invalidateOnRefresh: true, // to make it responsive
						},
					}
				);
			});
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<div ref={main}>
			<section ref={(el) => (refs.current[0] = el)}>
				<div className="bg"></div>
				<h1>Simple parallax sections</h1>
			</section>
			<section ref={(el) => (refs.current[1] = el)}>
				<div className="bg"></div>
				<h1>Hey look, a title</h1>
			</section>
			<section ref={(el) => (refs.current[2] = el)}>
				<div className="bg"></div>
				<h1>They just keep coming</h1>
			</section>
			<section ref={(el) => (refs.current[3] = el)}>
				<div className="bg"></div>
				<h1>So smooth though</h1>
			</section>
			<section ref={(el) => (refs.current[4] = el)}>
				<div className="bg"></div>
				<h1>Nice, right?</h1>
			</section>
		</div>
	);
}
