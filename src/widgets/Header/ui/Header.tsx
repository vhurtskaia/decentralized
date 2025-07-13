'use client'

import {JSX} from "react";
import {Button} from "@/shared/ui";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useSlideScroll} from "@/widgets/PageSlider";

import styles from './Header.module.css'

export const Header = (): JSX.Element => {
    useSlideScroll({
        trigger: 'header',
        scrollTo: 'intro',
        scrollToPrev: 'header'
    });

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#header",
            start: "top top",
            end: "bottom top",
            animation: gsap.timeline()
                .to("#decor-blue", {
                    ease: "none",
                    left: "30%",
                    rotate: "10deg",
                })
                .to("#decor-orange", {
                    ease: "none",
                    bottom: "-200px",
                    left: "200px",
                    rotate: "32deg",
                }, "<") // the animation starts immediately after previous
                .to("#intro-h1", {
                    background: 'var(--gradient-heading)',
                }, "<")
                .to('.stats__item', {
                    y: 0,
                    opacity: 1,
                    stagger: {each: 0.1,},
                })
        });
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