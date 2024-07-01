import { atom } from 'jotai';
import { UserData } from '../auth';
import { OrderData } from '../types';

export const userAtom = atom<UserData | false | null>(null);
export const loadingAtom = atom(false);
export const orderHistoryAtom = atom<OrderData[]>([]);
export const orderTotalCountAtom = atom<number>(0);
export const ordersPageAtom = atom<number>(1)