import { prisma } from '../../configurations/prisma'
import {
	CreateUserDto,
	UpdateUserDto,
	CreateUserDtoSchema,
	UpdateUserDtoSchema
} from './model'

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

	create: async (data: unknown): Promise<CreateUserDto> => {
		// Validate với Zod
		const validationResult = CreateUserDtoSchema.safeParse(data)
		if (!validationResult.success) {
			throw new Error(
				validationResult.error.issues.map((e) => e.message).join(', ')
			)
		}

		const validatedData = validationResult.data

		return prisma.user.create({
			data: validatedData,
			select: {
				id: true,
				studentCode: true,
				email: true,
				name: true,
				school: true,
				phone: true
			}
		})
	},

	update: async (id: string, data: unknown): Promise<UpdateUserDto | null> => {
		// Validate với Zod
		const validationResult = UpdateUserDtoSchema.safeParse(data)
		if (!validationResult.success) {
			throw new Error(
				validationResult.error.issues.map((e) => e.message).join(', ')
			)
		}

		const validatedData = validationResult.data

		return prisma.user.update({
			where: { id },
			data: validatedData,
			select: {
				id: true,
				studentCode: true,
				email: true,
				name: true,
				school: true,
				phone: true
			}
		})
	},

	delete: (id: string) =>
		prisma.user.delete({
			where: { id },
			select: {
				id: true,
				studentCode: true,
				email: true,
				name: true,
				school: true,
				phone: true
			}
		})
}
