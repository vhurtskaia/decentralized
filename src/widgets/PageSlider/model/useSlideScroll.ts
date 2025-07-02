"use client";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

interface IUseSlideScroll {
    trigger?: string;
    scrollTo?: string;
    scrollToPrev?: string;
}

export const useSlideScroll = ({trigger, scrollTo, scrollToPrev}: IUseSlideScroll) => {
    const scrollToSection = (targetId: string) => {
        const targetEl = document.querySelector(targetId);

        if (!targetEl || gsap.isTweening(window)) return;

        gsap.to(window, {
            duration: 0.5,
            ease: "power1.out",
            scrollTo: {
                y: targetEl,
                autoKill: true,
            },
        });
    }


    useGSAP(() => {
        const start = trigger === 'header' ? 'top top' : "80px top"

        ScrollTrigger.create({
            trigger: `#${trigger}`,
            start: start,
            end: "+=80% top",
            fastScrollEnd: true,
            onUpdate: self => self.isActive && self.direction === 1 ? scrollToSection(`#${scrollTo}`) : scrollToSection(`#${scrollToPrev}`),
        });
    })
}