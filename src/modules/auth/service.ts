import { prisma } from '../../configurations/prisma'
import { passwordUtils } from '../../common/utils/password.utils'
import { LoginDto, LoginDtoSchema } from './model'
import { jwtUtils } from '../../common/utils/jwt.utils'

export const authService = {
	login: async (data: unknown): Promise<string | null> => {
		// Validate với Zod
		const validationResult = LoginDtoSchema.safeParse(data)
		if (!validationResult.success) {
			throw new Error(
				validationResult.error.issues.map((e) => e.message).join(', ')
			)
		}

		const validatedData: LoginDto = validationResult.data

		const user = await prisma.user.findUnique({
			where: { email: validatedData.email },
			select: {
				id: true,
				email: true,
				password: true,
				isAdmin: true
			}
		})

		if (!user || !user.password) {
			return null
		}

		const isPasswordValid = await passwordUtils.verify(
			user.password,
			validatedData.password
		)

		if (!isPasswordValid) {
			return null
		}
		const token = await jwtUtils.signAccessToken({
			userId: user.id,
			email: user.email,
			isAdmin: user.isAdmin
		})
		return token
	}
}
