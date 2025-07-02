import {JSX, useRef} from "react";

import styles from "./ProjectsIntegratedSection.module.css"
import {photos} from "@/widgets/ProjectsIntegratedSection/lib/photos";
import {Photo} from "@/widgets/ProjectsIntegratedSection/ui/Photo";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {useSlideScroll} from "@/widgets/PageSlider";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

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