import React, {useEffect, useRef} from "react";
import {Typography} from "@mui/material";
import {NavButton} from "@/ui/Buttons/Button";

export const HomeHeader = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                buttonRef.current.classList.remove('active');
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonRef.current) {
            buttonRef.current.classList.remove('active');
        }

        const newActiveButton = event.currentTarget;

        newActiveButton.classList.add('active');

        buttonRef.current = newActiveButton;
    };

    const handleLogout = () => {
        console.log('Logout');
    };

    return (
        <>
            <NavButton onClick={handleClick}>
                <Typography color={'#FFFFFF'} fontSize={20} textOverflow={'clip'}>
                    Астрологічні послуги
                </Typography>
            </NavButton>
            <NavButton onClick={handleClick}>
                <Typography color={'#FFFFFF'} fontSize={20}>
                    Персональний прогноз
                </Typography>
            </NavButton>
            <NavButton onClick={handleClick}>
                <Typography color={'#FFFFFF'} fontSize={20}>
                    Довідник
                </Typography>
            </NavButton>
            <NavButton onClick={handleClick}>
                <Typography color={'#FFFFFF'} fontSize={20}>
                    Блог
                </Typography>
            </NavButton>
            <NavButton onClick={handleLogout}>
                <Typography color={'#FFFFFF'} fontSize={20}>
                    Вихід
                </Typography>
            </NavButton>
        </>
    )
}
