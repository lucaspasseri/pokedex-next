import useSWR from "swr";

export default function usePokemons() {
	const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			count
			next
			previous
			status
			message
			results {
				id
				url
				name
				image
				artwork
				dreamworld
			}
		}
	}`;

	const gqlVariables = {
		limit: 649,
		offset: 0,
	};

	const fetcher = (url: string) =>
		fetch(url, {
			credentials: "omit",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: gqlQuery,
				variables: gqlVariables,
			}),
			method: "POST",
		}).then((res) => res.json());

	const { data, error, isLoading } = useSWR(
		"https://graphql-pokeapi.graphcdn.app",
		fetcher
	);

	return {
		data,
		isLoading,
		isError: error,
	};
}
