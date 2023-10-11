"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import useWindowSize from "@/app/hooks/useWindowSize";

export default function Recap() {
	const logo = useRef(null);
	const brandName = useRef(null);
	// const lenisRef = useRef<any>(null);
	const size = useWindowSize();

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: "top",
				end: "+=1000px",
			},
		});

		const logoInitialX = 200 - size.width / 2;
		const logoP = logoInitialX / size.width;
		const logoVW = logoP * 100 + "vw";

		const brandInitialX = size.width / 2 - 200;
		const brandP = brandInitialX / size.width;
		const brandVW = brandP * 100 + "vw";

		tl.to(logo.current, {
			x: logoVW,
			y: "40vh",
		})
			.to(
				brandName.current,
				{
					x: brandVW,
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
	}, [size.width]);

	// useEffect(() => {
	// 	function update(time: any) {
	// 		lenisRef.current?.raf(time * 1000);
	// 	}

	// 	gsap.ticker.add(update);

	// 	return () => {
	// 		gsap.ticker.remove(update);
	// 	};
	// });

	return (
		// <ReactLenis ref={lenisRef} autoRaf={false}>
		<div className="recap flex justify-center absolute w-full">
			<div className="isic flex pt-[40px]">
				<Image
					ref={logo}
					src="/images/parallax/isic-logo.png"
					alt="isic logo"
					height={132}
					width={132}
					className="z-30"
				/>
				<Image
					ref={brandName}
					src="/images/parallax/isic-brand-name.png"
					alt="isic brand"
					height={132}
					width={230}
					className="z-30"
				/>
			</div>
		</div>
		// </ReactLenis>
	);
}
