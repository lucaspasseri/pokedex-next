import ListOfPokemonsByType from "../components/ListOfPokemonsByType";

export default function Home() {
	return (
		<main className="bg-purple-400">
			{/* @ts-expect-error Server Component */}
			<ListOfPokemonsByType />
		</main>
	);
}
