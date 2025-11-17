import { t } from 'elysia'

export const LoginBody = () =>
	t.Object({
		email: t.String({
			format: 'email',
			description: 'Email của người dùng',
			error: 'Email không hợp lệ'
		}),
		password: t.String({
			minLength: 6,
			description: 'Mật khẩu (tối thiểu 6 ký tự)',
			error: 'Password phải có ít nhất 6 ký tự'
		})
	})

export type LoginDto = {
	email: string
	password: string
}
