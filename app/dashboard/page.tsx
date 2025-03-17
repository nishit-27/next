import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export  default async function Dashboard() {
    const user = await prismaClient.user.findMany()
    const mapUser = user.map(user =>user.username)
    return (
        <div>
            username: {JSON.stringify(mapUser)}
        </div>
    )
}