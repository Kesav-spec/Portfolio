const dictionaries = {
	en: () => import("./dictionaries/en.json").then((module) => module.default),
	jp: () => import("./dictionaries/jp.json").then((module) => module.default),
};

export const getDictionary: DictionaryFunction = async (lang: Language) => dictionaries[lang]();
