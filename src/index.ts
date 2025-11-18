import { user } from './modules/user/index'
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import bearer from '@elysiajs/bearer'
import { auth } from './modules/auth'
import openapi from '@elysiajs/openapi'
import { errorHandler } from './middlewares/errorHandler'

const app = new Elysia()
	.use(errorHandler)
	.use(swagger())
	.use(openapi())
	.use(bearer())
	.use(user)
	.use(auth)
	.listen(3000, () => {
		console.log('🚀 Server running: http://localhost:3000')
		console.log('📘 Swagger docs: http://localhost:3000/swagger')
	})
