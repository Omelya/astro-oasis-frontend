import React from "react";
import Image from "next/image";
import {Typography} from "@mui/material";
import {ServicePaper} from "@/ui/Papers/Paper";
import {ServiceProps} from "@/interfaces/ServiceProps";

export const Service: React.FC<ServiceProps> = ({
    title,
    description,
    img,
    alt,
}) => {
    return (
        <ServicePaper>
            <Image src={img} alt={alt} height={250}/>
            <Typography fontWeight={700} marginTop={'2%'}>{title}</Typography>
            <Typography marginTop={'5%'}>{description}</Typography>
        </ServicePaper>
    )
}
