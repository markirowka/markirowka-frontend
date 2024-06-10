import { atom } from 'jotai'
import { ShoesFormSchemaType } from '../config'

export const shoesAtom = atom<ShoesFormSchemaType[]>([])