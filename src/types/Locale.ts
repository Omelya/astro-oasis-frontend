export type Locale = 'en' | 'uk';

type ServiceTitle = 'horoscope' | 'forecasts' | 'taro';

export type Dictionary = {
    header: {
        login: string;
    };
    signup: {
        title: string,
        enterEmail: string,
        enterPassword: string,
        confirmPassword: string,
        enterName: string,
        enterLastname: string,
        enterBirthDate: string,
        continue: string,
    },
    welcome: {
        title: string,
        description: string,
        registration: string,
    },
    services: Record<ServiceTitle, { title: string; description: string }>;
} | null;
