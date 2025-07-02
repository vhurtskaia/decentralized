"use client"

import Image from "next/image";
import React, {JSX, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import {Button} from "@/shared/ui";
import {useSlideScroll} from "@/widgets/PageSlider/model/useSlideScroll";

import styles from "./CrowdsourcingSection.module.css";

export const CrowdsourcingSection = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    useSlideScroll({
        trigger: 'crowdsourcing',
        scrollTo: 'leaderboard',
        scrollToPrev: 'crowdsourcing'
    });

    useGSAP(() => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: '30px bottom',
            end: 'bottom bottom',
            once: true,
            animation:
                gsap.timeline()
                    .set("#star", {
                        x: -viewportWidth - 300,
                        y: -viewportHeight / 2,
                        scale: 0.5,
                    })
                    .to("#star", {
                        x: viewportWidth + 300,
                        y: viewportHeight + 200,
                        duration: 1,
                        ease: "power1.out",
                        delay: 0.2
                    })
        })
    });
    return (
        <section
            id={'crowdsourcing'}
            ref={containerRef}
            className={styles.section}>
            <h2>Crowdsourcing our collective intelligence to build the best AI</h2>

            <p>
                Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
                <br/>
                <br/>
                Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI.
                We run competitions between AI models to find and reward the best AI models. As a result, our users will
                be able to access the latest cutting edge AI models.
            </p>

            <Button bg size={'big'}>
                Use The Cutting Edge AI
            </Button>

            <Image
                src={'/images/widgets/CrowdsourcingSection/star.webp'}
                id={'star'}
                className={styles.star}
                width={262}
                height={180}
                alt={'Star Decoration'}
            />
        </section>
    );
};