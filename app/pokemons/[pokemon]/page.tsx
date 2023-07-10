import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import Image from "next/image";

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
		<div className="bg-green-600">
			<div>{pokemon?.id}</div>
			<div>{pokemon?.name}</div>
			<div>
				{pokemon?.image && (
					<Image
						alt="bulbassauro"
						src={pokemon.image}
						width={100}
						height={100}
					/>
				)}
			</div>
		</div>
	);
}
