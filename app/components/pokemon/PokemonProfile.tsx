import Image from "next/image";
import { prisma } from "../../db/db";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

async function getPokemon(context: any) {
	const pokemonName = context;
	let pokemon = await prisma.pokemon.findFirst({
		where: {
			name: `${capitalizeFirstLetter(pokemonName)}`,
		},
		include: {
			pokemonTypes: true,
		},
	});

	return pokemon;
}

export default async function PokemonProfile({ params }: any) {
	const pokemon = await getPokemon(params.pokemon);
	return (
		<section>
			{pokemon ? (
				<>
					<div>{pokemon.id}</div>
					<div>{pokemon.name}</div>

					{pokemon.image && (
						<div>
							<Image
								className="bg-slate-200 rounded"
								alt={`${pokemon.name}-profile`}
								src={pokemon.image}
								width={100}
								height={100}
							/>
						</div>
					)}
				</>
			) : null}
		</section>
	);
}
