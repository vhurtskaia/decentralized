'use client'

import {JSX} from "react";
import {Button} from "@/shared/ui";

import styles from './Header.module.css'

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Button
                size={'small'}
            >
                How It Works
            </Button>

            <Button
                bg
                size={'small'}
            >
                Buy Salt AI
            </Button>
        </header>
    );
};