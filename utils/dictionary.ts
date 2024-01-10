const dictionaries = {
	en: () => import("@/utils/dictionaries/en.json").then((module) => module.default),
	ga: () => import("@/utils/dictionaries/ga.json").then((module) => module.default),
};

export const getDictionary: DictionaryFunction = async (lang: Language) => dictionaries[lang]();
