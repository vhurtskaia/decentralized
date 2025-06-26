import Image from "next/image";

import {Button} from "@/shared/ui";
import {JSX} from "react";

import styles from "./MainSection.module.css";

export const MainSection = () : JSX.Element => {
    return (
        <section className={styles.mainSection}>
                <h1>A new economic primitive for funding decentralized AI</h1>
                <p className={styles.description}>
                    We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
                </p>

                <div className={styles.buttons}>
                    <Button bg size={'big'}>
                        Buy Salt AI
                    </Button>

                    <Button size={'big'}>
                        Try Now
                    </Button>

                </div>

                <div className={styles.stats}>
                    <div className={styles.statsBlock}>
                        <p className={styles.statsTitle}>1,873</p>
                        <p className={styles.statsText}>LLM models</p>
                    </div>
                    <div className={styles.statsBlock}>
                        <p className={styles.statsTitle}>$326,734</p>
                        <p className={styles.statsText}>Paid to data scientists</p>
                    </div>
                    <div className={styles.statsBlock}>
                        <p className={styles.statsTitle}>6,557</p>
                        <p className={styles.statsText}>Developers</p>
                    </div>
                </div>
            </section>
    );
};