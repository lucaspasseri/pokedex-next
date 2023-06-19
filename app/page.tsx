import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client";
import ListOfPokemons from "./components/ListOfPokemons";
import ListOfPokemonsByType from "./components/ListOfPokemonsByType";

const inter = Inter({ subsets: ["latin"] });

async function getThemAll() {
	const prisma = new PrismaClient();
	const pokemons = await prisma.pokemon.findMany({
		include: {
			pokemonTypes: true,
		},
	});

	return pokemons;
}

async function getFireType() {
	const prisma = new PrismaClient();
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
	const prisma = new PrismaClient();
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
	const prisma = new PrismaClient();
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
		<main className="justify-center h-full">
			<ListOfPokemonsByType
				firePokemons={firePokemons}
				grassPokemons={grassPokemons}
				waterPokemons={waterPokemons}
			/>
			<ListOfPokemons pokemons={pokemons} />
		</main>
	);
}
