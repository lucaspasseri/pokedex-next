import { NextResponse } from "next/server";
import { prisma } from "../../db/db";

export async function GET() {
	const pokemon = await prisma.pokemon.create({
		data: {
			// name: "Blastoise",
			// pokemonType: "agua",
		},
	});

	console.log({ pokemon });

	return NextResponse.json({
		pokemon: pokemon,
	});
}
