"use client";

import "./globals.css";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Scroll() {
	const app = useRef();

	const Box = ({ children, className, anim }: any) => {
		return (
			<div className={"box " + className} data-animate={anim}>
				{children}
			</div>
		);
	};

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Target the two specific elements we have asigned the animate class
			gsap.to("[data-animate='rotate']", {
				rotation: 360,
				repeat: -1,
				repeatDelay: 1,
				yoyo: true,
			});

			gsap.to("[data-animate='move']", {
				x: 100,
				repeat: -1,
				repeatDelay: 1,
				yoyo: true,
			});

			gsap.set(".dont-animate", {
				backgroundColor: "red",
			});
		}, app); // <- Scope!

		return () => ctx.revert();
	}, []);

	return (
		<div className="app" ref={app}>
			<Box anim="rotate">Box</Box>
			<Box className="dont-animate">{"Don't Animate Me"}</Box>
			<Box anim="move">Box</Box>
		</div>
	);
}
