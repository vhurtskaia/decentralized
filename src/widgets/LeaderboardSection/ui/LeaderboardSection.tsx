import {JSX} from "react";

import {Button} from "@/shared/ui";
import {Table} from "@/widgets/LeaderboardSection/ui/Table";

import {data} from '@/widgets/LeaderboardSection/lib/data'

import styles from "./LeaderboardSection.module.css";
import {useSlideScroll} from "@/widgets/PageSlider/model/useSlideScroll";

export const LeaderboardSection = (): JSX.Element => {
    useSlideScroll({
        trigger: 'leaderboard',
        scrollTo: 'join',
        scrollToPrev: 'leaderboard'
    });
    return (
        <section
            id={'leaderboard'}
            className={styles.section}>
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