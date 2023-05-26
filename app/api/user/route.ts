import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

export async function GET() {
	const prisma = new PrismaClient();

	const randomName = faker.person.fullName();
	const randomEmail = faker.internet.email();

	const user = await prisma.user.create({
		data: {
			name: randomName,
			email: randomEmail,
		},
	});

	return NextResponse.json({
		user: user,
	});
}
