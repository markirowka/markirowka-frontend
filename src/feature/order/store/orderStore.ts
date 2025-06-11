import { atom } from "jotai";
import { CMRDeliveryData, OrderFormSchemaType } from "../config";

export const orderProductsStoreAtom = atom<OrderFormSchemaType[]>([]);
export const hasSpecifyAtom = atom<boolean>(false);
export const cmrDeliveryAtom = atom<CMRDeliveryData>({ 
    weight: "", 
    volume: "", 
    cargoPlaceCount: 0,
    packType: "", 
    driverName: "", 
    documents: "", 
    autoMark: "", 
    autoNumber: "",
    subAutoNumber: "" 
})