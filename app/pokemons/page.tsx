import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Pokemons from "../components/pokemons/pokemons";

export default async function Home() {
	async function getPokemons() {
		let pokemons = await prisma.pokemon.findMany();
		return pokemons;
	}

	let pokemons = await getPokemons();

	return (
		<main className="flex justify-center h-full  bg-orange-300 flex-1">
			<Pokemons pokemons={pokemons} />
		</main>
	);
}
