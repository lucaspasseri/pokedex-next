"use client";

import "./globals.css";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Recap() {
	gsap.registerPlugin(ScrollTrigger);
	const recap = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			const tl = gsap.timeline();

			function part1() {
				tl.to(".logo", {
					x: "-35vw",
					scrollTrigger: {
						trigger: ".logo",
						scrub: true,
						start: "0px", // when the top of the trigger hits the top of the viewport
						end: "300px",
					},
				})
					.to(
						".brand-name",
						{
							x: "35vw",
							scrollTrigger: {
								trigger: ".brand-name",
								scrub: true,
								start: "0px", // when the top of the trigger hits the top of the viewport
								end: "300px",
							},
						},
						"<"
					)
					.to(
						".brand-name",
						{
							y: "120vh",
							scrollTrigger: {
								trigger: ".brand-name",
								scrub: true,
								start: "0px", // when the top of the trigger hits the top of the viewport
								//end: "bottom top",
								end: "999px",
							},
						},
						">"
					)
					.to(
						".logo",
						{
							y: "120vh",
							scrollTrigger: {
								trigger: ".logo",
								scrub: true,
								start: "0px", // when the top of the trigger hits the top of the viewport
								end: "999px",
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
					.to(".logo", {
						x: "0px",
						scrollTrigger: {
							trigger: ".logo",
							scrub: true,
							markers: true,
							start: "1000px",
							end: "+=600px",
						},
					})
					.to(
						".brand-name",
						{
							x: "0px",
							scrollTrigger: {
								trigger: ".brand-name",
								scrub: true,
								start: "1000px",
								end: "+=1000px",
							},
						},
						"<"
					);

				return tl2;
			}

			const tlAll = gsap.timeline();

			tlAll.add(part1());
			tlAll.add(part2(), ">");
		}, recap); // <- Scope!

		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<div ref={recap} className="recap bg-red-900 flex justify-center">
			<div className="isic flex">
				<div className="logo" />
				<div className="brand-name" />
			</div>
		</div>
	);
}
