import { atom } from "recoil";

const isMouseHoveredAtom = atom<boolean>({
  key: "atom",
  default: false,
});

export { isMouseHoveredAtom };
