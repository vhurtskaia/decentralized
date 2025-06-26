import {Button} from "@/shared/ui";
import {JSX} from "react";

import styles from "./CrowdsourcingSection.module.css";

export const CrowdsourcingSection = () : JSX.Element => {
    return (
        <section className={styles.section}>
            <h2>Crowdsourcing our collective intelligence to build the best AI</h2>

            <p>
                Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
                <br/>
                <br/>
                Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
            </p>

            <Button bg size={'big'}>
                Use The Cutting Edge AI
            </Button>
        </section>
    );
};