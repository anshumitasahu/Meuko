import { prisma } from "./lib/prismaClient";

async function resetTable() {
    // Replace "User" with your exact Prisma model/table name
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "SecondaryOrder" RESTART IDENTITY CASCADE;`);
    console.log('Table cleared and auto-increment reset to 1');
}

resetTable();
