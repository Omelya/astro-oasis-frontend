'use client'

import {BlurStack} from "@/ui/Containers/Stack";
import {Box, FormControl} from "@mui/material";
import {useI18n} from "@/utils/hooks/useI18n";
import {useState} from "react";
import {SignupErrorFields, SignupFields} from "@/types/Locale";
import Title from "@/components/Auth/Title";
import {AuthInput} from "@/ui/Form/Input";
import {useFormik} from "formik";
import {FormControlButton} from "@/components/Auth/FormControlButton";
import {validationSchema} from "@/utils/validationSchema/authSchema";

const FIRST_STEP = 1;
const SECOND_STEP = 2;

type Step = typeof FIRST_STEP | typeof SECOND_STEP;

const stepData: Record<Step, { isPassword?: boolean, type: SignupFields }[]> = {
    [FIRST_STEP]: [
        {
            type: 'email',
        },
        {
            isPassword: true,
            type: 'password',
        },
        {
            isPassword: true,
            type: 'confirmPassword'
        },
    ],
    [SECOND_STEP]: [
        {
            type: 'firstname',
        },
        {
            type: 'lastname',
        },
        {
            type: 'birthDate',
        },
    ]
};

const initialValues: Partial<Record<SignupFields, string>> = {
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: '',
    birthDate: '',
}

export default function Signup() {
    const [step, setStep] = useState<Step>(FIRST_STEP);

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount: false,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    const locale = useI18n();

    const handleBack = () => {
        if (step === SECOND_STEP) {
            setStep(FIRST_STEP);
        }
    }

    const handleNext = () => {
        if (step === FIRST_STEP) {
            if (formik.dirty) setStep(SECOND_STEP);
        } else {
            formik.handleSubmit();
        }
    }

    return (
        <BlurStack width={'25%'} height={'40%'} margin={'0 auto'} padding={'2%'}>
            <Title
                step={step}
                isAuth={false}
                title={locale?.signup.title}
            />
            <Box
                component={'form'}
                height={'85%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
            >

                {
                    stepData[step].map((data, index) => (
                        <FormControl key={index}>
                            <AuthInput
                                id={data.type}
                                name={data.type}
                                label={locale?.signup[data.type]}
                                variant="outlined"
                                value={formik.values[data.type]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched[data.type] && Boolean(formik.errors[data.type])}
                                helperText={
                                    formik.touched[data.type] &&
                                    locale?.signupValidationMessages[formik.errors[data.type] as SignupErrorFields]
                                }
                                inputProps={{
                                    type: data?.isPassword ? 'password' : 'text',
                                }}
                            />
                        </FormControl>
                    ))
                }

                <FormControlButton
                    step={step}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            </Box>
        </BlurStack>
    )
}
