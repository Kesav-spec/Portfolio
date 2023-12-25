import { create } from "zustand";

interface LangStore {
	lang: string | null;
	setLang: (value: string | null) => void;
}

export const useLangStore = create<LangStore>()((set) => ({
	lang: null,
	setLang: (value) => set({ lang: value }),
}));
