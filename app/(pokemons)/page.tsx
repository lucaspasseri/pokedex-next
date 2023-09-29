import ListOfPokemons from "../components/ListOfPokemons";
import ListOfPokemonsByType from "../components/ListOfPokemonsByType";

export default function Home() {
	return (
		<main className="bg-blue-700">
			{/* @ts-expect-error Server Component */}
			<ListOfPokemons />

			{/* @ts-expect-error Server Component */}
			<ListOfPokemonsByType />
		</main>
	);
}
