import {JSX} from "react";

import {
    Header,
    MainSection,
    ProjectsIntegratedSection,
    CrowdsourcingSection,
    JoinSection,
    Footer,
    LeaderboardSection
} from "@/widgets";

import styles from "./page.module.css";

export default function Home(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main>
                <MainSection/>
                <ProjectsIntegratedSection/>
                <CrowdsourcingSection/>
                <LeaderboardSection/>
                <JoinSection/>
            </main>
            <Footer/>
        </div>
    );
}
