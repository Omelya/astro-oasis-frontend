'use client'

import { BlurStack } from "@/ui/Containers/Stack";
import { FormControl, Stack, Typography } from "@mui/material";
import { Button } from "@/ui/Buttons/Button";
import { useI18n } from "@/utils/hooks/useI18n";
import Title from "@/components/Auth/Title";
import { AuthInput } from "@/ui/Form/Input";
import { useFormik } from "formik";
import { loginSchema as validationSchema } from "@/utils/validationSchema/authSchema";
import {SignupErrorFields} from "@/types/Locale";

const initialValues = {
    email: '',
    password: '',
};

export default function Login() {
    const locale = useI18n();

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount: false,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <BlurStack width={'25%'} height={'30%'} margin={'0 auto'} padding={'2%'}>
            <Title
                isAuth={true}
                title={locale?.login.title}
            />
            <Stack
                height={'85%'}
                display={'flex'}
                justifyContent={'space-between'}
                component={'form'}
                onSubmit={formik.handleSubmit}
            >
                <FormControl>
                    <AuthInput
                        id={'email'}
                        name={'email'}
                        label={locale?.login.enterEmail}
                        variant="outlined"
                        value={formik.values['email']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched['email'] && Boolean(formik.errors['email'])}
                        helperText={
                            formik.touched['email'] &&
                            locale?.signupValidationMessages[formik.errors['email'] as SignupErrorFields]
                        }
                    />
                </FormControl>
                <FormControl>
                    <AuthInput
                        id={'password'}
                        name={'password'}
                        label={locale?.login.enterPassword}
                        variant="outlined"
                        value={formik.values['password']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched['password'] && Boolean(formik.errors['password'])}
                        helperText={
                            formik.touched['password'] &&
                            locale?.signupValidationMessages[formik.errors['password'] as SignupErrorFields]
                        }
                        inputProps={{ type: 'password' }}
                    />
                </FormControl>
                <Button
                    size={'large'}
                    variant={'contained'}
                    type={'submit'}
                >
                    <Typography fontSize={24}>{locale?.buttons.continue}</Typography>
                </Button>
            </Stack>
        </BlurStack>
    )
}
