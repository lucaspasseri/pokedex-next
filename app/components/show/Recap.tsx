"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Recap() {
	gsap.registerPlugin(ScrollTrigger);
	const recap = useRef(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline();

		function part1() {
			tl.to(".logo", {
				x: "-35vw",
				scrollTrigger: {
					trigger: ".logo",
					scrub: true,
					start: "-40px", // when the top of the trigger hits the top of the viewport
					end: "0px",
				},
			})
				.to(
					".brand-name",
					{
						x: "35vw",
						scrollTrigger: {
							trigger: ".brand-name",
							scrub: true,
							start: "-40px", // when the top of the trigger hits the top of the viewport
							end: "0px",
						},
					},
					"<"
				)
				.to(
					".brand-name",
					{
						y: "130vh",
						scrollTrigger: {
							trigger: ".brand-name",
							scrub: true,
							start: "-40px", // when the top of the trigger hits the top of the viewport
							//end: "bottom top",
							end: "599px",
						},
					},
					">"
				)
				.to(
					".logo",
					{
						y: "130vh",
						scrollTrigger: {
							trigger: ".logo",
							scrub: true,
							start: "-40px", // when the top of the trigger hits the top of the viewport
							end: "599px",
							// end: "bottom+=500px bottom",
						},
					},
					"<"
				);

			return tl;
		}

		function part2() {
			const tl2 = gsap.timeline();

			tl2
				.to(
					".logo",
					{
						x: "0vw",
						scrollTrigger: {
							trigger: ".logo",
							scrub: true,
							start: "500px",
							end: "+=100px",
						},
					},
					">"
				)
				.to(
					".brand-name",
					{
						x: "0vw",
						scrollTrigger: {
							trigger: ".brand-name",
							scrub: true,
							start: "500px",
							end: "+=100px",
						},
					},
					"<"
				);

			return tl2;
		}

		const tlAll = gsap.timeline();

		tlAll.add(part1());
		tlAll.add(part2(), ">");
	}, []);

	const lenisRef = useRef();

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
			<div ref={recap} className="recap flex justify-center absolute w-full">
				<div className="isic flex pt-[40px]">
					<div className="logo" />
					<div className="brand-name" />
				</div>
			</div>
		</ReactLenis>
	);
}
