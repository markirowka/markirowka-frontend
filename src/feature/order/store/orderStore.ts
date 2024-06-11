import { atom } from "jotai";
import { OrderFormSchemaType } from "../config";

export const orderProductsStoreAtom = atom<OrderFormSchemaType[]>([])