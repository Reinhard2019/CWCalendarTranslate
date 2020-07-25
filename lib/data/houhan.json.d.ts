interface Dynasty {
    slug: string;
    name: string;
    emperors: Emperor[];
}
interface Emperor {
    slug: string;
    name: string;
    miaoname: string;
    emperorReigns: EmperorReign[];
}
interface EmperorReign {
    slug: string;
    name: string;
    startyear: number;
    fullname: string;
    yearcount: number;
    startWesternyear: number;
    ganzhiFirstyear: number;
    years?: Month[][];
}
interface Month {
    name: string;
    slug: string;
    daycount: number;
    firstdayGanzhi: number;
    ganzhi: number;
}
declare const data: Dynasty[];
export default data;
