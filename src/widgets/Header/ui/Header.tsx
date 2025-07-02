'use client'

import {JSX} from "react";
import {Button} from "@/shared/ui";

import styles from './Header.module.css'
import {useSlideScroll} from "@/widgets/PageSlider";

export const Header = (): JSX.Element => {
    useSlideScroll({
        trigger: 'header',
        scrollTo: 'intro',
        scrollToPrev: 'header'
    });
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