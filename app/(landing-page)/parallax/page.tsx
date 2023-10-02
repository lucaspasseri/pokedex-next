"use client";
import { useRef, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Nav from "../../components/parallax/Nav";
import { motion } from "framer-motion";

const BasicParallax = () => {
	return (
		<div className="bg-fixed bg-cover bg-center bg-[url('/images/app/pokedex-banner3.jpeg')] h-screen text-white text-center flex items-center justify-center">
			<Parallax translateY={[-20, 20]}>
				<h1>Section 1</h1>
			</Parallax>
		</div>
	);
};

const BasicParallax2 = () => {
	return (
		<div className="bg-cover bg-center bg-[url('/images/app/pokedex-banner3.jpeg')] h-screen text-white text-center flex items-center justify-center">
			<Parallax translateY={[-20, 20]}>
				<h1>Section 1</h1>
			</Parallax>
		</div>
	);
};

const AdvancedParallax = () => {
	return (
		<motion.div
			className="min-h-screen flex items-center justify-center text-white bg-gradient-to-r from-sky-500 to-indigo-500"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, y: 2000 }}
			//whileInView={{ opacity: 1 }}
			transition={{ duration: 6 }}
		>
			<Parallax translateY={[-20, 20]}>
				<h1 className="text-4xl font-bold">Welcome to our Website</h1>
			</Parallax>
		</motion.div>
	);
};

const NormalSection = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-cover bg-center text-white">
			<h1>Section 2</h1>
		</div>
	);
};

export default function Home() {
	const sectionRefs = {
		section1: useRef(null),
		section2: useRef(null),
		section3: useRef(null),
		section4: useRef(null),
	};

	const handleScroll = () => {
		const offset = 100; // Adjust this offset as needed
		(Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>).find(
			(key) => {
				const ref = sectionRefs[key].current;
				return ref && ref.getBoundingClientRect().top < offset;
			}
		);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="h-[5000px]">
			<section className="border border-red-600 ">
				<ParallaxProvider>
					<Nav sectionRefs={sectionRefs} />
					<div ref={sectionRefs.section1} className="mt-[100px] w-[100%]">
						<BasicParallax />
					</div>

					<div
						ref={sectionRefs.section2}
						className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-[100px] w-[100%]"
					>
						<NormalSection />
					</div>

					<div ref={sectionRefs.section3} className="mt-[100px] w-[100%]">
						<BasicParallax2 />
					</div>

					<div ref={sectionRefs.section4} className="mt-[100px] w-[100%]">
						<AdvancedParallax />
					</div>

					<div className="h-14 mt-[100px] w-[100%] bg-gradient-to-r from-sky-500 to-indigo-500 "></div>
					<div className="h-14 mt-[100px] w-[100%] bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
					<div className="h-14 mt-[100px] w-[100%] bg-gradient-to-r from-purple-500 to-pink-500"></div>
				</ParallaxProvider>
			</section>
		</main>
	);
}
