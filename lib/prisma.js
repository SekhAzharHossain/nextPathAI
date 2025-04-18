import { PrismaClient } from "../lib/generated/prisma"; // adjust path as needed

export const db= globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV!=="production"){
    globalThis.prisma = db;
}