import "./globals.css";
import MyParallaxBody from "@/app/components/show/MyParallaxBody";
import MyParallaxHeader from "@/app/components/show/MyParallaxHeader";

export default function Show() {
	return (
		<div>
			<MyParallaxHeader />
			<MyParallaxBody />
		</div>
	);
}
