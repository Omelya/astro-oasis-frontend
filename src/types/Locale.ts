export type Locale = 'en' | 'uk';

type ServiceTitle = 'horoscope' | 'forecasts' | 'taro';

export type Dictionary = {
    header: {
        login: string;
    };
    welcome: {
        title: string,
        description: string,
        registration: string,
    },
    services: Record<ServiceTitle, { title: string; description: string }>;
} | null;
