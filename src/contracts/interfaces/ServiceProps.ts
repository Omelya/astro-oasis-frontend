import {StaticImport} from "next/dist/shared/lib/get-img-props";

export interface ServiceProps {
    title?: string;
    description?: string;
    img: StaticImport;
    alt: string;
}
