import { t, TSchema } from 'elysia'
import { Pagination, PaginationSchema } from './pagination'

export interface ApiResponse<T> {
	success: boolean
	message?: string
	error?: string
	code: number
	meta?: Pagination | any
	data?: T
}

/**
 * Wrap API response
 */
export function wrapResponse<T>(
	data: T | null = null,
	code = 200,
	message = '',
	error = '',
	meta?: Pagination | any
): ApiResponse<T> {
	if (meta && 'total' in meta && 'limit' in meta && !('totalPages' in meta)) {
		meta.totalPages = Math.ceil(meta.total / meta.limit)
	}

	return {
		success: !error,
		data: error ? undefined : data === null ? undefined : data,
		message: message || (error ? '' : 'OK'),
		error: error || undefined,
		code,
		meta
	}
}

/**
 * GENERIC API RESPONSE SCHEMA
 * Tạo schema response generic có thể tái sử dụng
 */
export const ApiResponseSchema = <T extends TSchema>(dataSchema: T) =>
	t.Object({
		success: t.Boolean(),
		code: t.Number(),
		message: t.Optional(t.String()),
		error: t.Optional(t.String()),
		data: t.Optional(t.Union([dataSchema, t.Null()]))
	})

/**
 * GENERIC API RESPONSE SCHEMA WITH PAGINATION
 * Dành cho list/array có pagination
 */
export const ApiResponseWithMetaSchema = <T extends TSchema>(dataSchema: T) =>
	t.Object({
		success: t.Boolean(),
		code: t.Number(),
		message: t.Optional(t.String()),
		error: t.Optional(t.String()),
		meta: t.Optional(t.Union([PaginationSchema, t.Object({})])),
		data: t.Optional(t.Union([dataSchema, t.Null()]))
	})

/**
 * GENERIC PAGINATED LIST RESPONSE
 * Shorthand cho array response với pagination
 */
export const PaginatedResponseSchema = <T extends TSchema>(itemSchema: T) =>
	ApiResponseWithMetaSchema(t.Array(itemSchema))

/**
 * Schema cho error response
 */
export const ErrorResponseSchema = t.Object({
	success: t.Literal(false),
	code: t.Number(),
	error: t.String(),
	message: t.Optional(t.String())
})
