import { t } from 'elysia'
import { Static } from '@sinclair/typebox'

// Object schema
export const CreateUserBody = () =>
	t.Object(
		{
			studentCode: t.String(),
			email: t.String(),
			name: t.String(),
			school: t.String()
		},
		{
			example: {
				studentCode: 'S123456',
				email: 'student@example.com',
				name: 'Nguyen Van A',
				school: 'Hanoi University'
			}
		}
	)

export const UpdateUserBody = () => t.Partial(CreateUserBody())

// TypeScript types
export type CreateUserDto = Static<ReturnType<typeof CreateUserBody>>
export type UpdateUserDto = Static<ReturnType<typeof UpdateUserBody>>
