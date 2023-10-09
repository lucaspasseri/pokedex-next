"use client";

import "./globals.css";
import React from "react";
import { gsap } from "gsap";

export default function Scroll() {
	const onEnter = ({ currentTarget }: any) => {
		gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
	};

	const onLeave = ({ currentTarget }: any) => {
		gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
	};

	return (
		<div className="app">
			<div
				className="box border-2 border-gray-800"
				onMouseEnter={onEnter}
				onMouseLeave={onLeave}
			>
				Hover Me
			</div>
		</div>
	);
}
