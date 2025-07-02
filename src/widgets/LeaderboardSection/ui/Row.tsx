import { TData } from "../lib/data";
import { Ranking } from "@/shared/ui";

interface RowProps {
    item: TData;
    index: number;
    showMore: boolean;
}

export const Row = ({ item, index, showMore }: RowProps) => {
    return (
        <div>
            <div><Ranking status={item.status} /></div>
            <div>{!showMore ? index + 1 : index + 9}</div>
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
    );
};