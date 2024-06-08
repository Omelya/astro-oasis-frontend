import React from "react";
import Image from "next/image";
import {Typography} from "@mui/material";
import {ServiceProps} from "@/interfaces/ServiceProps";
import {ServiceBox} from "@/ui/Containers/Wrapper";

export const Service: React.FC<ServiceProps> = ({
    title,
    description,
    img,
    alt,
}) => {
    return (
        <ServiceBox marginTop={1}>
            <Image src={img} alt={alt} height={250}/>
            <Typography fontWeight={700} marginTop={'2%'}>{title}</Typography>
            <Typography marginTop={'5%'}>{description}</Typography>
        </ServiceBox>
    )
}
