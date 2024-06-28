import { atom } from 'jotai';
import { UserData } from '../auth';

export const userAtom = atom<UserData | boolean | null>(null);
export const loadingAtom = atom(false);