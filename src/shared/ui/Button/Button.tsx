"use client"

import React, {JSX} from "react";

import styles from "./Button.module.css";

interface IButtonProps {
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<never>;
    className?: string;
    size?: "small" | "big";
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    bg?: boolean
}

export const Button = ({
                           children,
                           className,
                           ref,
                           onClick,
                           type = "button",
                           size = "big",
                           bg,
                       }: IButtonProps) : JSX.Element => {

    const sizes = size === "big" ? styles['button--big'] : styles['button--small']
    const background = bg ? styles["button--background"] : ""
    const classNames = `${styles.button} ${styles.buttonSmall} ${sizes} ${background}${className ? ` ${className}` : ""}`

    return (
        <button
            className={classNames}
            onClick={onClick}
            ref={ref}
            type={type}
        >
            {children}
        </button>
    );
}