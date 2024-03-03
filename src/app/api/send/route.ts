import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {

    const { to, from, amount, blockchain, type, username, firstName, lastName } = await request.json();

    let user = await prisma.user.findUnique({
        where: { username: username }
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                username: username,
                firstName: firstName,
                lastName: lastName
            }
        });
    }

    await prisma.transaction.create({
        data: {
            to: to,
            from: from,
            amount: amount,
            blockchain: blockchain,
            type: type,
            transactionType: 'send',
            userId: user.id
        }
    });

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