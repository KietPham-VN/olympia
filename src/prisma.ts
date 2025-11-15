import { NODE_ENV } from './configurations/env'
import { PrismaClient } from './generated/prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ['query', 'info', 'warn', 'error']
	})

if (NODE_ENV !== 'production') globalForPrisma.prisma = prisma
