import {JSX} from "react";

import styles from "./LeaderboardSection.module.css";
import {TData} from "@/widgets/LeaderboardSection/lib/data";
import {Ranking} from "@/shared/ui";

interface TableProps {
    data: TData[];
}

export const Table = ({data}: TableProps): JSX.Element => {
    return (
        <div className={styles.table}>
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

            {data?.map((item: TData, index) => {
                return (
                    <div key={index}>
                        <div><Ranking status={item.status}/></div>
                        <div>{index + 1}</div>
                        <div>{item.modelName}</div>
                        <div>{item.average}</div>
                        <div>{item.ARC}</div>
                        <div>{item.hellaSwag}</div>
                        <div>{item.MMLU}</div>
                        <div>{item.truthfulQA}</div>
                        <div>{item.winogrande}</div>
                        <div>{item.GSM8K}</div>
                        <div>{item.usage}</div>
                    </div>
                )
            })}
        </div>
    );
};