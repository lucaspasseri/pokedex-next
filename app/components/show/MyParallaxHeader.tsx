"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MyParallaxHeader() {
	gsap.registerPlugin(ScrollTrigger);
	const main = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			gsap.to(".layer-bg", {
				y: 700,
				scrollTrigger: {
					scrub: 1,
				},
			});
			gsap.to(".layer-1", {
				scrollTrigger: {
					scrub: 1,
				},
				y: 500,
			});
			gsap.to(".layer-2", {
				scrollTrigger: {
					scrub: 1,
				},
				y: 200,
			});
			gsap.to(".text", {
				scrollTrigger: {
					scrub: 1,
				},
				y: 1000,
			});
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);
	return (
		<div ref={main}>
			<div id="parallax-header">
				<div className="layer-bg layer"></div>
				<div className="layer-1 layer"></div>
				<h1 className="layer text">PARALLAX</h1>
				<div className="layer-2 layer"></div>
			</div>
		</div>
	);
}
