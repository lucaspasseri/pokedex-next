import Image from "next/image";
import fireType from "../../public/images/pokemon-types/fire.png";
import grassType from "../../public/images/pokemon-types/grass.png";
import waterType from "../../public/images/pokemon-types/water.png";

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
		<div>
			<h2 className="p-4">Pokemons por tipo:</h2>
			<div className="flex p-4">
				{types.map((item) => {
					return (
						<div className="flex mr-4" key={item.id}>
							<div className="mr-2">
								<Image
									src={item.image}
									alt={`tipo pokemon: ${item.name}`}
									width={60}
									height={60}
								/>
							</div>
							<div>
								{item.pokemons.map((item: any) => {
									return (
										<div key={item.id}>
											<div>{item.name}</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
