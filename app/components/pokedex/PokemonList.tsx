"use client";

import usePokemonList from "@/app/hooks/usePokemonList";
import Image from "next/image";

type PokemonItem = {
	id: number;
	url: string;
	name: string;
	image: string;
	artwork: string;
	dreamworld: string;
};

export default function PokemonList() {
	const { data, isLoading } = usePokemonList();
	const pokemonList = data?.data?.pokemons?.results || [];

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{pokemonList.length > 0
				? pokemonList.map((pokemon: PokemonItem) => (
						<div key={pokemon.id}>
							<div>{pokemon.name + " - " + pokemon.id} </div>
							<Image
								src={pokemon.dreamworld}
								alt={pokemon.name + "dream"}
								width={100}
								height={100}
							/>
						</div>
				  ))
				: "loading..."}
		</div>
	);
}
