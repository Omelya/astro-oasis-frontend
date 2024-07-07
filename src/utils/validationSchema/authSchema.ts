import * as yup from "yup";
import { birthDate, confirmPassword, email, firstname, lastname, password } from "./schema";

export const signupSchema = yup.object({
    email,
    password,
    confirmPassword,
    firstname,
    lastname,
    birthDate,
});

export const loginSchema = yup.object({
    email,
    password,
});
