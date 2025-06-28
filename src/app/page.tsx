import {JSX} from "react";

import {
    Header,
    IntroSection,
    ProjectsIntegratedSection,
    CrowdsourcingSection,
    JoinSection,
    Footer,
    LeaderboardSection,
    HarvestSection,
} from "@/widgets";

import styles from "./page.module.css";

export default function Home(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                <IntroSection/>
                <ProjectsIntegratedSection/>
                <CrowdsourcingSection/>
                <LeaderboardSection/>
                <JoinSection/>
                <HarvestSection/>
            </main>
            <Footer/>
        </div>
    );
}
