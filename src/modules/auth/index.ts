import Elysia from 'elysia'
import { authService } from './service'
import { LoginBody } from './model'
import { loginDetail } from './model.details'
import { wrapResponse } from '../../common/dtos/response'
import { setAuthCookie } from '../../common/utils/cookie.utils'

export const auth = new Elysia({ prefix: '/auth' }).post(
	'/login',
	async ({ body, cookie }) => {
		const result = await authService.login(body)
		if (!result) {
			return wrapResponse(null, 401, '', 'Email hoặc mật khẩu không đúng')
		}
		setAuthCookie(cookie, result)
		return wrapResponse(null, 200, 'Đăng nhập thành công')
	},
	{
		body: LoginBody(),
		detail: loginDetail
	}
)
