import { prisma } from '../../prisma'
import { passwordUtils } from '../../common/utils/password.utils'
import { LoginDto, LoginResponse } from './model'
import { jwtUtils } from '../../common/utils/jwt.utils'

export const authService = {
	login: async (data: LoginDto): Promise<LoginResponse | null> => {
		const user = await prisma.user.findUnique({
			where: { email: data.email },
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
			data.password
		)

		if (!isPasswordValid) {
			return null
		}
		const token = await jwtUtils.signAccessToken({
			userId: user.id,
			email: user.email,
			isAdmin: user.isAdmin
		})
		return {
			token: token
		}
	}
}
