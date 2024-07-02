import { atom } from 'jotai';
import { MenuItem } from '../types';

export const topMenu = atom<MenuItem[]>([]);