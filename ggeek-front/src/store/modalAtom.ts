import { atom } from "jotai";
import { ReactNode } from "react";

interface ModalState {
  show: boolean;
  zIndex: number;
  title?: string;
  text?: ReactNode;
  mainBtnText?: string;
  mainBtnClick?: () => void;
  subBtnText?: string;
  subBtnClick?: () => void;
  noClose?: boolean;
  data?: any;
}

const defaultModalAtom = atom<ModalState>({ show: false, zIndex: 20 });
const mainPopupModalAtom = atom<ModalState>({ show: false, zIndex: 20 });
const portfolioModalAtom = atom<ModalState>({ show: false, zIndex: 20 });

export { defaultModalAtom, mainPopupModalAtom, portfolioModalAtom };

export default {
  defaultModalAtom,
  mainPopupModalAtom,
  portfolioModalAtom,
};
