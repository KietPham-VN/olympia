import { prisma } from './../../prisma'
import { CreateUserDto, UpdateUserDto } from './model'

export const userService = {
	findAll: () =>
		prisma.user.findMany({
			select: {
				id: true,
				studentCode: true,
				email: true,
				name: true,
				school: true,
				phone: true
			}
		}),

	findById: (id: string) =>
		prisma.user.findUnique({
			where: { id },
			select: {
				id: true,
				studentCode: true,
				email: true,
				name: true,
				school: true,
				phone: true
			}
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
