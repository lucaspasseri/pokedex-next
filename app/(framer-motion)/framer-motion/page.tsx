"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Home() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const backgroundYMid = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
	const backgroundYBottom = useTransform(
		scrollYProgress,
		[0, 1],
		["0%", "10%"]
	);

	return (
		<main className="h-[5000px] border-2 border-blue-400 flex">
			<div
				ref={ref}
				className="w-full h-screen overflow-hidden relative grid place-items-center"
			>
				<motion.h1
					style={{ y: textY }}
					className="font-bold text-white text-7xl md:text-9xl relative z-20"
				>
					PARALLAX
				</motion.h1>

				<motion.div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url(/images/parallax/landscape.jpeg)`,
						backgroundPosition: "bottom",
						//backgroundSize: "cover",
						backgroundSize: "contain",
						y: backgroundY,
					}}
				/>
				<motion.div
					className="absolute inset-0 z-5"
					style={{
						backgroundImage: `url(/images/parallax/landscape-mid.png)`,
						backgroundPosition: "bottom",
						//backgroundSize: "cover",
						backgroundSize: "contain",
						y: backgroundYMid,
					}}
				/>
				<motion.div
					className="absolute inset-0 z-10"
					style={{
						backgroundImage: `url(/images/parallax/landscape-bottom.png)`,
						backgroundPosition: "bottom",
						backgroundSize: "contain",
						y: backgroundYBottom,
						//backgroundSize: "cover",
					}}
				/>
				<div
					className="absolute inset-0 z-20"
					style={{
						backgroundImage: `url(/images/parallax/landscape-sub-bottom.png)`,
						backgroundPosition: "bottom",
						backgroundSize: "contain",
						//backgroundSize: "cover",
					}}
				/>
			</div>
		</main>
	);
}
