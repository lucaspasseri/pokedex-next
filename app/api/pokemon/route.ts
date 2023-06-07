import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
	const prisma = new PrismaClient();

	const pokemon = await prisma.pokemon.create({
		data: {
			name: "Blastoise",
			pokemonType: "agua",
		},
	});

	console.log({ pokemon });

	return NextResponse.json({
		pokemon: pokemon,
	});
}
