import { t } from 'elysia'
import { z } from 'zod'

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

// Zod schema for validation
export const LoginDtoSchema = z.object({
	email: z.email({ message: 'Email không hợp lệ' }),
	password: z.string().min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
})

export type LoginDto = z.infer<typeof LoginDtoSchema>
