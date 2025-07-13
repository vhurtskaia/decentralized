"use client";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {useEffect, useState} from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

interface IUseSlideScroll {
    trigger?: string;
    scrollTo?: string;
    scrollToPrev?: string;
}

export const useSlideScroll = ({trigger, scrollTo, scrollToPrev}: IUseSlideScroll) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 767);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let isScrolling = false;

    const scrollToSection = (targetId: string) => {
        const targetEl = document.querySelector(targetId);

        if (typeof window === 'undefined' || isScrolling || !targetEl || isMobile) return;

        isScrolling = true;

        gsap.to(window, {
            duration: 0.5,
            ease: "power1.out",
            scrollTo: {
                y: targetEl,
                autoKill: false,
            },
            onComplete: () => {
                isScrolling = false;
            }
        });
    };

    let lastDirection: number | null = null;

    useGSAP(() => {
        if (isMobile) return;

        const start = trigger === 'header' ? 'top top' : "80px top";

        ScrollTrigger.create({
            trigger: `#${trigger}`,
            start,
            end: "+=80% top",
            onUpdate: self => {
                if (self.direction !== lastDirection) {
                    lastDirection = self.direction;

                    if (self.isActive && self.direction === 1) {
                        scrollToSection(`#${scrollTo}`);
                    } else if (self.isActive && self.direction === -1) {
                        scrollToSection(`#${scrollToPrev}`);
                    }
                }
            },
        });
    }, [isMobile]);
}