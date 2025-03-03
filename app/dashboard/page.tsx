import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export  default async function Dashboard() {
    const user = await prismaClient.user.findFirst({})
    return (
        <div>
            username: {user?.username}
        </div>
    )
}