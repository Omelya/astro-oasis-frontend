import {Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import React from "react";
import {usePathname} from "next/navigation";
import {useI18n} from "@/utils/hooks/useI18n";

export const AuthHeader = () => {
    const path = usePathname();
    const locale = useI18n();

    return(
        <Button href={ path === '/login' ? '/signup' : '/login' }>
            <Typography color={'#FFFFFF'} fontSize={30}>

                {
                    path === '/login'
                        ? locale?.welcome.registration
                        : locale?.header.login
                }

            </Typography>
        </Button>
    )
}