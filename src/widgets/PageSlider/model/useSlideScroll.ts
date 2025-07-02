"use client";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

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
            scrollTo: {
                y: targetEl,
                autoKill: true,
            },
            duration: 0.5,
            ease: "power2.inOut",
        });
    }

    useGSAP(() => {
        const start = trigger === 'intro' ? '120px top' : "80px top"

        ScrollTrigger.create({
            trigger: `#${trigger}`,
            start: start,
            end: "+=75% top",
            fastScrollEnd: true,
            onUpdate: self => self.isActive && self.direction === 1 ? scrollToSection(`#${scrollTo}`) : scrollToSection(`#${scrollToPrev}`),
        });

        ScrollSmoother.create({
            smooth: 0,
            speed: 1,
            effects: true
        });
    });
};