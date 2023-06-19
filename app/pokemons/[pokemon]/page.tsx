import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getPokemon(context: any) {
	const pokemonName = context?.params?.pokemon;
	console.log({ context });
	console.log({ pokemonName });
	// let pokemon = await prisma.pokemon.findFirst({
	// 	where: {
	// 		name: "Bulbassauro",
	// 	},
	// });
}

export default async function Pokemon(context: any) {
	const data = await getPokemon(context);
	console.log({ data });
	return <div>oi</div>;
}
