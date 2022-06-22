import { Moment } from "moment"

export const getFormatDateToString = (ms: number) => {
    return new Date(ms).toISOString().slice(0, 10);
}

export const getFormatDateFromMomentToNumber = (date: Moment) => {
    return new Date(date.format()).getTime();
}