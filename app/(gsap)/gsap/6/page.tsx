"use client";

import "./globals.css";
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Scroll() {
	const app = useRef();
	const tl = useRef();

	const [reversed, setReversed] = useState(false);

	function Box({ children }: any) {
		return <div className="box">{children}</div>;
	}

	function Circle({ children }: any) {
		return <div className="circle">{children}</div>;
	}

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// add a box and circle animation to our timeline and play on first render

			tl.current && tl.current.progress(0).kill();
			tl.current = gsap
				.timeline()
				.to(".box", {
					rotation: 360,
				})
				.to(".circle", {
					x: 100,
				});
		}, app);
		return () => ctx.revert();
	}, []);

	useEffect(() => {
		// toggle the direction of our timeline
		tl.current.reversed(reversed);
	}, [reversed]);

	return (
		<div className="app" ref={app}>
			<div>
				<button onClick={() => setReversed(!reversed)}>Toggle</button>
			</div>
			<Box>box</Box>
			<Circle>circle</Circle>
		</div>
	);
}
