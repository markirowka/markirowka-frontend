import { atom } from 'jotai';
import { CatItem, MenuItem, UserDisplayData } from '../types';

export const userListAtom = atom<UserDisplayData[]>([]);
export const itemsToDeleteAtom = atom<{ id: number }[]>([]);
export const itemsToUpdateAtom = atom<MenuItem[]>([]);
export const itemsToCreateAtom = atom<MenuItem[]>([]);
export const categoriesAtom = atom<CatItem[]>([]);