import React from 'react';
import Horoscope from "../../../public/static/png/horoscope.png";
import Forecasts from "../../../public/static/png/forecasts.png";
import Taro from "../../../public/static/png/taro.png";
import {Service} from "@/components/Services/Service";
import {useI18n} from "@/utils/hooks/useI18n";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Stack} from "@mui/material";

type ServiceProps = {
    id: number,
    title: 'horoscope'|'forecasts'|'taro',
    img: StaticImport
}

const services: ServiceProps[] = [
    {
        id: 1,
        title: 'horoscope',
        img: Horoscope,
    },
    {
        id: 2,
        title: 'forecasts',
        img: Forecasts,
    },
    {
        id: 3,
        title: 'taro',
        img: Taro,
    },
]

export const Services = () => {
    const locale = useI18n();

    return (
        <Stack direction={'row'} justifyContent={'space-between'}>

            {
                services.map((item) => (
                    <Service
                        key={item.id}
                        title={locale?.services[item.title].title}
                        description={locale?.services[item.title].description}
                        img={item.img}
                        alt={item.title}
                    />
                ))
            }

        </Stack>
    )
}
