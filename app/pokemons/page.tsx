import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
	async function getUsers() {
		let users = await prisma.user.findMany();
		return users;
	}

	console.log({ users: await getUsers() });

	return (
		<main className="flex justify-center border-2 h-full bg-orange-300 flex-1">
			<div>
				<h1 className="text-3xl">Pokemons</h1>
			</div>
		</main>
	);
}
