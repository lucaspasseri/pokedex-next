"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import LandscapeParallax from "@/app/components/parallax/LandscapeParallax";

export default function Home() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const animationOrder = {
		initial: 0,
		firstMove: 0.05,
		secondMove: 0.1,
		thirdMove: 0.7,
		lastMove: 0.95,
		end: 1,
	};

	const logoTop = useTransform(
		scrollYProgress,
		[animationOrder.initial, animationOrder.thirdMove],
		["2%", "90%"]
	);

	const logoLeft = useTransform(
		scrollYProgress,
		[
			animationOrder.initial,
			animationOrder.firstMove,
			animationOrder.secondMove,
			animationOrder.thirdMove,
			animationOrder.lastMove,
			animationOrder.end,
		],
		["auto", "auto", "20px", "20px", "initial", "initial"]
	);

	const logoRight = useTransform(
		scrollYProgress,
		[
			animationOrder.initial,
			animationOrder.firstMove,
			animationOrder.secondMove,
			animationOrder.thirdMove,
			animationOrder.lastMove,
			animationOrder.end,
		],
		["50%", "50%", "initial", "initial", "50%", "50%"]
	);
	const nameTop = useTransform(
		scrollYProgress,
		[animationOrder.initial, animationOrder.thirdMove],
		["1%", "90%"]
	);

	const nameRight = useTransform(
		scrollYProgress,
		[
			animationOrder.initial,
			animationOrder.firstMove,
			animationOrder.secondMove,
			animationOrder.thirdMove,
			animationOrder.lastMove,
			animationOrder.end,
		],
		["auto", "auto", "20px", "20px", "auto", "auto"]
	);

	const nameLeft = useTransform(
		scrollYProgress,
		[
			animationOrder.initial,
			animationOrder.firstMove,
			animationOrder.secondMove,
			animationOrder.thirdMove,
			animationOrder.lastMove,
			animationOrder.end,
		],
		["50%", "50%", "auto", "auto", "50%", "50%"]
	);

	return (
		<main className="h-[5000px] bg-blue-400 flex flex-col">
			<LandscapeParallax />
			<section
				ref={ref}
				className="w-full h-[100%] overflow-hidden relative grid place-items-center bg-black flex"
			>
				<motion.div
					className="absolute top-8 z-10"
					style={{
						backgroundImage: `url(/images/parallax/isic-logo.png)`,
						backgroundPosition: "bottom",
						height: "200px",
						width: "200px",
						backgroundSize: "cover",
						right: logoRight,
						left: logoLeft,
						top: logoTop,
						// y: logoYMove,
						// x: logoXMove,
					}}
				/>
				<motion.div
					className="absolute top-16 z-10"
					style={{
						backgroundImage: `url(/images/parallax/isic-brand-name.png)`,
						backgroundPosition: "top",
						height: "132px",
						width: "230px",
						backgroundSize: "cover",
						left: nameLeft,
						right: nameRight,
						top: nameTop,
						// y: nameYMove,
						// x: nameXMove,
					}}
				/>
			</section>
		</main>
	);
}
