import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
	async function getPokemons() {
		let pokemons = await prisma.pokemon.findMany();
		return pokemons;
	}

	let pokemons = await getPokemons();

	return (
		<main className="flex justify-center border-2 h-full bg-orange-300 flex-1">
			<div>
				<h1 className="text-3xl mt-6">Pokemons</h1>
				{pokemons.length > 0 && (
					<ul className="mt-8">
						{pokemons.map((pokemon) => (
							<li key={pokemon.id} className="flex">
								<div className="w-6">{pokemon.id}</div>
								<div className="w-32">{pokemon.name}</div>
								<div>
									{pokemon.pokemonType.map((type, index) => (
										<div key={index}>{type}</div>
									))}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</main>
	);
}
