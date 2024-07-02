import { atom } from 'jotai';
import { UserDisplayData } from '../types';

export const userListAtom = atom<UserDisplayData[]>([]);