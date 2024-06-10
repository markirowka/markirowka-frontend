import { atom } from "jotai";

interface IAuthStore { 
	id?: number,
	bearerToken?: string,
}

export const authAtom = atom<IAuthStore>({})