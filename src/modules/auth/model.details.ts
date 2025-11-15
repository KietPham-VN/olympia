export const loginDetail = {
	tags: ['auth'],
	summary: 'Login',
	description: 'Đăng nhập vào hệ thống bằng email và password',
	responses: {
		'200': {
			description: 'Đăng nhập thành công',
			content: {
				'application/json': {
					example: {
						success: true,
						code: 200,
						message: 'Đăng nhập thành công',
						data: {
							token: 'jwt-token-here'
						}
					}
				}
			}
		},
		'401': {
			description: 'Đăng nhập thất bại',
			content: {
				'application/json': {
					example: {
						success: false,
						code: 401,
						error: 'Email hoặc mật khẩu không đúng'
					}
				}
			}
		}
	}
}
