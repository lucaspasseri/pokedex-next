import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pokemons",
	description: "Pika pika",
};

export default function PokemonsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div>Pokemons</div>
			<div className="flex justify-center border-2 h-[calc(100%-24px)] bg-green-700">
				{children}
			</div>
		</>
	);
}
