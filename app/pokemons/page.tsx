import ListOfPokemons from "../components/ListOfPokemons";

export default function Pokemons() {
	return (
		<main className="bg-orange-400">
			{/* @ts-expect-error Server Component */}
			<ListOfPokemons />
		</main>
	);
}
