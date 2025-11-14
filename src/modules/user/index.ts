import { Elysia, t } from 'elysia'
import { userService } from './service'
import { CreateUserBody, UpdateUserBody } from './model'
import {
	getAllUsersDetail,
	getUserByIdDetail,
	createUserDetail,
	updateUserDetail,
	deleteUserDetail
} from './model.details'
import {
	wrapResponse,
	ApiResponseSchema,
	PaginatedResponseSchema,
	ErrorResponseSchema
} from '../../common/dtos/response'

export const user = new Elysia({ prefix: '/users' })
	// GET all users
	.get(
		'/',
		async () => {
			const users = await userService.findAll()
			const meta = { total: users.length, page: 1, limit: 50 }
			return wrapResponse(
				users.slice(0, 50),
				200,
				'Users retrieved successfully',
				'',
				meta
			)
		},
		{
			detail: getAllUsersDetail,
			response: {
				200: PaginatedResponseSchema(CreateUserBody())
			}
		}
	)

	// GET user by ID
	.get(
		'/:id',
		async ({ params }) => {
			const user = await userService.findById(String(params.id))
			if (!user) return wrapResponse(null, 404, '', 'User not found')
			return wrapResponse(user, 200, 'User retrieved successfully')
		},
		{
			detail: getUserByIdDetail,
			params: t.Object({ id: t.String() }),
			response: {
				200: ApiResponseSchema(CreateUserBody()),
				404: ErrorResponseSchema
			}
		}
	)

	// POST create user
	.post(
		'/',
		async ({ body }) => {
			const created = await userService.create(body)
			return wrapResponse(created, 201, 'User created successfully')
		},
		{
			detail: createUserDetail,
			body: CreateUserBody(),
			response: {
				201: ApiResponseSchema(CreateUserBody()),
				400: ErrorResponseSchema
			}
		}
	)

	// PUT update user
	.put(
		'/:id',
		async ({ params, body }) => {
			const updated = await userService.update(String(params.id), body)
			if (!updated) return wrapResponse(null, 404, '', 'User not found')
			return wrapResponse(updated, 200, 'User updated successfully')
		},
		{
			detail: updateUserDetail,
			params: t.Object({ id: t.String() }),
			body: UpdateUserBody(),
			response: {
				200: ApiResponseSchema(UpdateUserBody()),
				404: ErrorResponseSchema,
				400: ErrorResponseSchema
			}
		}
	)

	// DELETE user
	.delete(
		'/:id',
		async ({ params }) => {
			const deleted = await userService.delete(String(params.id))
			if (!deleted) return wrapResponse(null, 404, '', 'User not found')
			return wrapResponse(deleted, 200, 'User deleted successfully')
		},
		{
			detail: deleteUserDetail,
			params: t.Object({ id: t.String() }),
			response: {
				200: ApiResponseSchema(CreateUserBody()),
				404: ErrorResponseSchema
			}
		}
	)
