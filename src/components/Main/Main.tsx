import { Stack } from "@mui/material";
import {Services} from "@/components/Services/Services";
import Welcome from "@/components/Main/Welcome";

export const Main = () => {
    return (
        <Stack alignItems={'center'}>
            <Welcome/>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Services/>
            </Stack>
        </Stack>
    )
}
