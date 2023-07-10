import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../public/images/app/pokeball-logo.png";
import banner from "../public/images/app/pokedex-banner.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pokedex",
	description: "Pokedex using next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-red-600 min-h-screen">
				<div className="h-20 flex items-center">
					<div className="ml-6">
						<Image src={logo} alt="logo - pokebola" width={50} height={50} />
					</div>
					<div className="border ml-20">
						<Link className="ml-4 hover:bg-red-500" href={"/"}>
							Home
						</Link>

						<Link className="ml-4  hover:bg-red-500 mr-4" href={"/pokemons"}>
							Pokemons
						</Link>
					</div>
				</div>
				<div className="flex justify-center max-h-40">
					<Image
						src={banner}
						alt="banner - pokedex"
						height={256}
						width={725}
						quality={100}
						sizes="100vw"
					/>
				</div>
				<div className="bg-blue-300 h-[calc(100vh-24px)]"> {children}</div>
			</body>
		</html>
	);
}
