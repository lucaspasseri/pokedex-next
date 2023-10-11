"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function MyParallaxHeader() {
	gsap.registerPlugin(ScrollTrigger);
	const main = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
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
				<Image
					src="/images/parallax/landscape.jpeg"
					fill
					alt="background layer"
					className="layer-bg"
				/>
				<Image
					src="/images/parallax/landscape-mid.png"
					fill
					alt="second layer"
					className="layer-2"
				/>
				<h1 className="layer text">PARALLAX</h1>
				<Image
					src="/images/parallax/landscape-bottom.png"
					fill
					alt="third layer"
					className="layer-3"
				/>
			</div>
		</div>
	);
}
