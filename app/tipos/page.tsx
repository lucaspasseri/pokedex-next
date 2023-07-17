import { prisma } from "../db/db";
import ListOfPokemonsByType from "../components/ListOfPokemonsByType";

async function getFireType() {
	const pokemons = await prisma.pokemon.findMany({
		where: {
			pokemonTypes: {
				some: {
					name: "Fire",
				},
			},
		},
		include: {
			pokemonTypes: true,
		},
	});

	return pokemons;
}

async function getGrassType() {
	const pokemons = await prisma.pokemon.findMany({
		where: {
			pokemonTypes: {
				some: {
					name: "Grass",
				},
			},
		},
		include: {
			pokemonTypes: true,
		},
	});

	return pokemons;
}

async function getWaterType() {
	const pokemons = await prisma.pokemon.findMany({
		where: {
			pokemonTypes: {
				some: {
					name: "Water",
				},
			},
		},
		include: {
			pokemonTypes: true,
		},
	});

	return pokemons;
}

export default async function Home() {
	const firePokemons = await getFireType();
	const grassPokemons = await getGrassType();
	const waterPokemons = await getWaterType();

	return (
		<main className="bg-purple-300">
			<ListOfPokemonsByType
				firePokemons={firePokemons}
				grassPokemons={grassPokemons}
				waterPokemons={waterPokemons}
			/>
		</main>
	);
}
