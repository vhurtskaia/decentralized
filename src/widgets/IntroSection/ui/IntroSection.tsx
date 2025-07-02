'use client'

import {Button} from "@/shared/ui";

import styles from "./IntroSection.module.css";

import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {useSlideScroll} from "@/widgets/PageSlider/model/useSlideScroll";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export const IntroSection = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useSlideScroll({
        trigger: 'intro',
        scrollTo: 'projects',
        scrollToPrev: 'intro'
    });

    useGSAP(() => {
        // main animation between top and the bottom of header
        const el = document.querySelector('.section');

        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
                toggleActions: "play pause play pause",
                start: "top top",
                end: "bottom top",
            }
        });

        if (el) {
            mainTl
                .to(window, {
                    ease: "power2.inOut",
                    scrollTo: {
                        y: el,
                        offsetY: -94,
                        autoKill: true,
                    },
                })
                .to(".decor__blue", {
                    x: 30,
                    ease: "power2.inOut",
                    rotate: "32deg",
                }, "<")
                .to(titleRef.current, {
                    background: 'var(--gradient-heading)',
                }, "<")
                .to('.stats__item', {
                    y: 0,
                    opacity: 1,
                    stagger: {each: 0.1,},
                });
        }
    });

    useGSAP(() => {
        // parallax for orange blub
        ScrollTrigger.create({
            trigger: "#intro",
            start: "80px top",
            end: "+=290% top",
            scrub: true,
            animation:
                gsap.timeline()
                    .fromTo(".decor__orange", {
                        ease: "none",
                        top: "64vh",
                        left: "-10%",
                        rotate: "-15deg",
                    }, {
                        ease: "none",
                        top: "250vh",
                        left: "10%",
                        rotate: "32deg",
                    })
        });
    })

    return (
        <section
            id={'intro'}
            className={`section ${styles.section}`}>

            <h1 className={'h1'} ref={titleRef}>A new economic primitive for funding decentralized AI</h1>
            <p>We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>

            <div className={styles.buttons}>
                <Button bg size={'big'}>
                    Buy Salt AI
                </Button>

                <Button ref={buttonRef} size={'big'}>
                    Try Now
                </Button>
            </div>

            <div ref={statsRef} className={styles.stats}>
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
        </section>
    );
};