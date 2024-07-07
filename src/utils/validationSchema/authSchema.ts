import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('notValidEmail')
        .required('emailRequired'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('passwordRequired'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Паролі мають збігатися')
        .required('passwordRequired'),
    firstname: yup
        .string()
        .required('firstnameRequired'),
    lastname: yup
        .string()
        .required('lastnameRequired'),
    birthDate: yup
        .date()
        .required('birthdateRequired'),
});
