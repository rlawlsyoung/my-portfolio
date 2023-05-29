import { atom } from "recoil";

const cursorVariantAtom = atom<string>({
  key: "atom",
  default: "default",
});

export { cursorVariantAtom };
