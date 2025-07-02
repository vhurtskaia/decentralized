import React, {JSX} from "react";
import Image from "next/image";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

import {
    IntroSection,
    ProjectsIntegratedSection,
    CrowdsourcingSection,
    LeaderboardSection,
    JoinSection,
    HarvestSection,
} from "@/widgets";

import styles from "./PageSlider.module.css";

export const PageSlider = (): JSX.Element => {
    return (
        <main>
            <Image
                data-speed="0.5"
                src={'/images/widgets/IntroSection/BlueDecoration.svg'}
                className={`decor__blue ${styles.decoration__blue}`}
                height={504}
                width={796}
                alt={'Blue Decoration'}
            />

            <Image
                src={'/images/widgets/IntroSection/OrangeDecoration.svg'}
                className={`decor__orange ${styles.decoration__orange}`}
                height={504}
                width={796}
                alt={'Orange Decoration'}
            />

            <Image
                data-speed="0.25"
                src={'/images/widgets/IntroSection/planet.webp'}
                className={styles.planet}
                height={1016}
                width={1016}
                alt={'Planet Decoration'}
            />

            <IntroSection/>
            <ProjectsIntegratedSection/>
            <CrowdsourcingSection/>
            <LeaderboardSection/>
            <JoinSection/>
            <HarvestSection/>
        </main>
    );
};