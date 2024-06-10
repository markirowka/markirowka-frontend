import { atom } from 'jotai'
import { ClothesFormSchemaType } from '../config'

export const clothesAtom = atom<ClothesFormSchemaType[]>([])