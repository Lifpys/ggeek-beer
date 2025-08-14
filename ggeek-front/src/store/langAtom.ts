import { atom } from "jotai";

export const langAtom = atom<string>("");
export const isAuthenticatedAtom = atom((get) => get(langAtom) !== null);
