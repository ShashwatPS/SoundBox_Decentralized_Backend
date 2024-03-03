import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {

    const { to, from, amount, blockchain, type, username, firstName, lastName } = await request.json();

    return Response.json({
        to,
        from,
        amount,
        blockchain,
        type,
        username,
        firstName,
        lastName
    })
}
