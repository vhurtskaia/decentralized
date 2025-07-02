import React, {JSX} from "react";

import {
    IntroSection,
    ProjectsIntegratedSection,
    CrowdsourcingSection,
    LeaderboardSection,
    JoinSection,
    HarvestSection,
} from "@/widgets";

export const PageSlider = (): JSX.Element => {
    return (
        <main>
            <IntroSection/>
            <ProjectsIntegratedSection/>
            <CrowdsourcingSection/>
            <LeaderboardSection/>
            <JoinSection/>
            <HarvestSection/>
        </main>
    );
};