"use client";
import { ParallaxProvider, Parallax, useParallax } from "react-scroll-parallax";
//import { motion } from "framer-motion";

export default function Home() {
	// const Green = () => (
	// 	<Parallax speed={-20} className="absolute top-0 left-0">
	// 		<div className="bg-green-500 h-20 w-20" />
	// 	</Parallax>
	// );
	// const Purple = () => (
	// 	<Parallax speed={20} className="absolute top-0 left-0">
	// 		<div className="bg-purple-500 h-20 w-20" />
	// 	</Parallax>
	// );

	const Red = () => {
		const { ref } = useParallax<HTMLDivElement>({
			speed: -20,
			//translateY: ["-2000px", "1000px"],
			// translateX: ["50px", "0px"],
		});
		return <div className="mt-[-200px] bg-red-500 h-20 w-20" ref={ref} />;
	};
	const Blue = () => {
		const { ref } = useParallax<HTMLDivElement>({ speed: 0 });
		return <div className="bg-blue-500 h-20 w-20" ref={ref} />;
	};
	const Green = () => {
		const { ref } = useParallax<HTMLDivElement>({ speed: -10 });
		return <div className="mt-[-100px	] bg-green-500 h-20 w-20" ref={ref} />;
	};
	return (
		<main className="h-[5000px] border-2 border-blue-400 flex">
			<ParallaxProvider>
				{/* <div className="h-14 mt-[100px] w-[100%] bg-gradient-to-r from-sky-500 to-indigo-500 "></div>
				<div className="h-14 mt-[100px] w-[100%] bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
				<div className="h-14 mt-[100px] w-[100%] bg-gradient-to-r from-purple-500 to-pink-500"></div> */}

				<div className="mt-[100px] flex bg-gray-400">
					<Red />
					<Green />
					<Blue />
				</div>
			</ParallaxProvider>
		</main>
	);
}
