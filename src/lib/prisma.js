import { PrismaClient } from '@prisma/client' // use a query builder that's tailored to the data

const prisma = new PrismaClient() // use `prisma` in the app to read and write data to the database

export default prisma // export prisma as module to be used in other files
