export const getAllUsersDetail = {
	tags: ['users'],
	summary: 'Get all users',
	description: 'Retrieve a paginated list of all users',
	responses: {
		'200': {
			description: 'users retrieved successfully',
			content: {
				'application/json': {
					example: {
						success: true,
						code: 200,
						message: 'users retrieved successfully',
						data: [
							{
								studentCode: 'S123456',
								email: 'student@example.com',
								name: 'Nguyen Van A',
								school: 'Hanoi University',
								phone: '0123456789'
							}
						],
						meta: {
							page: 1,
							limit: 50,
							total: 100,
							totalPages: 2
						}
					}
				}
			}
		}
	}
}

export const getUserByIdDetail = {
	tags: ['users'],
	summary: 'Get user by ID',
	description: 'Retrieve a single user by their ID',
	responses: {
		'200': {
			description: 'User retrieved successfully',
			content: {
				'application/json': {
					example: {
						success: true,
						code: 200,
						message: 'User retrieved successfully',
						data: {
							studentCode: 'S123456',
							email: 'student@example.com',
							name: 'Nguyen Van A',
							school: 'Hanoi University',
							phone: '0123456789'
						}
					}
				}
			}
		},
		'404': {
			description: 'User not found',
			content: {
				'application/json': {
					example: {
						success: false,
						code: 404,
						error: 'User not found'
					}
				}
			}
		}
	}
}

export const createUserDetail = {
	tags: ['users'],
	summary: 'Create new user',
	description: 'Create a new user',
	responses: {
		'201': {
			description: 'User created successfully',
			content: {
				'application/json': {
					example: {
						success: true,
						code: 201,
						message: 'User created successfully',
						data: {
							studentCode: 'S123456',
							email: 'student@example.com',
							name: 'Nguyen Van A',
							school: 'Hanoi University',
							phone: '0123456789'
						}
					}
				}
			}
		},
		'400': {
			description: 'Bad request',
			content: {
				'application/json': {
					example: {
						success: false,
						code: 400,
						error: 'Validation error'
					}
				}
			}
		}
	}
}

export const updateUserDetail = {
	tags: ['users'],
	summary: 'Update user',
	description: 'Update an existing user',
	responses: {
		'200': {
			description: 'User updated successfully',
			content: {
				'application/json': {
					example: {
						success: true,
						code: 200,
						message: 'User updated successfully',
						data: {
							studentCode: 'S123456',
							email: 'newemail@example.com',
							name: 'Nguyen Van A',
							school: 'Hanoi University',
							phone: '0123456789'
						}
					}
				}
			}
		},
		'404': {
			description: 'User not found',
			content: {
				'application/json': {
					example: {
						success: false,
						code: 404,
						error: 'User not found'
					}
				}
			}
		}
	}
}

export const deleteUserDetail = {
	tags: ['users'],
	summary: 'Delete user',
	description: 'Delete a user by ID',
	responses: {
		'200': {
			description: 'User deleted successfully',
			content: {
				'application/json': {
					example: {
						success: true,
						code: 200,
						message: 'User deleted successfully',
						data: {
							studentCode: 'S123456',
							email: 'student@example.com',
							name: 'Nguyen Van A',
							school: 'Hanoi University',
							phone: '0123456789'
						}
					}
				}
			}
		},
		'404': {
			description: 'User not found',
			content: {
				'application/json': {
					example: {
						success: false,
						code: 404,
						error: 'User not found'
					}
				}
			}
		}
	}
}
