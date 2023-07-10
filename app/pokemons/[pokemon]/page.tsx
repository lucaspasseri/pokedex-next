import { prisma } from "../../db/db";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import PokemonProfile from "@/app/components/pokemon/PokemonProfile";

async function getPokemon(context: any) {
	const pokemonName = context;
	let pokemon = await prisma.pokemon.findFirst({
		where: {
			name: `${capitalizeFirstLetter(pokemonName)}`,
		},
	});

	return pokemon;
}

export default async function Pokemon({ params }: any) {
	const pokemon = await getPokemon(params.pokemon);
	return (
		<main className="bg-green-600">
			{pokemon && <PokemonProfile pokemon={pokemon} />}
		</main>
	);
}
