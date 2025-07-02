'use client'

import {JSX} from "react";
import {Button} from "@/shared/ui";

import styles from './Header.module.css'

export const Header = (): JSX.Element => {
    return (
        <header id={'header'} className={styles.header}>
            <Button
                href={'#'}
                size={'small'}
            >
                How It Works
            </Button>

            <Button
                bg
                href={'#'}
                size={'small'}
            >
                Buy Salt AI
            </Button>
        </header>
    );
};