"use client"

import React, {JSX} from "react";
import Image from "next/image";

export const Ranking = ({status} : {status: string}): JSX.Element => {
    return (
        <Image
            width={24}
            height={24}
            src={`/images/shared/ui/Ranking/${status}.svg`}
            alt="ranking"
        >
        </Image>
    );
}