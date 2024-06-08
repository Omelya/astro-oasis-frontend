import {Dictionary, Locale} from "@/types/Locale";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    en: () => import('./en.json').then((module) => module.default as Dictionary),
    uk: () => import('./uk.json').then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    if (dictionaries[locale]) {
        return dictionaries[locale]();
    }

    return dictionaries.en();
};
