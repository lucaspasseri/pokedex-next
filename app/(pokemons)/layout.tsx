import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/images/app/pokeball-logo2.png";
import banner from "../../public/images/app/pokedex-banner3.jpeg";

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
						<div className="absolute flex max-w-[1440px] w-full items-center z-10 px-[20px] md:px-[100px]">
							<Link href={"/"}>
								<div className="w-[80px] h-[80px]">
									<Image
										src={logo}
										alt="logo - pokebola"
										width={80}
										height={80}
									/>
								</div>
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

								<Link
									className="ml-4 p-2 hover:bg-red-700 mr-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
									href={"/tipos"}
								>
									Tipos
								</Link>
							</div>
						</div>
						<div className="h-[160px] w-[100vw] relative max-w-[1440px]">
							<Image
								src={banner}
								alt="banner - pokedex"
								fill
								quality={100}
								sizes="100vw"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-center">{children}</div>
			</body>
		</html>
	);
}
