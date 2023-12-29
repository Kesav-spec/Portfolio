const dictionaries = {
	en: () => import("@/utils/dictionaries/en.json").then((module) => module.default),
	jp: () => import("@/utils/dictionaries/jp.json").then((module) => module.default),
};

export const getDictionary: DictionaryFunction = async (lang: Language) => dictionaries[lang]();
