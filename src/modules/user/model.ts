import { t } from 'elysia'
import { z } from 'zod'

// Object schema
export const CreateUserBody = () =>
	t.Object({
		studentCode: t.String(),
		email: t.String(),
		name: t.String(),
		school: t.String(),
		phone: t.String()
	})

export const UpdateUserBody = () => t.Partial(CreateUserBody())

// Zod schema for validation
export const CreateUserDtoSchema = z.object({
	studentCode: z.string().min(1, { message: 'Mã sinh viên không được để trống' }),
	email: z.email({ message: 'Email không hợp lệ' }),
	name: z.string().min(1, { message: 'Tên không được để trống' }),
	school: z.string().min(1, { message: 'Trường không được để trống' }),
	phone: z.string().min(1, { message: 'Số điện thoại không được để trống' })
})

export const UpdateUserDtoSchema = CreateUserDtoSchema.partial()

// TypeScript types
export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>
export type UpdateUserDto = z.infer<typeof UpdateUserDtoSchema>
