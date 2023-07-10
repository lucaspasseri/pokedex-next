import Image from "next/image";

interface PokemonProfileProps {
	pokemon: { id: number; name: string | null; image: string | null };
}

export default function PokemonProfile({
	pokemon: { id, name, image },
}: PokemonProfileProps) {
	return (
		<section>
			<div>{id}</div>
			{name && <div>{name}</div>}
			{image && (
				<div>
					<Image alt={`${name}-profile`} src={image} width={100} height={100} />
				</div>
			)}
		</section>
	);
}
