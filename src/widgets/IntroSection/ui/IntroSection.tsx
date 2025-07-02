'use client'

import Image from "next/image";
import React from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import {Button} from "@/shared/ui";
import {useSlideScroll} from "@/widgets/PageSlider/model/useSlideScroll";

import styles from "./IntroSection.module.css";

export const IntroSection = () => {
    useSlideScroll({
        trigger: 'intro',
        scrollTo: 'projects',
        scrollToPrev: 'header'
    });

    useGSAP(() => {
        // parallax for orange blub
        ScrollTrigger.create({
            trigger: "#intro",
            start: "top top",
            end: "+=290% top",
            scrub: true,
            animation:
                gsap.timeline()
                    .to("#decor-blue", {
                        ease: "none",
                        top: "230vh",
                        rotate: "30deg",
                    })
                    .to("#decor-orange",{
                        ease: "none",
                        bottom: "-200vh",
                    }, "<")
        });

        ScrollTrigger.create({
            trigger: "#intro",
            start: "-100px top",
            end: "+=290% top",
            scrub: true,
            animation: gsap.to("#decor-planet", {
                ease: "none",
                top: "230vh",
            })
        });

    })

    return (
        <section id={'intro'}>
            <h1 id={'intro-h1'} className={styles.title}>A new economic primitive for funding decentralized AI</h1>
            <p>We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>

            <div className={styles.buttons}>
                <Button bg size={'big'}>
                    Buy Salt AI
                </Button>

                <Button size={'big'}>
                    Try Now
                </Button>
            </div>

            <div className={styles.stats}>
                <div className={`stats__item ${styles.stats__block}`}>
                    <p className={styles.stats__title}>1,873</p>
                    <p>LLM models</p>
                </div>
                <div className={`stats__item ${styles.stats__block}`}>
                    <p className={styles.stats__title}>$326,734</p>
                    <p>Paid to data scientists</p>
                </div>
                <div className={`stats__item ${styles.stats__block}`}>
                    <p className={styles.stats__title}>6,557</p>
                    <p>Developers</p>
                </div>
            </div>

            <Image
                id={'decor-blue'}
                src={'/images/widgets/IntroSection/BlueDecoration.svg'}
                className={styles.decoration__blue}
                height={504}
                width={796}
                alt={'Blue Decoration'}
            />

            <Image
                id={'decor-orange'}
                src={'/images/widgets/IntroSection/OrangeDecoration.svg'}
                className={styles.decoration__orange}
                height={504}
                width={796}
                alt={'Orange Decoration'}
            />

            <Image
                id={'decor-planet'}
                src={'/images/widgets/IntroSection/planet.webp'}
                className={styles.planet}
                height={1016}
                width={1016}
                priority={true}
                alt={'Planet Decoration'}
            />
        </section>
    );
};