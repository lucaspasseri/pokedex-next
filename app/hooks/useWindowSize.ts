import { useState, useEffect } from "react";

type Window = {
	width: number;
	height: number;
	logoVW: string;
	brandVW: string;
};

export default function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<Window>({
		width: 0,
		height: 0,
		logoVW: "0vw",
		brandVW: "0vw",
	});

	useEffect(() => {
		// only execute all the code below in client side
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state

			const logoInitialX = 200 - window.innerWidth / 2;
			const logoP = logoInitialX / window.innerWidth;
			const logoVW = logoP * 100 + "vw";

			const brandInitialX = window.innerWidth / 2 - 200;
			const brandP = brandInitialX / window.innerWidth;
			const brandVW = brandP * 100 + "vw";

			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				logoVW,
				brandVW,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}
