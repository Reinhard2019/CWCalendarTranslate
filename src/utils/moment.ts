import moment, { DurationInputArg1, DurationInputArg2, Moment } from 'moment';

// console.log(moment);

declare module 'moment' {
  export interface Moment {
    _is29Day?: boolean; // 存储的是 28 号，但实际是 29 号，因为儒略历在前 45 年和前 9 年每三年一闰，与格里高利历（公历）不符。
  }
}

moment.prototype.subtract = function (subtract: (
  amount?: DurationInputArg1,
  unit?: DurationInputArg2,
) => Moment) {
  return function (
    amount?: DurationInputArg1,
    unit?: DurationInputArg2,
  ) {
    if (this._is29Day) {
      this.add(1, 'd');
    }

    const cloneThis = moment(this);
    const result: Moment = subtract.call(this, amount, unit);

    if (this._is29Day) {
      return result;
    }

    // 需要去除掉的日期列表
    const removeDays = [
      '0000-02-29',
      '-0004-02-29',
      '-0012-02-29',
      '-0016-02-29',
      '-0024-02-29',
      '-0028-02-29',
      '-0036-02-29',
      '-0040-02-29',
    ];
    for (let i in removeDays) {
      const isBetween = moment(removeDays[i]).isBetween(result, cloneThis, 'd', '[]');
      if (isBetween) {
        return subtract.call(result, 1, 'd');
      }
    }

    // 儒略历在前 45 年和前 9 年每三年一闰，以下是儒略历中是闰年，但在格里高利历（公历）不是闰年的年份列表
    const leapYearList = [
      '-0011-02-28',
      '-0014-02-28',
      '-0017-02-28',
      '-0023-02-28',
      '-0026-02-28',
      '-0029-02-28',
      '-0035-02-28',
      '-0038-02-28',
      '-0041-02-28',
    ];
    if (leapYearList.includes(result.format('YYYY-MM-DD'))) {
      result._is29Day = true;
      return result;
    }
    for (let i in leapYearList) {
      const isBetween = moment(leapYearList[i]).isBetween(result, cloneThis, 'd');
      if (isBetween) {
        return result.add(1, 'd');
      }
    }

    return result;
  };
}(moment.prototype.subtract);

type getYear = () => number;
type setYear = (y: number) => Moment;
// 获取公元前的年数，需要减去 1
moment.prototype.year = function (year: getYear | setYear) {
  return function (y?: number) {
    const thisYear = year.bind(this)
    if (y) {
      return thisYear(y);
    }

    const result = thisYear();

    if (result > 0) {
      return result;
    }

    return result - 1;
  }
}(moment.prototype.year);

type getDay = () => number;
type setDay = (d: number) => Moment;
// 获取公元前的年数，需要减去 1
moment.prototype.day = function (day: getDay | setDay) {
  return function (d?: number) {
    const thisDay = day.bind(this)
    if (d) {
      return thisDay(d);
    }

    const result = thisDay();

    if (this._is29Day && result === 28) {
      return 29;
    }

    return result;
  }
}(moment.prototype.day);

export default moment;
