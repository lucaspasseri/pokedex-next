import Image from "next/image";
import fireType from "../../public/images/pokemon-types/fire.png";
import grassType from "../../public/images/pokemon-types/grass.png";
import waterType from "../../public/images/pokemon-types/water.png";
import Link from "next/link";

export default function ListOfPokemonsByType({
	firePokemons,
	grassPokemons,
	waterPokemons,
}: any) {
	const types = [
		{
			id: 0,
			name: "fire",
			pokemons: firePokemons,
			image: fireType,
		},
		{
			id: 1,
			name: "water",
			pokemons: waterPokemons,
			image: waterType,
		},
		{
			id: 2,
			name: "grass",
			pokemons: grassPokemons,
			image: grassType,
		},
	];
	return (
		<section className="flex flex-col">
			<h2>Pokemons por tipo:</h2>

			<ol className="flex flex-wrap mt-4 justify-evenly ">
				{types.map((item) => {
					return (
						<div className="flex flex-wrap min-w-[200px]" key={item.id}>
							<div className="mr-2 w-[60px] h-[60px]">
								{item.image && (
									<Image
										src={item.image}
										alt={`tipo pokemon: ${item.name}`}
										width={60}
										height={60}
									/>
								)}
							</div>
							<div>
								{item.pokemons.map((item: any) => {
									return (
										<div key={item.id}>
											<Link href={`pokemons/${item.name}`}>{item.name}</Link>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</ol>
		</section>
	);
}
