'use client'

import React, {JSX, useRef} from "react";
import {useGSAP} from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";

import {useSlideScroll} from "@/widgets/PageSlider";
import styles from "./HarvestSection.module.css";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const HarvestSection = (): JSX.Element => {
    useSlideScroll({
        trigger: 'harvest',
        scrollTo: 'join',
        scrollToPrev: 'harvest'
    });

    const nasaRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: `#join`,
            start: '60% center',
            scrub: 0.3,
            animation: gsap.fromTo(nasaRef.current, {
                y: `-125%`,
            }, {
                y: `0%`,
            })
        })
    })

    return (
        <section
            id={'harvest'}
            className={styles.section}>
            <p>Join our community and harvest $SALT</p>

            <Image
                ref={nasaRef}
                src={'/images/widgets/HarvestSection/nasa.webp'}
                className={styles.image}
                height={520}
                width={1920}
                alt={'Nasa Photo'}
            />
        </section>
    );
};