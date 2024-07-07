import * as yup from "yup";

export const email = yup
    .string()
    .email('notValidEmail')
    .required('emailRequired');

export const password = yup
    .string()
    .min(8, 'smallPassword')
    .required('passwordRequired');

export const confirmPassword = yup
    .string()
    .oneOf([yup.ref('password')], 'Паролі мають збігатися')
    .required('passwordRequired');

export const firstname = yup
    .string()
    .required('firstnameRequired');

export const lastname = yup
    .string()
    .required('lastnameRequired');

export const birthDate = yup
    .date()
    .required('birthdateRequired');
