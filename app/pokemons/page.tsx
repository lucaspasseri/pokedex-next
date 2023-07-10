import { prisma } from "../db/db";

import Pokemons from "../components/pokemons/pokemons";

export default async function Home() {
	async function getPokemons() {
		let pokemons = await prisma.pokemon.findMany();
		return pokemons;
	}

	let pokemons = await getPokemons();

	return (
		<main className="bg-orange-300">
			<Pokemons pokemons={pokemons} />
		</main>
	);
}
