import Image from "next/image";
import Link from "next/link";

export default function ListOfPokemons({ pokemons }: any) {
	return (
		<section className="flex">
			<h2>Ordem numérica:</h2>
			<div className="flex items-center justify-center">
				<ol className="grid grid-cols-2 grid-flow-row w-3/5 shadow-3xl gap-4 p-4 m-2 md:grid-cols-3">
					{pokemons.map((item: any) => (
						<li className="flex justify-center" key={item.id}>
							<Link href={`pokemons/${item.name}`}>
								<div className="flex flex-col flex-1 shadow-trello">
									<div className="flex justify-center">
										<div>{item.id}</div>
										<div className="ml-2">{item.name}</div>
									</div>
									<div className="flex justify-center">
										<Image
											src={item.image}
											alt={item.name}
											width={100}
											height={100}
										/>
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
