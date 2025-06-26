"use client"

import React, {JSX} from "react";
import Image from "next/image";
import styles from "./Icon.module.css";

interface IIconProps {
    className?: string;
    size: "small" | "big";
    name: "telegram" | "x";
}

export const Icon = ({
                         className,
                         size,
                         name,
                     }: IIconProps): JSX.Element => {

    const dimensions = size === "big"
        ? {width: 64, height: 64}
        : {width: 36, height: 36};

    const classNames = `${styles.icon} ${className ? ` ${className}` : ""}`

    return (
        <Image
            alt={name}
            src={`./images/shared/ui/icon/${name}.svg`}
            width={dimensions.width}
            height={dimensions.height}
            className={classNames}
        />
    );
}