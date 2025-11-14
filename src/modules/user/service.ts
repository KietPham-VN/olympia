import { CreateUserDto, UpdateUserDto } from './model'
import { PrismaClient } from '../../generated/prisma/client'

const prisma = new PrismaClient()

export const userService = {
	findAll: () => prisma.user.findMany(),

	findById: (id: string) =>
		prisma.user.findUnique({
			where: { id }
		}),

	create: (data: CreateUserDto) =>
		prisma.user.create({
			data
		}),

	update: (id: string, data: UpdateUserDto) =>
		prisma.user.update({
			where: { id },
			data
		}),

	delete: (id: string) =>
		prisma.user.delete({
			where: { id }
		})
}
