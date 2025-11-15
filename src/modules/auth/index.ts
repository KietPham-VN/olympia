import Elysia from 'elysia'
import { authService } from './service'
import { LoginBody, LoginResponseData } from './model'
import { loginDetail } from './model.details'
import {
	ApiResponseSchema,
	ErrorResponseSchema,
	wrapResponse
} from '../../common/dtos/response'

export const auth = new Elysia({ prefix: '/auth' }).post(
	'/login',
	async ({ body }) => {
		const result = await authService.login(body)
		if (!result) {
			return wrapResponse(null, 401, '', 'Email hoặc mật khẩu không đúng')
		}
		return wrapResponse(result, 200, 'Đăng nhập thành công')
	},
	{
		body: LoginBody(),
		detail: loginDetail,
		response: {
			200: ApiResponseSchema(LoginResponseData()),
			401: ErrorResponseSchema
		}
	}
)
