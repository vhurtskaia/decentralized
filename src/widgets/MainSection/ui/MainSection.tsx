import Image from "next/image";

import {Button} from "@/shared/ui";
import {JSX} from "react";

import styles from "./MainSection.module.css";

export const MainSection = () : JSX.Element => {
    return (
        <>
            {/*<Image*/}
            {/*    src={'/images/widgets/ProjectsIntegratedSection/planet.jpg'}*/}
            {/*    className={styles.planet}*/}
            {/*    height={1016}*/}
            {/*    width={1016}*/}
            {/*    alt={'Planet Decoration'}*/}
            {/*/>*/}

            <section className={styles.section}>
                <h1>A new economic primitive for funding decentralized AI</h1>
                <p>We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>

                <div className={styles.buttons}>
                    <Button bg size={'big'}>
                        Buy Salt AI
                    </Button>

                    <Button size={'big'}>
                        Try Now
                    </Button>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stats__block}>
                        <p className={styles.stats__title}>1,873</p>
                        <p>LLM models</p>
                    </div>
                    <div className={styles.stats__block}>
                        <p className={styles.stats__title}>$326,734</p>
                        <p>Paid to data scientists</p>
                    </div>
                    <div className={styles.stats__block}>
                        <p className={styles.stats__title}>6,557</p>
                        <p>Developers</p>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h2>LLM Leaderboard</h2>
                    <Button bg size={'big'}>
                        Submit your model
                    </Button>
                </div>
                <p>We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks.
                    The higher the score, the better the LLM.</p>
                <div>
                    here is a table
                </div>
            </section>

            <article>
                <p>Join our community and harvest $SALT</p>
            </article>

            <Image
                src={'/images/widgets/ProjectsIntegratedSection/BlueDecoration.svg'}
                className={styles.decoration__blue}
                height={504}
                width={796}
                alt={'Blue Decoration'}
            />

            <Image
                src={'/images/widgets/ProjectsIntegratedSection/OrangeDecoration.svg'}
                className={styles.decoration__orange}
                height={504}
                width={796}
                alt={'Orange Decoration'}
            />


        </>
    );
};