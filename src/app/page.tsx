'use client'

import {JSX} from "react";

import {
    Header,
    Footer,
} from "@/widgets";

import {PageSlider} from "@/widgets/PageSlider";
import styles from "@/widgets/PageSlider/ui/PageSlider.module.css";

export default function Home(): JSX.Element {
    return (
        <div id="smooth-wrapper" className={styles.smooth__wrapper}>
            <div id="smooth-content" className={styles.smooth__content}>
                <Header/>
                <PageSlider/>
                <Footer/>
            </div>
        </div>
    );
}