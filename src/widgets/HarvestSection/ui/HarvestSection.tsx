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
    const harvestRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const harvestHeight = harvestRef.current ? harvestRef.current.offsetHeight : 0;
        const yOffset = -(harvestHeight - 300);

        ScrollTrigger.create({
            trigger: `#join`,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.2,
            markers: true,
            animation: gsap.fromTo(nasaRef.current, {
                y: yOffset,
            }, {
                y: `0px`,
            })
        })
    })

    return (
        <section
            id={'harvest'}
            ref={harvestRef}
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