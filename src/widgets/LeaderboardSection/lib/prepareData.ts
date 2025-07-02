import { TData } from "../lib/data";

export const getVisibleData = (data: TData[], showMore: boolean): TData[] => {
    return !showMore ? data.slice(8, 16) : data.slice(0, 8);
};