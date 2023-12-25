import { create } from "zustand";

interface LangStore {
	lang: Language | null;
	setLang: (value: Language) => void;
}

export const useLangStore = create<LangStore>()((set) => ({
	lang: null,
	setLang: (value: Language) => set({ lang: value }),
}));
