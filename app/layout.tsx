import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../public/images/app/pokeball-logo2.png";
import banner from "../public/images/app/pokedex-banner3.jpeg";

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
			<body className="bg-black min-h-screen ">
				<div className="flex justify-center fixed w-screen shadow-3xl bg-black">
					<div className="flex items-center w-full justify-center">
						<div className="absolute flex max-w-[1280px] w-full items-center z-10">
							<Link href={"/"} className="ml-6">
								<Image
									src={logo}
									alt="logo - pokebola"
									width={80}
									height={80}
								/>
							</Link>
							<div className=" w-full flex">
								<Link
									className="ml-20 p-2 hover:bg-red-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
									href={"/"}
								>
									Home
								</Link>

								<Link
									className="ml-4 p-2 hover:bg-red-700 mr-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
									href={"/pokemons"}
								>
									Pokemons
								</Link>
							</div>
						</div>
						<div className="h-[200px] w-[1280px] relative">
							<Image
								src={banner}
								alt="banner - pokedex"
								// height={600}
								// width={3840}
								fill
								quality={100}
								sizes="100vw"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
				<div className="pt-[200px] flex justify-center">{children}</div>
			</body>
		</html>
	);
}
