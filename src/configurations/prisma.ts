import { PrismaClient } from '../generated/prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: [
			{
				emit: 'event',
				level: 'query'
			},
			'warn',
			'error'
		]
	})

// Minimal log - chỉ hiển thị query type và duration
;(prisma as any).$on('query', (e: { query: string; duration: number }) => {
	let cleanQuery = e.query.replace(/"public"\."(\w+)"/g, '$1')
	cleanQuery = cleanQuery.replace(/\w+\."(\w+)"/g, '"$1"')

	console.log('Query:', cleanQuery)
	console.log(`Duration: ${e.duration}ms\n`)
})
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
