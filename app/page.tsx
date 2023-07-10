import { Inter } from "next/font/google";
import ListOfPokemons from "./components/ListOfPokemons";
import ListOfPokemonsByType from "./components/ListOfPokemonsByType";
import { prisma } from "./db/db";

const inter = Inter({ subsets: ["latin"] });

async function getThemAll() {
	const pokemons = await prisma.pokemon.findMany({
		include: {
			pokemonTypes: true,
		},
	});

	return pokemons;
}

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
	const pokemons = await getThemAll();
	const firePokemons = await getFireType();
	const grassPokemons = await getGrassType();
	const waterPokemons = await getWaterType();

	return (
		<main className="bg-blue-700">
			<ListOfPokemonsByType
				firePokemons={firePokemons}
				grassPokemons={grassPokemons}
				waterPokemons={waterPokemons}
			/>
			<ListOfPokemons pokemons={pokemons} />
		</main>
	);
}
