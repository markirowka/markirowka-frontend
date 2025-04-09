/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "@/config/env"
import { AuthFormSchemaType, IAuthResponse, IUserDataResponse, UserData } from "@/feature/auth"
import { ClothesFormSchemaType } from "@/feature/clothes"
import { CMRDeliveryData } from "@/feature/order"
import { PasswordRecoveryFormSchemaType } from "@/feature/password-recovery/config"
import { IRegistrationResponse, RegistrationFormSchemaType } from "@/feature/registration"
import { ShoesFormSchemaType } from "@/feature/shoes/config"
import { BoolResponse, ContentBlock, ItemDataClothes, ItemDataShoes, LibItem, MenuItem, OrderItemData, PageContentData, UserDisplayData } from "@/feature/types"
import { ObjectToKVArray } from "@/utils"

class BackendService {
	private headers: Record<string, string> = {}

	private static instance: BackendService

	constructor(headers: Record<string, string>) {
		this.headers = headers
	}

	async signUp(data: RegistrationFormSchemaType): Promise<IRegistrationResponse> {
		return await this.post('/api/signup', data, "POST")
	}

	async editUser(data: RegistrationFormSchemaType): Promise<IRegistrationResponse> {
		return await this.post('/api/signup', data, "POST")
	}

	async getPageContent(url: string): Promise<PageContentData> {
		return (await this.get(`/api/content/${url}`))?.page || {
			pageUrl: url,
			heading: "404",
			content: "Страница не найдена или ещё не создана"
		}
	}

	async savePageContent(page: PageContentData) {
		return await this.post("/api/admin/setcontent", page, "POST");
	}

	async getMenu() : Promise<MenuItem[]> {
		return (await this.get("/api/menu"))?.menu || []
	}

	async editMenuItems (items: MenuItem[]) {
		return await this.post("/api/admin/updatemenu", {items}, "POST");
	}

	async deleteMenuItems (items: MenuItem[]) {
		return await this.post("/api/admin/deletemenu", {items}, "POST");
	}

	async addMenuItems (items: MenuItem[]) {
		return await this.post("/api/admin/addmenu", {items}, "POST");
	}

	async getUserOrders(page = 1) : Promise<any[]> {
		return (await this.get(`/api/orderhistory/${page}`))?.orders || []
	}

	async getAllUsers() : Promise<UserDisplayData[]> {
		return (await this.get(`/api/admin/allusers`))?.users.sort(
			(a: UserDisplayData, b: UserDisplayData) => {
			const p1 = a.id;
			const p2 = b.id;
			if (p1 < p2) return 1;
			if (p1 === p2) return 0;
			if (p1 > p2) return -1
		}) || []
	}

	async getUserOrderCount() : Promise<number> {
		return (await this.get('/api/userordercount'))?.count || 0
	}

	async getTotalCount() : Promise<number> {
		return (await this.get('/api/admin/ordercount'))?.count || 0
	}

	async getOrders(page = 1) : Promise<any[]> {
		return (await this.get(`/api/admin/allorders/${page}`))?.orders || []
	}

	async getDownloads() : Promise<any[]> {
		return (await this.get(`/api/downloads`))?.files || []
	}

	async getDownloadsByFileId(fileId: number) : Promise<any[]> {
		return (await this.get(`/api/downloadinfo/${fileId}`))?.files || []
	}

	async deleteFile(data: {fileId: number}): Promise<IRegistrationResponse> {
		return await this.post('/api/deletefile', data, "POST")
	}

	downloadFile(fileName: string, userId: number) {
		const url = `${API_URL}/api/file/${userId}/${fileName}`;
		window.open(url, '_blank');
	}

	async editProfile(data: UserData): Promise<IRegistrationResponse> {
		//TODO: Add edit profile POST request
		const sendingData = {
			paramsToEdit: ObjectToKVArray(data)
		}
		return await this.post('/api/edituser', sendingData, "POST")
	}

	async editProfileParamsByAdmin(data: any): Promise<IRegistrationResponse> {
		//TODO: Add edit profile POST request
		const sendingData = {
			paramsToEdit: ObjectToKVArray(data)
		}
		return await this.post('/api/admin/edituser', sendingData, "POST")
	}

	async signIn(data: AuthFormSchemaType): Promise<IAuthResponse> {
		return await this.post('/api/signin', data, "POST")
	}

	async getUser(): Promise<IUserDataResponse> {
		return await this.get('/api/userdata')
	}

	async deleteUser(id: number): Promise<boolean> {
		return !!(await this.post(`/api/admin/deleteuser/${id}`, {}, "DELETE"))
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

	async setNewPassword(token: string, newPassword: string) {
		return await this.post('/api/setnewpassword', {token, newPassword }, 'POST')
	}

	// Создание спецификации

	async createSpecifyShoes( items: ShoesFormSchemaType[]) {
		return await this.post('/api/createSpecify/shoes', {items}, 'POST')
	}

	async createSpecifyClothes( items: ClothesFormSchemaType[]) {
		return await this.post('/api/createSpecify/clothes', {items}, 'POST')
	}

	async createOrder( items: OrderItemData[], cmr_data: CMRDeliveryData, shoes?: ItemDataShoes[], clothes?: ItemDataClothes[]) {
		return await this.post('/api/createpayments', {items, cmr_data, shoes, clothes}, 'POST')
	}

	// Статистика прочтений

	async getReadArticles(): Promise<{url: string; is_read: boolean}[]> {
        return (await this.get("/api/stats/getreadstats"))?.stats || [];
	}

	async markPageRead(url: string) {
		return await this.get(`/api/stats/markread/${url}`);
	}

	async updateOrders(ids: number[], status: "new" | "pay_messaged" | "paid") {
		return await this.post(`/api/updateorders`, {
			orderIds: ids,
			status
		}, "POST")
	}

	

	// Загрузка блоков контента для новостей

	async getPageContentBlocks(url: string): Promise<{blocks: ContentBlock[] }> {
        const requestUrl = `/api/getcontentblocks/${url}`;
		return await this.get(requestUrl);
	}

	async createContentBlock(url: string): Promise<{  success: boolean; id: number  }> {
        const body = {
			id: 0,
			content: "",
			url
		}
		return await this.post("/api/contentblock/create", body, "POST");
	}

	async updateContentBlock(data: ContentBlock): Promise<BoolResponse> {
		return await this.post("/api/contentblock/update", data, "POST");
	}
	
	async deleteContentBlock(id: number): Promise<BoolResponse> {
        const body = {
			id
		}
		return await this.post("/api/contentblock/delete", body, "POST");
	}

	async getCategories(): Promise<{ categories: LibItem[] }> {
		return await this.get("/api/categories");
	}

	async addCategory(name: string): Promise<BoolResponse> {
		return await this.post("/api/addcategory", {name}, "POST");
	}

	async dropCategory(id: number): Promise<BoolResponse> {
		return await this.post("/api/deletecategory", { id }, "POST");
	}

	// Общие методы

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
			})
			const json = await res.json()
			return json
		} catch (e: any) {
			console.log(Error(e));
			return null
		}
	}

	private async post<T>(path: string, body: T, method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE') {
		try {
			const endpoint = `${API_URL}${path}`

			const response = await fetch(endpoint, {
				method,
				mode: "cors",
				credentials: 'include',
				body: method !== 'DELETE' ? JSON.stringify(body) : undefined,
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

