import Image from "next/image";
import Link from "next/link";
import { prisma } from "../db/db";

async function getThemAll() {
	const pokemons = await prisma.pokemon.findMany({
		include: {
			pokemonTypes: true,
		},
	});

	return pokemons;
}

export default async function ListOfPokemons() {
	const pokemons = await getThemAll();

	return (
		<section className="flex flex-col">
			<h2>Ordem numérica:</h2>
			<div className="flex mt-4 justify-center">
				<ol className="grid grid-cols-5 grid-flow-row shadow-trello max-[350px]:grid-cols-1 max-[799px]:grid-cols-2 w-[100%]">
					{pokemons.map((item: any) => (
						<li className="flex justify-center min-w-[120px]" key={item.id}>
							<Link href={`pokemons/${item.name}`}>
								<div className="flex flex-col flex-1">
									<div className="flex justify-center">
										<div>{item.id}</div>
										<div className="ml-2">{item.name}</div>
									</div>
									<div className="flex justify-center">
										{item.image && (
											<Image
												className="bg-slate-200 rounded"
												src={item.image}
												alt={item.name}
												width={100}
												height={100}
											/>
										)}
									</div>
								</div>
							</Link>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
