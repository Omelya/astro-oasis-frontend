import {useContext, useEffect, useState} from "react";
import {i18nContext} from "@/utils/context/i18nContext";
import {getDictionary} from "@/libraries/dictionaries/dictionaries";
import {Dictionary, Locale} from "@/types/Locale";

export const useI18n = () => {
    const [dictionary, setDictionary] = useState<Dictionary>(null);

    const locale = useContext(i18nContext);

    useEffect(() => {
        const fetchDictionary = async () => {
            const dict = await getDictionary(locale as Locale);

            setDictionary(dict);
        };

        fetchDictionary();
    }, [locale]);

    return dictionary;
}
