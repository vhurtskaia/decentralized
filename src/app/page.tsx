'use client'

import {JSX} from "react";

import {
    Header,
    Footer,
} from "@/widgets";

import {PageSlider} from "@/widgets/PageSlider";

export default function Home(): JSX.Element {
    return (
        <>
            <Header/>
            <PageSlider/>
            <Footer/>
        </>
    );
}