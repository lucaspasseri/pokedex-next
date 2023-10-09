import "./globals.css";
import MyParallaxBody from "@/app/components/show/MyParallaxBody";
import MyParallaxHeader from "@/app/components/show/MyParallaxHeader";
import Recap from "@/app/components/show/Recap";

export default function Show() {
	return (
		<div>
			<Recap />
			<MyParallaxHeader />
			<MyParallaxBody />
		</div>
	);
}
