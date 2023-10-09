"use client";

import "./globals.css";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Example({ params }: any) {
	const app = useRef(null);
	const circle = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			// use scoped selectors
			gsap.to(".box", { rotation: 360 });
			// or refs
			gsap.to(circle.current || "", { rotation: 360 });
		}, app);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={app} className="App">
			<div className="box">selector</div>
			<div className="circle" ref={circle}>
				Ref
			</div>
		</div>
	);
}
