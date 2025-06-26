import {JSX} from "react";
import Image from "next/image";
import { TPhotos } from "../lib/photos";

export const Photo = ({ src, width, height, alt }: TPhotos) : JSX.Element => (
    <Image src={src} width={width} height={height} alt={alt} />
);