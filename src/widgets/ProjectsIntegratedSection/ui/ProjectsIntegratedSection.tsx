'use client'

import {JSX, useRef} from "react";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import {photos} from "@/widgets/ProjectsIntegratedSection/lib/photos";
import {Photo} from "@/widgets/ProjectsIntegratedSection/ui/Photo";
import {useSlideScroll} from "@/widgets/PageSlider";

import styles from "./ProjectsIntegratedSection.module.css"

export const ProjectsIntegratedSection = (): JSX.Element => {
    useSlideScroll({
        trigger: 'projects',
        scrollTo: 'crowdsourcing',
        scrollToPrev: 'projects'
    });

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            animation: gsap.fromTo("#photos", {
                x: "0",
                ease: "none",
            }, {
                x: "-420px",
                ease: "none",
            }),
        })
    });

    return (
        <section
            id={'projects'}
            ref={containerRef}
            className={styles.section}>
            <h2>Projects integrated into the Arrakis AI Ecosystem</h2>

            <div className={styles.photos}>
                <div id={'photos'} className={styles.photos__container}>
                    {photos.map((photo, i) => (
                        <Photo key={i} {...photo} />
                    ))}
                </div>
            </div>
        </section>
    );
};