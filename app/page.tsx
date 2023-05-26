import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex justify-center border-2 h-full bg-orange-300">
			<div>
				<h1 className="text-3xl">Pokedex</h1>

				<h2>Seja bem-vindo!</h2>
			</div>
		</main>
	);
}
