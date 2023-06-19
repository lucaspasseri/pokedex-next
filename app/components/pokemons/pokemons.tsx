"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Pokemons({ pokemons }: any) {
	const pathname = usePathname();

	return (
		<div>
			<h1 className="text-3xl mt-6">Pokemons</h1>
			{pokemons.length > 0 && (
				<ul className="mt-8">
					{pokemons.map((pokemon: any) => (
						<li key={pokemon.id} className="flex">
							<div className="w-6">{pokemon.id}</div>
							<div className="w-32">
								<Link href={`${pathname}/${pokemon.name?.toLowerCase()}`}>
									{pokemon.name}
								</Link>
							</div>
							<div>
								{pokemon.pokemonType.map((type: any, index: any) => (
									<div key={index}>{type}</div>
								))}
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
