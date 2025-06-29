import {JSX} from "react";

import {Button} from "@/shared/ui";
import {Table} from "@/widgets/LeaderboardSection/ui/Table";

import {data} from '@/widgets/LeaderboardSection/lib/data'

import styles from "./LeaderboardSection.module.css";

export const LeaderboardSection = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h2>LLM Leaderboard</h2>

                <Button bg size={'big'}>
                    Submit your model
                </Button>
            </div>

            <p>We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks.
                The higher the score, the better the LLM.</p>

            <Table data={data}/>
        </section>
    );
};