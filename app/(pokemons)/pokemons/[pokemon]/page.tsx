import PokemonProfile from "@/app/components/pokemon/PokemonProfile";

export default function Pokemon({ params }: any) {
	return (
		<main className="bg-green-600">
			{/* @ts-expect-error Server Component */}
			<PokemonProfile params={params} />
		</main>
	);
}
