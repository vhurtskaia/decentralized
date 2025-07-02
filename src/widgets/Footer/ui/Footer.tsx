import {JSX} from "react";
import Link from "next/link";

import {Icon} from "@/shared/ui";

import styles from './Footer.module.css'

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <Link href={'#'}>How It Works</Link>
                <Link href={'#'}>Buy Salt AI</Link>
            </div>

            <hr/>

            <div className={styles.footer__bottom}>
                <div>
                    <Icon href={'#'} name={'telegram'} size={'small'}/>

                    <Icon href={'#'} name={'x'} size={'small'}/>
                </div>
                <div>
                    <Link href={'#'}>Terms of Use</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
};