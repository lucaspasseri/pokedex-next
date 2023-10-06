"use client";

import "./globals.css";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
	const main = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			// make the boxes random colors
			gsap.set(".box", {
				backgroundColor: "rgb(random(0,190), random(0,190), random(0,190))",
			});

			// apply parallax effect to any element with a data-speed attribute
			gsap.to("[data-speed]", {
				y: (i, el) =>
					(1 - parseFloat(el.getAttribute("data-speed"))) *
					ScrollTrigger.maxScroll(window),
				ease: "none",
				scrollTrigger: {
					start: 0,
					end: "max",
					invalidateOnRefresh: true,
					scrub: 0,
				},
			});
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<>
			<p>
				Add a <code>data-speed</code> attribute to any element. 1 = normal
				scroll speed, 0 = no movement, 0.5 = half-speed, etc.
			</p>

			<div className="box-container">
				<div className="box" data-speed="0.25">
					0.25
				</div>
				<div className="box" data-speed="0.4">
					0.4
				</div>
				<div className="box" data-speed="0">
					0
				</div>
				<div className="box" data-speed="1">
					1
				</div>
				<div className="box" data-speed="0.75">
					0.75
				</div>
			</div>
		</>
	);
}
