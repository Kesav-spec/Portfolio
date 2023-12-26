import { create } from "zustand";

interface LangStore {
	lang: Language;
	setLang: (value: Language) => void;
}

export const useLangStore = create<LangStore>()((set) => ({
	lang: "en",
	setLang: (value: Language) => set({ lang: value }),
}));
