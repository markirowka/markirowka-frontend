import { atom } from 'jotai';
import { UserData } from '../auth';
import { OrderData } from '../types';

export const userAtom = atom<UserData | false | null>(null);
export const statsAtom = atom<{url: string; is_read: boolean}[]>([]);
export const loadingAtom = atom(false);
export const orderHistoryAtom = atom<OrderData[]>([]);
export const orderToUpdateListAtom = atom<number[]>([]);
export const orderTotalCountAtom = atom<number>(0);
export const ordersPageAtom = atom<number>(1)