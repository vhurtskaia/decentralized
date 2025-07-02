'use client'

import React, {JSX, useState} from "react";

import {TData} from "@/widgets/LeaderboardSection/lib/data";
import {ShowMore} from "@/widgets/LeaderboardSection/ui/ShowMore";
import {getVisibleData} from "@/widgets/LeaderboardSection/lib/prepareData";
import {Row} from "@/widgets/LeaderboardSection/ui/Row";

import styles from "./LeaderboardSection.module.css";

interface TableProps {
    data: TData[];
}

export const Table = ({data}: TableProps): JSX.Element => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const visibleData = getVisibleData(data, showMore);

    return (
        <>
            <div className={`${styles.table} ${showMore ? styles.show : ''}`}>
                <div className={styles.table__head}>
                    <div></div>
                    <div>#</div>
                    <div>Model Name</div>
                    <div>Average</div>
                    <div>ARC</div>
                    <div>HellaSwag</div>
                    <div>MMLU</div>
                    <div>TruthfulQA</div>
                    <div>Winogrande</div>
                    <div>GSM8K</div>
                    <div>Usage</div>
                </div>

                {visibleData.map((item, index) => (
                    <Row key={index} item={item} index={index} showMore={showMore} />
                ))}

            </div>

            <ShowMore state={showMore} action={() => setShowMore(!showMore)} />
        </>
    );
};