"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Recap() {
	const logo = useRef(null);
	const brandName = useRef(null);
	const lenisRef = useRef<any>(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: "top",
				end: "+=1000px",
				markers: true,
			},
		});

		tl.to(logo.current, {
			x: "-35vw",
			y: "40vh",
		})
			.to(
				brandName.current,
				{
					x: "35vw",
					y: "40vh",
				},
				"<"
			)
			.to(
				brandName.current,
				{
					y: "130vh",
				},
				">"
			)
			.to(
				logo.current,
				{
					y: "130vh",
				},
				"<"
			)
			.to(
				logo.current,
				{
					x: "0vw",
				},
				">"
			)
			.to(
				brandName.current,
				{
					x: "0vw",
				},
				"<"
			);
	}, []);

	useEffect(() => {
		function update(time: any) {
			lenisRef.current?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	});

	return (
		<ReactLenis ref={lenisRef} autoRaf={false}>
			<div className="recap flex justify-center absolute w-full">
				<div className="isic flex pt-[40px]">
					<div ref={logo} className="logo" />
					<div ref={brandName} className="brand-name" />
				</div>
			</div>
		</ReactLenis>
	);
}
