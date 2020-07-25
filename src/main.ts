import moment from './utils/moment';
import chronology, { endDayStr } from './data/chronology.json';
import data from './data/houhan.json';
import { Emperor, ChineseEraName, Month, StemBranch } from './types';
import stemBranch from './data/stemBranch.json';
import { getBetweenDays } from './utils/date';
import { Moment } from 'moment';

export type ChineseCalendarDate = [
  Emperor,
  ChineseEraName | undefined,
  number? /** year */,
  Month? /** month */,
  number? /** day */,
];

function getWesternCalendarDate(date: ChineseCalendarDate): string {
  const [emperor, chineseEraName, year = 1, month = 1, day = 1] = date;

  let betweenDays: number = 0;
  const chronologyReverse = [...chronology].reverse();
  for (let i = 0; i < chronologyReverse.length; i++) {
    const yearItem = chronologyReverse[i];
    const monthsReverse = [...yearItem.months].reverse();

    const isStartYear =
      yearItem.emperor === emperor &&
      (!yearItem.chineseEraName ||
        yearItem.chineseEraName === chineseEraName) &&
      yearItem.year === year;

    for (let j = 0; j < monthsReverse.length; j++) {
      const monthItem = monthsReverse[j];
      betweenDays += monthItem.days;

      if (isStartYear && monthItem.month === month) {
        betweenDays = betweenDays - day + 1;
        break;
      }
    }

    if (isStartYear) {
      break;
    }
  }
  return moment(endDayStr).subtract(betweenDays, 'd').format('YYYY-MM-DD');
}

// 通过具体天数获得年月日
// 从建武元年第一天算起，距离公元元年已经过去的天数。
const passedDays = 9325;
// 每四年的天数
const fourYearDays = 4 * 365 + 1;
/**
 * 
 * @param days 距离起始天数的天数
 * @return [Moment]
 */
function getWesternDate(days: number): Moment {
  // 因为公元 4 年不置闰，所以+1
  const totalDays = passedDays + days + 1;
  let years = Math.floor(totalDays / fourYearDays) * 4;
  years += Math.floor(totalDays % fourYearDays / 365);
  let remainingDays = totalDays % fourYearDays % 365;
  // console.log(years, remainingDays)

  const isLeap = years % 4 === 0;
  // 平年中每个月的天数
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < months.length; i++) {
    let monthDays = months[i];
    if (isLeap && monthDays === 28) {
      monthDays++;
    }

    remainingDays -= monthDays;
    if (remainingDays <= 0) {
      return moment({
        year: years,
        month: i,
        day: monthDays + remainingDays,
      }) 
    }
  }
}

// 将数字月份转化为字符串，负数代表闰月。
function getMonthSlug(m) {
  if (m < 0) {
    return 'l' + Math.abs(m);
  }

  return 'n' + m;
}

function getWesternCalendarDate2(
  date?: [
    string,
    number? /** year */,
    Month? /** month */,
    StemBranch? /** day */,
  ],
): Moment {
  const [emperorReign, year, month, day] = date;
  let total = 1;
  for (const dynasty of data) {
    for (const e of dynasty.emperors) {
      for (const r of e.emperorReigns) {
        const years = r.years || [];
        for (let i = 0; i < years.length; i++) {
          const yearItem = years[i];
          for (const m of yearItem) {
            if (r.fullname.includes(emperorReign) && year === i + 1 && getMonthSlug(month) === m.slug) {
              total += getBetweenDays(stemBranch[m.firstdayGanzhi] as StemBranch, day);
              // console.log(total, date, stemBranch[m.firstdayGanzhi]);
              return getWesternDate(total);
            }
            total += m.daycount;
          }
        }
      }
    }
  }
  // console.log(total, emperorReign);
}

export default { getWesternCalendarDate, getWesternCalendarDate2, chronology };
