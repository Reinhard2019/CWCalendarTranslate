import { Emperor, ChineseEraName, Month, StemBranch } from './types';
import { Moment } from 'moment';
export declare type ChineseCalendarDate = [Emperor, ChineseEraName | undefined, number? /** year */, Month? /** month */, number? /** day */];
declare function getWesternCalendarDate(date: ChineseCalendarDate): string;
declare function getWesternCalendarDate2(date?: [string, number? /** year */, Month? /** month */, StemBranch? /** day */]): Moment;
declare const _default: {
    getWesternCalendarDate: typeof getWesternCalendarDate;
    getWesternCalendarDate2: typeof getWesternCalendarDate2;
    chronology: import("./types").Chronology[];
};
export default _default;
