import { user } from './modules/user/index'
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import bearer from '@elysiajs/bearer'
import { auth } from './modules/auth'

const app = new Elysia()
	.use(swagger())
	.use(bearer())
	.get('/ping', () => ({ message: 'Pong!' }))
	.use(user)
	.use(auth)
	.listen(3000)

console.log('🚀 Server running: http://localhost:3000')
console.log('📘 Swagger docs: http://localhost:3000/swagger')
