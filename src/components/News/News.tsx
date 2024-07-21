import React from "react";
import {Stack, Typography} from "@mui/material";
import {NewsItem} from "@/components/News/NewsItem";

const data = [1, 2, 3];

export const News = () => {
    return(
        <Stack direction={'column'} spacing={1} width={'50%'}>
            <Typography fontSize={24} fontWeight={700} color={'#FFFFFF'} textAlign={'center'}>
                Останні новини
            </Typography>
            <Stack className={'custom-slider'} spacing={1} style={{overflowY: 'auto'}}>

                {
                    data.map((value) => (
                        <NewsItem key={value}/>
                    ))
                }

            </Stack>
        </Stack>
    )
}
