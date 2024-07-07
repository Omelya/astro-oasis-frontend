export type Locale = 'en' | 'uk';

type ServiceTitle = 'horoscope' | 'forecasts' | 'taro';

export type SignupFields = 'email'
    | 'password'
    | 'confirmPassword'
    | 'firstname'
    | 'lastname'
    | 'birthDate'
    | 'title';

export type SignupErrorFields = 'emailRequired'
    | 'notValidEmail'
    | 'passwordRequired'
    | 'smallPassword'
    | 'firstnameRequired'
    | 'lastnameRequired'
    | 'birthDateRequired';

export type Dictionary = {
    header: {
        login: string;
    };
    signup: Record<SignupFields, string>,
    signupValidationMessages: Record<SignupErrorFields, string>,
    login: {
        title: string,
        enterEmail: string,
        enterPassword: string,
    },
    welcome: {
        title: string,
        description: string,
        registration: string,
    },
    services: Record<ServiceTitle, { title: string; description: string }>,
    buttons: {
        continue: 'continue',
    }
} | null;
