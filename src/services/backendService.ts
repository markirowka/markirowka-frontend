/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "@/config/env"
import { AuthFormSchemaType, IAuthResponse } from "@/feature/auth"
import { NewPasswordFormSchemaType, PasswordRecoveryFormSchemaType } from "@/feature/password-recovery/config"
import { IRegistrationResponse, RegistrationFormSchemaType } from "@/feature/registration"

class BackendService {
	private headers: Record<string, string> = {}

	private static instance: BackendService

	constructor(headers: Record<string, string>) {
		this.headers = headers
	}

	async signUp(data: RegistrationFormSchemaType): Promise<IRegistrationResponse> {
		return await this.post('/api/signup', data, "POST")
	}

	async signIn(data: AuthFormSchemaType): Promise<IAuthResponse> {
		return await this.post('/api/signin', data, "POST")
	}

	async getUser(): Promise<IAuthResponse> {
		return await this.get('/api/userdata')
	}

	async sendEmailConfirm(token: string): Promise<{message: string}> {
		return await this.post('/api/signupconfirm', { token: token }, 'POST')
	}

	async logout() {
		return await this.get('/api/logout')
	}

	async sendResetPasswordRequest(data: PasswordRecoveryFormSchemaType) {
		return await this.post('/api/resetpassword', data, 'POST')
	}

	async sendNewPassword(token: string, data: NewPasswordFormSchemaType) {
		return await this.post('/api/resetpassword', {token: token, newPassword: data.password}, 'POST')
	}

	static getInstance(): BackendService {
		if (!BackendService.instance) {
			BackendService.instance = new BackendService({})
			const bearerToken = localStorage.getItem('bearerToken')
			if (bearerToken) {
				BackendService.instance.setAccessToken(bearerToken)
			}
		}
		return BackendService.instance
	}

	private setAccessToken(accessToken: string) {
		this.headers.Authorization = `${accessToken}`
	}

	private async get(path: string) {
		try {
			const endpoint = `${API_URL}${path}`

			const res = await fetch(endpoint, {
				method: 'GET',
				credentials: 'include',
				mode: 'cors',
				headers: {
					'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE3MTgwNDU2NzYsImV4cCI6MTcxODEzMjA3Nn0.GM4D99THZ0jNy8oyHwLEOoPCw2DjczCI9Z3D6EqcdRs'
				}
			})

			const json = await res.json()

			return json
		} catch (e: any) {
			throw new Error(e)
		}
	}

	private async post<T>(path: string, body: T, method?: 'POST' | 'PUT' | 'PATCH') {
		try {
			const endpoint = `${API_URL}${path}`

			const response = await fetch(endpoint, {
				method,
				mode: "cors",
				credentials: 'include',
				body: JSON.stringify(body),
				headers: new Headers({
					"Accept":"application/json", 
					"Content-Type" : "application/json"
				}),
			})


			if (!response.ok) {
				const json = await response.json()
				throw new Error(json?.error)
			}

			return await response.json()
		} catch (e: any) {
			throw new Error(e)
		}
	}
}

export const backendInstance = BackendService.getInstance()

