import { Chronology, StemBranch } from "../types";
import { getBetweenDays } from "../utils/date";

const data: Chronology[] = [
  {
    wcYear: -206,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '乙未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 2,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 3,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 4,
        firstDayStemBranch: '甲申',
      },
      {
        month: 5,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 6,
        firstDayStemBranch: '癸未',
      },
      {
        month: 7,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 8,
        firstDayStemBranch: '壬午',
      },
      {
        month: 9,
        firstDayStemBranch: '壬子',
      },
      {
        month: 10,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 11,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 12,
        firstDayStemBranch: '庚辰',
      },
    ]
  },
  {
    wcYear: -205,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '丙申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 2,
        firstDayStemBranch: '己卯',
      },
      {
        month: 3,
        firstDayStemBranch: '己酉',
      },
      {
        month: 4,
        firstDayStemBranch: '己卯',
      },
      {
        month: 5,
        firstDayStemBranch: '戊申',
      },
      {
        month: 6,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 7,
        firstDayStemBranch: '丁未',
      },
      {
        month: 8,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 9,
        firstDayStemBranch: '丙午',
      },
      {
        month: -9,
        firstDayStemBranch: '丙子',
      },
      {
        month: 10,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 11,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 12,
        firstDayStemBranch: '甲辰',
      },
    ]
  },
  {
    wcYear: -204,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '丁酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 2,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 3,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 4,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 5,
        firstDayStemBranch: '壬申',
      },
      {
        month: 6,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 7,
        firstDayStemBranch: '辛未',
      },
      {
        month: 8,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 9,
        firstDayStemBranch: '庚午',
      },
      {
        month: 10,
        firstDayStemBranch: '庚子',
      },
      {
        month: 11,
        firstDayStemBranch: '己巳',
      },
      {
        month: 12,
        firstDayStemBranch: '己亥',
      },
    ]
  },
  {
    wcYear: -203,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '戊戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 2,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 3,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 4,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 5,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 6,
        firstDayStemBranch: '丙申',
      },
      {
        month: 7,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 8,
        firstDayStemBranch: '乙未',
      },
      {
        month: 9,
        firstDayStemBranch: '甲子',
      },
      {
        month: 10,
        firstDayStemBranch: '甲午',
      },
      {
        month: 11,
        firstDayStemBranch: '甲子',
      },
      {
        month: 12,
        firstDayStemBranch: '癸巳',
      },
    ]
  },
  {
    wcYear: -202,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '己亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 2,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 3,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 4,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 5,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 6,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 7,
        firstDayStemBranch: '庚申',
      },
      {
        month: 8,
        firstDayStemBranch: '己丑',
      },
      {
        month: 9,
        firstDayStemBranch: '己未',
      },
      {
        month: -9,
        firstDayStemBranch: '戊子',
      },
      {
        month: 10,
        firstDayStemBranch: '戊午',
      },
      {
        month: 11,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 12,
        firstDayStemBranch: '丁巳',
      },
    ]
  },
  {
    wcYear: -201,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '庚子',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 2,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 3,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 4,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 5,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 6,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 7,
        firstDayStemBranch: '甲申',
      },
      {
        month: 8,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 9,
        firstDayStemBranch: '癸未',
      },
      {
        month: 10,
        firstDayStemBranch: '壬子',
      },
      {
        month: 11,
        firstDayStemBranch: '壬午',
      },
      {
        month: 12,
        firstDayStemBranch: '辛亥',
      },
    ]
  },
  {
    wcYear: -200,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '辛丑',
    year: 7,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 2,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 3,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 4,
        firstDayStemBranch: '己酉',
      },
      {
        month: 5,
        firstDayStemBranch: '己卯',
      },
      {
        month: 6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 8,
        firstDayStemBranch: '戊申',
      },
      {
        month: 9,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 10,
        firstDayStemBranch: '丁未',
      },
      {
        month: 11,
        firstDayStemBranch: '丙子',
      },
      {
        month: 12,
        firstDayStemBranch: '丙午',
      },
    ]
  },
  {
    wcYear: -199,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '壬寅',
    year: 8,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 2,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 3,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 4,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 5,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 6,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 7,
        firstDayStemBranch: '壬申',
      },
      {
        month: 8,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 9,
        firstDayStemBranch: '辛未',
      },
      {
        month: -9,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 10,
        firstDayStemBranch: '辛未',
      },
      {
        month: 11,
        firstDayStemBranch: '庚子',
      },
      {
        month: 12,
        firstDayStemBranch: '庚午',
      },
    ]
  },
  {
    wcYear: -198,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '癸卯',
    year: 9,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己亥',
      },
      {
        month: 2,
        firstDayStemBranch: '己巳',
      },
      {
        month: 3,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 4,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 5,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 6,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 7,
        firstDayStemBranch: '丙申',
      },
      {
        month: 8,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 9,
        firstDayStemBranch: '乙未',
      },
      {
        month: 10,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 11,
        firstDayStemBranch: '甲午',
      },
      {
        month: 12,
        firstDayStemBranch: '甲子',
      },
    ]
  },
  {
    wcYear: -197,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '甲辰',
    year: 10,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 2,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 3,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 4,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 5,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 6,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 7,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 8,
        firstDayStemBranch: '庚申',
      },
      {
        month: 9,
        firstDayStemBranch: '庚寅',
      },
      {
        month: -9,
        firstDayStemBranch: '己未',
      },
      {
        month: 10,
        firstDayStemBranch: '己丑',
      },
      {
        month: 11,
        firstDayStemBranch: '戊午',
      },
      {
        month: 12,
        firstDayStemBranch: '戊子',
      },
    ]
  },
  {
    wcYear: -196,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '乙巳',
    year: 11,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 2,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 3,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 4,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 5,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 6,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 7,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 8,
        firstDayStemBranch: '甲申',
      },
      {
        month: 9,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 10,
        firstDayStemBranch: '癸未',
      },
      {
        month: 11,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 12,
        firstDayStemBranch: '壬午',
      },
    ]
  },
  {
    wcYear: -195,
    dynasty: '西汉',
    emperor: '高祖',
    stemBranch: '丙午',
    year: 12,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬子',
      },
      {
        month: 2,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 3,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 4,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 5,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 6,
        firstDayStemBranch: '己卯',
      },
      {
        month: 7,
        firstDayStemBranch: '己酉',
      },
      {
        month: 8,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 9,
        firstDayStemBranch: '戊申',
      },
      {
        month: 10,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 11,
        firstDayStemBranch: '丁未',
      },
      {
        month: 12,
        firstDayStemBranch: '丁丑',
      },
    ]
  },
  {
    wcYear: -194,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '丁未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙午',
      },
      {
        month: 2,
        firstDayStemBranch: '丙子',
      },
      {
        month: 3,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 4,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 5,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 6,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 7,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 8,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: -9,
        firstDayStemBranch: '壬申',
      },
      {
        month: 10,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 11,
        firstDayStemBranch: '辛未',
      },
      {
        month: 12,
        firstDayStemBranch: '庚子',
      },
    ]
  },
  {
    wcYear: -193,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '戊申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚午',
      },
      {
        month: 2,
        firstDayStemBranch: '庚子',
      },
      {
        month: 3,
        firstDayStemBranch: '己巳',
      },
      {
        month: 4,
        firstDayStemBranch: '己亥',
      },
      {
        month: 5,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 6,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 7,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 8,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 9,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 10,
        firstDayStemBranch: '丙申',
      },
      {
        month: 11,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 12,
        firstDayStemBranch: '乙未',
      },
    ]
  },
  {
    wcYear: -192,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '己酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲子',
      },
      {
        month: 2,
        firstDayStemBranch: '甲午',
      },
      {
        month: 3,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 4,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 5,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 6,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 7,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 8,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 9,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 10,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 11,
        firstDayStemBranch: '庚申',
      },
      {
        month: 12,
        firstDayStemBranch: '己丑',
      },
    ]
  },
  {
    wcYear: -191,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '庚戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己未',
      },
      {
        month: 2,
        firstDayStemBranch: '戊子',
      },
      {
        month: 3,
        firstDayStemBranch: '戊午',
      },
      {
        month: 4,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 5,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 6,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 7,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 8,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 9,
        firstDayStemBranch: '乙卯',
      },
      {
        month: -9,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 10,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 11,
        firstDayStemBranch: '甲申',
      },
      {
        month: 12,
        firstDayStemBranch: '癸丑',
      },
    ]
  },
  {
    wcYear: -190,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '辛亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸未',
      },
      {
        month: 2,
        firstDayStemBranch: '壬子',
      },
      {
        month: 3,
        firstDayStemBranch: '壬午',
      },
      {
        month: 4,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 5,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 6,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 7,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 8,
        firstDayStemBranch: '己酉',
      },
      {
        month: 9,
        firstDayStemBranch: '己卯',
      },
      {
        month: 10,
        firstDayStemBranch: '戊申',
      },
      {
        month: 11,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 12,
        firstDayStemBranch: '戊申',
      },
    ]
  },
  {
    wcYear: -189,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '壬子',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 2,
        firstDayStemBranch: '丁未',
      },
      {
        month: 3,
        firstDayStemBranch: '丙子',
      },
      {
        month: 4,
        firstDayStemBranch: '丙午',
      },
      {
        month: 5,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 6,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 7,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 8,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 9,
        firstDayStemBranch: '癸酉',
      },
      {
        month: -9,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 10,
        firstDayStemBranch: '壬申',
      },
      {
        month: 11,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 12,
        firstDayStemBranch: '辛未',
      },
    ]
  },
  {
    wcYear: -188,
    dynasty: '西汉',
    emperor: '惠帝',
    stemBranch: '癸丑',
    year: 7,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 2,
        firstDayStemBranch: '庚午',
      },
      {
        month: 3,
        firstDayStemBranch: '庚子',
      },
      {
        month: 4,
        firstDayStemBranch: '庚午',
      },
      {
        month: 5,
        firstDayStemBranch: '己亥',
      },
      {
        month: 6,
        firstDayStemBranch: '己巳',
      },
      {
        month: 7,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 8,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 9,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 10,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 11,
        firstDayStemBranch: '丙申',
      },
      {
        month: 12,
        firstDayStemBranch: '丙寅',
      },
    ]
  },
  {
    wcYear: -187,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '甲寅',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙未',
      },
      {
        month: 2,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 3,
        firstDayStemBranch: '甲午',
      },
      {
        month: 4,
        firstDayStemBranch: '甲子',
      },
      {
        month: 5,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 6,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 7,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 8,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 9,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 10,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 11,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 12,
        firstDayStemBranch: '庚申',
      },
    ]
  },
  {
    wcYear: -186,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '乙卯',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 2,
        firstDayStemBranch: '己未',
      },
      {
        month: 3,
        firstDayStemBranch: '己丑',
      },
      {
        month: 4,
        firstDayStemBranch: '戊午',
      },
      {
        month: 5,
        firstDayStemBranch: '戊子',
      },
      {
        month: 6,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 7,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 8,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 9,
        firstDayStemBranch: '丙戌',
      },
      {
        month: -9,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 10,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 11,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 12,
        firstDayStemBranch: '甲申',
      },
    ]
  },
  {
    wcYear: -185,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '丙辰',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 2,
        firstDayStemBranch: '癸未',
      },
      {
        month: 3,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 4,
        firstDayStemBranch: '壬午',
      },
      {
        month: 5,
        firstDayStemBranch: '壬子',
      },
      {
        month: 6,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 7,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 8,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 9,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 10,
        firstDayStemBranch: '己卯',
      },
      {
        month: 11,
        firstDayStemBranch: '己酉',
      },
      {
        month: 12,
        firstDayStemBranch: '戊寅',
      },
    ]
  },
  {
    wcYear: -184,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '丁巳',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊申',
      },
      {
        month: 2,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 3,
        firstDayStemBranch: '丁未',
      },
      {
        month: 4,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 5,
        firstDayStemBranch: '丙午',
      },
      {
        month: 6,
        firstDayStemBranch: '丙子',
      },
      {
        month: 7,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 8,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 9,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 10,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 11,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 12,
        firstDayStemBranch: '癸酉',
      },
    ]
  },
  {
    wcYear: -183,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '戊午',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 2,
        firstDayStemBranch: '壬申',
      },
      {
        month: 3,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 4,
        firstDayStemBranch: '辛未',
      },
      {
        month: 5,
        firstDayStemBranch: '庚子',
      },
      {
        month: 6,
        firstDayStemBranch: '庚午',
      },
      {
        month: 7,
        firstDayStemBranch: '庚子',
      },
      {
        month: 8,
        firstDayStemBranch: '己巳',
      },
      {
        month: 9,
        firstDayStemBranch: '己亥',
      },
      {
        month: -9,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 10,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 11,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 12,
        firstDayStemBranch: '丁酉',
      },
    ]
  },
  {
    wcYear: -182,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '己未',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 2,
        firstDayStemBranch: '丙申',
      },
      {
        month: 3,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 4,
        firstDayStemBranch: '乙未',
      },
      {
        month: 5,
        firstDayStemBranch: '甲子',
      },
      {
        month: 6,
        firstDayStemBranch: '甲午',
      },
      {
        month: 7,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 8,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 9,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 10,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 11,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 12,
        firstDayStemBranch: '辛卯',
      },
    ]
  },
  {
    wcYear: -181,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '庚申',
    year: 7,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 2,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 3,
        firstDayStemBranch: '庚申',
      },
      {
        month: 4,
        firstDayStemBranch: '己丑',
      },
      {
        month: 5,
        firstDayStemBranch: '己未',
      },
      {
        month: 6,
        firstDayStemBranch: '戊子',
      },
      {
        month: 7,
        firstDayStemBranch: '戊午',
      },
      {
        month: 8,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 9,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 10,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 11,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 12,
        firstDayStemBranch: '乙酉',
      },
    ]
  },
  {
    wcYear: -180,
    dynasty: '西汉',
    emperor: '高后',
    stemBranch: '辛酉',
    year: 8,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 2,
        firstDayStemBranch: '甲申',
      },
      {
        month: 3,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 4,
        firstDayStemBranch: '甲申',
      },
      {
        month: 5,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 6,
        firstDayStemBranch: '癸未',
      },
      {
        month: 7,
        firstDayStemBranch: '壬子',
      },
      {
        month: 8,
        firstDayStemBranch: '壬午',
      },
      {
        month: 9,
        firstDayStemBranch: '辛亥',
      },
      {
        month: -9,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 10,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 11,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 12,
        firstDayStemBranch: '己酉',
      },
    ]
  },
  {
    wcYear: -179,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '壬戌',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己卯',
      },
      {
        month: 2,
        firstDayStemBranch: '戊申',
      },
      {
        month: 3,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 4,
        firstDayStemBranch: '丁未',
      },
      {
        month: 5,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 6,
        firstDayStemBranch: '丁未',
      },
      {
        month: 7,
        firstDayStemBranch: '丙子',
      },
      {
        month: 8,
        firstDayStemBranch: '丙午',
      },
      {
        month: 9,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 10,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 11,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 12,
        firstDayStemBranch: '甲辰',
      },
    ]
  },
  {
    wcYear: -178,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '癸亥',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 2,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 3,
        firstDayStemBranch: '壬申',
      },
      {
        month: 4,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 5,
        firstDayStemBranch: '辛未',
      },
      {
        month: 6,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 7,
        firstDayStemBranch: '庚午',
      },
      {
        month: 8,
        firstDayStemBranch: '庚子',
      },
      {
        month: 9,
        firstDayStemBranch: '己巳',
      },
      {
        month: -9,
        firstDayStemBranch: '己亥',
      },
      {
        month: 10,
        firstDayStemBranch: '己巳',
      },
      {
        month: 11,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 12,
        firstDayStemBranch: '戊辰',
      },
    ]
  },
  {
    wcYear: -177,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '甲子',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 2,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 3,
        firstDayStemBranch: '丙申',
      },
      {
        month: 4,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 5,
        firstDayStemBranch: '乙未',
      },
      {
        month: 6,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 7,
        firstDayStemBranch: '甲午',
      },
      {
        month: 8,
        firstDayStemBranch: '甲子',
      },
      {
        month: 9,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 10,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 11,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 12,
        firstDayStemBranch: '壬戌',
      },
    ]
  },
  {
    wcYear: -176,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '乙丑',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 2,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 3,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 4,
        firstDayStemBranch: '庚申',
      },
      {
        month: 5,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 6,
        firstDayStemBranch: '己未',
      },
      {
        month: 7,
        firstDayStemBranch: '己丑',
      },
      {
        month: 8,
        firstDayStemBranch: '戊午',
      },
      {
        month: 9,
        firstDayStemBranch: '戊子',
      },
      {
        month: 10,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 11,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 12,
        firstDayStemBranch: '丙辰',
      },
    ]
  },
  {
    wcYear: -175,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '丙寅',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 2,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 3,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 4,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 5,
        firstDayStemBranch: '甲申',
      },
      {
        month: 6,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 7,
        firstDayStemBranch: '癸未',
      },
      {
        month: 8,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 9,
        firstDayStemBranch: '壬午',
      },
      {
        month: -9,
        firstDayStemBranch: '壬子',
      },
      {
        month: 10,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 11,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 12,
        firstDayStemBranch: '庚辰',
      },
    ]
  },
  {
    wcYear: -174,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '丁卯',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 2,
        firstDayStemBranch: '己卯',
      },
      {
        month: 3,
        firstDayStemBranch: '己酉',
      },
      {
        month: 4,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 5,
        firstDayStemBranch: '戊申',
      },
      {
        month: 6,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 7,
        firstDayStemBranch: '丁未',
      },
      {
        month: 8,
        firstDayStemBranch: '丙子',
      },
      {
        month: 9,
        firstDayStemBranch: '丙午',
      },
      {
        month: 10,
        firstDayStemBranch: '丙子',
      },
      {
        month: 11,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 12,
        firstDayStemBranch: '乙亥',
      },
    ]
  },
  {
    wcYear: -173,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '戊辰',
    year: 7,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 2,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 3,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 4,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 5,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 6,
        firstDayStemBranch: '壬申',
      },
      {
        month: 7,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 8,
        firstDayStemBranch: '辛未',
      },
      {
        month: 9,
        firstDayStemBranch: '庚子',
      },
      {
        month: 10,
        firstDayStemBranch: '庚午',
      },
      {
        month: 11,
        firstDayStemBranch: '己亥',
      },
      {
        month: 12,
        firstDayStemBranch: '己巳',
      },
    ]
  },
  {
    wcYear: -172,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '己巳',
    year: 8,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己亥',
      },
      {
        month: 2,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 3,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 4,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 5,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 6,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 7,
        firstDayStemBranch: '丙申',
      },
      {
        month: 8,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 9,
        firstDayStemBranch: '乙未',
      },
      {
        month: -9,
        firstDayStemBranch: '甲子',
      },
      {
        month: 10,
        firstDayStemBranch: '甲午',
      },
      {
        month: 11,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 12,
        firstDayStemBranch: '癸巳',
      },
    ]
  },
  {
    wcYear: -171,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '庚午',
    year: 9,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 2,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 3,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 4,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 5,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 6,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 7,
        firstDayStemBranch: '庚申',
      },
      {
        month: 8,
        firstDayStemBranch: '己丑',
      },
      {
        month: 9,
        firstDayStemBranch: '己未',
      },
      {
        month: 10,
        firstDayStemBranch: '戊子',
      },
      {
        month: 11,
        firstDayStemBranch: '戊午',
      },
      {
        month: 12,
        firstDayStemBranch: '丁亥',
      },
    ]
  },
  {
    wcYear: -170,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '辛未',
    year: 10,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 2,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 3,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 4,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 5,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 6,
        firstDayStemBranch: '甲申',
      },
      {
        month: 7,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 8,
        firstDayStemBranch: '癸未',
      },
      {
        month: 9,
        firstDayStemBranch: '癸丑',
      },
      {
        month: -9,
        firstDayStemBranch: '癸未',
      },
      {
        month: 10,
        firstDayStemBranch: '壬子',
      },
      {
        month: 11,
        firstDayStemBranch: '壬午',
      },
      {
        month: 12,
        firstDayStemBranch: '辛亥',
      },
    ]
  },
  {
    wcYear: -169,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '壬申',
    year: 11,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 2,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 3,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 4,
        firstDayStemBranch: '己酉',
      },
      {
        month: 5,
        firstDayStemBranch: '己卯',
      },
      {
        month: 6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 8,
        firstDayStemBranch: '丁未',
      },
      {
        month: 9,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 10,
        firstDayStemBranch: '丙午',
      },
      {
        month: 11,
        firstDayStemBranch: '丙子',
      },
      {
        month: 12,
        firstDayStemBranch: '丙午',
      },
    ]
  },
  {
    wcYear: -168,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '癸酉',
    year: 12,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 2,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 3,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 4,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 5,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 6,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 7,
        firstDayStemBranch: '壬申',
      },
      {
        month: 8,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 9,
        firstDayStemBranch: '辛未',
      },
      {
        month: 10,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 11,
        firstDayStemBranch: '庚午',
      },
      {
        month: 12,
        firstDayStemBranch: '庚子',
      },
    ]
  },
  {
    wcYear: -167,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '甲戌',
    year: 13,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己巳',
      },
      {
        month: 2,
        firstDayStemBranch: '己亥',
      },
      {
        month: 3,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 4,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 5,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 6,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 7,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 8,
        firstDayStemBranch: '丙申',
      },
      {
        month: 9,
        firstDayStemBranch: '丙寅',
      },
      {
        month: -9,
        firstDayStemBranch: '乙未',
      },
      {
        month: 10,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 11,
        firstDayStemBranch: '甲午',
      },
      {
        month: 12,
        firstDayStemBranch: '甲子',
      },
    ]
  },
  {
    wcYear: -166,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '乙亥',
    year: 14,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 2,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 3,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 4,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 5,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 6,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 7,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 8,
        firstDayStemBranch: '庚申',
      },
      {
        month: 9,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 10,
        firstDayStemBranch: '己未',
      },
      {
        month: 11,
        firstDayStemBranch: '己丑',
      },
      {
        month: 12,
        firstDayStemBranch: '戊午',
      },
    ]
  },
  {
    wcYear: -165,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '丙子',
    year: 15,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊子',
      },
      {
        month: 2,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 3,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 4,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 5,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 6,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 7,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 8,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 9,
        firstDayStemBranch: '甲申',
      },
      {
        month: 10,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 11,
        firstDayStemBranch: '癸未',
      },
      {
        month: 12,
        firstDayStemBranch: '癸丑',
      },
    ]
  },
  {
    wcYear: -164,
    dynasty: '西汉',
    emperor: '文帝',
    stemBranch: '丁丑',
    year: 16,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬午',
      },
      {
        month: 2,
        firstDayStemBranch: '壬子',
      },
      {
        month: 3,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 4,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 5,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 6,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '己酉',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: -9,
        firstDayStemBranch: '戊申',
      },
      {
        month: 10,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 11,
        firstDayStemBranch: '丁未',
      },
      {
        month: 12,
        firstDayStemBranch: '丙子',
      },
    ]
  },
  {
    wcYear: -163,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '戊寅',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙午',
      },
      {
        month: 2,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 3,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 4,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 5,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 6,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 7,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 8,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 10,
        firstDayStemBranch: '壬申',
      },
      {
        month: 11,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 12,
        firstDayStemBranch: '辛未',
      },
    ]
  },
  {
    wcYear: -162,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '己卯',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚子',
      },
      {
        month: 2,
        firstDayStemBranch: '庚午',
      },
      {
        month: 3,
        firstDayStemBranch: '己亥',
      },
      {
        month: 4,
        firstDayStemBranch: '己巳',
      },
      {
        month: 5,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 6,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 7,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 8,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 9,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 10,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 11,
        firstDayStemBranch: '丙申',
      },
      {
        month: 12,
        firstDayStemBranch: '乙丑',
      },
    ]
  },
  {
    wcYear: -161,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '庚辰',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙未',
      },
      {
        month: 2,
        firstDayStemBranch: '甲子',
      },
      {
        month: 3,
        firstDayStemBranch: '甲午',
      },
      {
        month: 4,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 5,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 6,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 7,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 8,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 9,
        firstDayStemBranch: '辛卯',
      },
      {
        month: -9,
        firstDayStemBranch: '庚申',
      },
      {
        month: 10,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 11,
        firstDayStemBranch: '庚申',
      },
      {
        month: 12,
        firstDayStemBranch: '己丑',
      },
    ]
  },
  {
    wcYear: -160,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '辛巳',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己未',
      },
      {
        month: 2,
        firstDayStemBranch: '戊子',
      },
      {
        month: 3,
        firstDayStemBranch: '戊午',
      },
      {
        month: 4,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 5,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 6,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 7,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 8,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 9,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 10,
        firstDayStemBranch: '甲申',
      },
      {
        month: 11,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 12,
        firstDayStemBranch: '癸未',
      },
    ]
  },
  {
    wcYear: -159,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '壬午',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 2,
        firstDayStemBranch: '癸未',
      },
      {
        month: 3,
        firstDayStemBranch: '壬子',
      },
      {
        month: 4,
        firstDayStemBranch: '壬午',
      },
      {
        month: 5,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 6,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 7,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 8,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 9,
        firstDayStemBranch: '己酉',
      },
      {
        month: -9,
        firstDayStemBranch: '己卯',
      },
      {
        month: 10,
        firstDayStemBranch: '戊申',
      },
      {
        month: 11,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 12,
        firstDayStemBranch: '丁未',
      },
    ]
  },
  {
    wcYear: -158,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '癸未',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 2,
        firstDayStemBranch: '丙午',
      },
      {
        month: 3,
        firstDayStemBranch: '丙子',
      },
      {
        month: 4,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 5,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 6,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 7,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 8,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 9,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 10,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 11,
        firstDayStemBranch: '壬申',
      },
      {
        month: 12,
        firstDayStemBranch: '壬寅',
      },
    ]
  },
  {
    wcYear: -157,
    dynasty: '西汉',
    emperor: '文帝',
    chineseEraName: '后元',
    stemBranch: '甲申',
    year: 7,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛未',
      },
      {
        month: 2,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 3,
        firstDayStemBranch: '庚午',
      },
      {
        month: 4,
        firstDayStemBranch: '庚子',
      },
      {
        month: 5,
        firstDayStemBranch: '己巳',
      },
      {
        month: 6,
        firstDayStemBranch: '己亥',
      },
      {
        month: 7,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 8,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 9,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 10,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 11,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 12,
        firstDayStemBranch: '丙申',
      },
    ]
  },
  {
    wcYear: -156,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '乙酉',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 2,
        firstDayStemBranch: '乙未',
      },
      {
        month: 3,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 4,
        firstDayStemBranch: '甲午',
      },
      {
        month: 5,
        firstDayStemBranch: '甲子',
      },
      {
        month: 6,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 7,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 8,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 9,
        firstDayStemBranch: '壬戌',
      },
      {
        month: -9,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 10,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 11,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 12,
        firstDayStemBranch: '庚申',
      },
    ]
  },
  {
    wcYear: -155,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '丙戌',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 2,
        firstDayStemBranch: '己未',
      },
      {
        month: 3,
        firstDayStemBranch: '己丑',
      },
      {
        month: 4,
        firstDayStemBranch: '戊午',
      },
      {
        month: 5,
        firstDayStemBranch: '戊子',
      },
      {
        month: 6,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 7,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 8,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 9,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 10,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 11,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 12,
        firstDayStemBranch: '甲寅',
      },
    ]
  },
  {
    wcYear: -154,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '丁亥',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲申',
      },
      {
        month: 2,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 3,
        firstDayStemBranch: '癸未',
      },
      {
        month: 4,
        firstDayStemBranch: '壬子',
      },
      {
        month: 5,
        firstDayStemBranch: '壬午',
      },
      {
        month: 6,
        firstDayStemBranch: '壬子',
      },
      {
        month: 7,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 8,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 9,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 10,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 11,
        firstDayStemBranch: '己卯',
      },
      {
        month: 12,
        firstDayStemBranch: '己酉',
      },
    ]
  },
  {
    wcYear: -153,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '戊子',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 2,
        firstDayStemBranch: '戊申',
      },
      {
        month: 3,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 4,
        firstDayStemBranch: '丁未',
      },
      {
        month: 5,
        firstDayStemBranch: '丙子',
      },
      {
        month: 6,
        firstDayStemBranch: '丙午',
      },
      {
        month: 7,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 8,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 9,
        firstDayStemBranch: '乙亥',
      },
      {
        month: -9,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 10,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 11,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 12,
        firstDayStemBranch: '癸酉',
      },
    ]
  },
  {
    wcYear: -152,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '己丑',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 2,
        firstDayStemBranch: '壬申',
      },
      {
        month: 3,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 4,
        firstDayStemBranch: '辛未',
      },
      {
        month: 5,
        firstDayStemBranch: '庚子',
      },
      {
        month: 6,
        firstDayStemBranch: '庚午',
      },
      {
        month: 7,
        firstDayStemBranch: '己亥',
      },
      {
        month: 8,
        firstDayStemBranch: '己巳',
      },
      {
        month: 9,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 10,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 11,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 12,
        firstDayStemBranch: '丁卯',
      },
    ]
  },
  {
    wcYear: -151,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '庚寅',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 2,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 3,
        firstDayStemBranch: '丙申',
      },
      {
        month: 4,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 5,
        firstDayStemBranch: '乙未',
      },
      {
        month: 6,
        firstDayStemBranch: '甲子',
      },
      {
        month: 7,
        firstDayStemBranch: '甲午',
      },
      {
        month: 8,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 9,
        firstDayStemBranch: '癸巳',
      },
      {
        month: -9,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 10,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 11,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 12,
        firstDayStemBranch: '辛卯',
      },
    ]
  },
  {
    wcYear: -150,
    dynasty: '西汉',
    emperor: '景帝',
    stemBranch: '辛卯',
    year: 7,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚申',
      },
      {
        month: 2,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 3,
        firstDayStemBranch: '己未',
      },
      {
        month: 4,
        firstDayStemBranch: '己丑',
      },
      {
        month: 5,
        firstDayStemBranch: '己未',
      },
      {
        month: 6,
        firstDayStemBranch: '戊子',
      },
      {
        month: 7,
        firstDayStemBranch: '戊午',
      },
      {
        month: 8,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 9,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 10,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 11,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 12,
        firstDayStemBranch: '乙酉',
      },
    ]
  },
  {
    wcYear: -149,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '中元',
    stemBranch: '壬辰',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 2,
        firstDayStemBranch: '甲申',
      },
      {
        month: 3,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 4,
        firstDayStemBranch: '癸未',
      },
      {
        month: 5,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 6,
        firstDayStemBranch: '壬午',
      },
      {
        month: 7,
        firstDayStemBranch: '壬子',
      },
      {
        month: 8,
        firstDayStemBranch: '壬午',
      },
      {
        month: 9,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 10,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 11,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 12,
        firstDayStemBranch: '庚辰',
      },
    ]
  },
  {
    wcYear: -148,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '中元',
    stemBranch: '癸巳',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己酉',
      },
      {
        month: 2,
        firstDayStemBranch: '己卯',
      },
      {
        month: 3,
        firstDayStemBranch: '戊申',
      },
      {
        month: 4,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 5,
        firstDayStemBranch: '丁未',
      },
      {
        month: 6,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 7,
        firstDayStemBranch: '丙午',
      },
      {
        month: 8,
        firstDayStemBranch: '丙子',
      },
      {
        month: 9,
        firstDayStemBranch: '乙巳',
      },
      {
        month: -9,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 10,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 11,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 12,
        firstDayStemBranch: '甲辰',
      },
    ]
  },
  {
    wcYear: -147,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '中元',
    stemBranch: '甲午',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 2,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 3,
        firstDayStemBranch: '壬申',
      },
      {
        month: 4,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 5,
        firstDayStemBranch: '辛未',
      },
      {
        month: 6,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 7,
        firstDayStemBranch: '庚午',
      },
      {
        month: 8,
        firstDayStemBranch: '庚子',
      },
      {
        month: 9,
        firstDayStemBranch: '己巳',
      },
      {
        month: 10,
        firstDayStemBranch: '己亥',
      },
      {
        month: 11,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 12,
        firstDayStemBranch: '戊戌',
      },
    ]
  },
  {
    wcYear: -146,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '中元',
    stemBranch: '乙未',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 2,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 3,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 4,
        firstDayStemBranch: '丙申',
      },
      {
        month: 5,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 6,
        firstDayStemBranch: '乙未',
      },
      {
        month: 7,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 8,
        firstDayStemBranch: '甲午',
      },
      {
        month: 9,
        firstDayStemBranch: '甲子',
      },
      {
        month: 10,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 11,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 12,
        firstDayStemBranch: '壬辰',
      },
    ]
  },
  {
    wcYear: -145,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '中元',
    stemBranch: '丙申',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 2,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 3,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 4,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 5,
        firstDayStemBranch: '庚申',
      },
      {
        month: 6,
        firstDayStemBranch: '己丑',
      },
      {
        month: 7,
        firstDayStemBranch: '己未',
      },
      {
        month: 8,
        firstDayStemBranch: '己丑',
      },
      {
        month: 9,
        firstDayStemBranch: '戊午',
      },
      {
        month: -9,
        firstDayStemBranch: '戊子',
      },
      {
        month: 10,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 11,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 12,
        firstDayStemBranch: '丙辰',
      },
    ]
  },
  {
    wcYear: -144,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '中元',
    stemBranch: '丁酉',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 2,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 3,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 4,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 5,
        firstDayStemBranch: '甲申',
      },
      {
        month: 6,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 7,
        firstDayStemBranch: '癸未',
      },
      {
        month: 8,
        firstDayStemBranch: '壬子',
      },
      {
        month: 9,
        firstDayStemBranch: '壬午',
      },
      {
        month: 10,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 11,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 12,
        firstDayStemBranch: '辛亥',
      },
    ]
  },
  {
    wcYear: -143,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '后元',
    stemBranch: '戊戌',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 2,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 3,
        firstDayStemBranch: '己卯',
      },
      {
        month: 4,
        firstDayStemBranch: '己酉',
      },
      {
        month: 5,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 8,
        firstDayStemBranch: '丁未',
      },
      {
        month: 9,
        firstDayStemBranch: '丙子',
      },
      {
        month: 10,
        firstDayStemBranch: '丙午',
      },
      {
        month: 11,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 12,
        firstDayStemBranch: '乙巳',
      },
    ]
  },
  {
    wcYear: -142,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '后元',
    stemBranch: '己亥',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 2,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 3,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 4,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 5,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 6,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 7,
        firstDayStemBranch: '壬申',
      },
      {
        month: 8,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 9,
        firstDayStemBranch: '辛未',
      },
      {
        month: -9,
        firstDayStemBranch: '庚子',
      },
      {
        month: 10,
        firstDayStemBranch: '庚午',
      },
      {
        month: 11,
        firstDayStemBranch: '己亥',
      },
      {
        month: 12,
        firstDayStemBranch: '己巳',
      },
    ]
  },
  {
    wcYear: -141,
    dynasty: '西汉',
    emperor: '景帝',
    chineseEraName: '后元',
    stemBranch: '庚子',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 2,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 3,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 4,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 5,
        firstDayStemBranch: '丙申',
      },
      {
        month: 6,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 7,
        firstDayStemBranch: '丙申',
      },
      {
        month: 8,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 9,
        firstDayStemBranch: '乙未',
      },
      {
        month: 10,
        firstDayStemBranch: '甲子',
      },
      {
        month: 11,
        firstDayStemBranch: '甲午',
      },
      {
        month: 12,
        firstDayStemBranch: '癸亥',
      },
    ]
  },
  {
    wcYear: -140,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '建元',
    stemBranch: '辛丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 2,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 3,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 4,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 5,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 6,
        firstDayStemBranch: '庚申',
      },
      {
        month: 7,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 8,
        firstDayStemBranch: '己未',
      },
      {
        month: 9,
        firstDayStemBranch: '己丑',
      },
      {
        month: -9,
        firstDayStemBranch: '己未',
      },
      {
        month: 10,
        firstDayStemBranch: '戊子',
      },
      {
        month: 11,
        firstDayStemBranch: '戊午',
      },
      {
        month: 12,
        firstDayStemBranch: '丁亥',
      },
    ]
  },
  {
    wcYear: -139,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '建元',
    stemBranch: '壬寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 2,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 3,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 4,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 5,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 6,
        firstDayStemBranch: '甲申',
      },
      {
        month: 7,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 8,
        firstDayStemBranch: '癸未',
      },
      {
        month: 9,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 10,
        firstDayStemBranch: '壬午',
      },
      {
        month: 11,
        firstDayStemBranch: '壬子',
      },
      {
        month: 12,
        firstDayStemBranch: '辛巳',
      },
    ]
  },
  {
    wcYear: -138,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '建元',
    stemBranch: '癸卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 2,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 3,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 4,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 5,
        firstDayStemBranch: '己酉',
      },
      {
        month: 6,
        firstDayStemBranch: '己卯',
      },
      {
        month: 7,
        firstDayStemBranch: '戊申',
      },
      {
        month: 8,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 9,
        firstDayStemBranch: '丁未',
      },
      {
        month: 10,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 11,
        firstDayStemBranch: '丙午',
      },
      {
        month: 12,
        firstDayStemBranch: '丙子',
      },
    ]
  },
  {
    wcYear: -137,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '建元',
    stemBranch: '甲辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 2,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 3,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 4,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 5,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 6,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 7,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 8,
        firstDayStemBranch: '壬申',
      },
      {
        month: 9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: -9,
        firstDayStemBranch: '辛未',
      },
      {
        month: 10,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 11,
        firstDayStemBranch: '庚午',
      },
      {
        month: 12,
        firstDayStemBranch: '庚子',
      },
    ]
  },
  {
    wcYear: -136,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '建元',
    stemBranch: '乙巳',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己巳',
      },
      {
        month: 2,
        firstDayStemBranch: '己亥',
      },
      {
        month: 3,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 4,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 5,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 6,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 7,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 8,
        firstDayStemBranch: '丙申',
      },
      {
        month: 9,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 10,
        firstDayStemBranch: '乙未',
      },
      {
        month: 11,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 12,
        firstDayStemBranch: '甲午',
      },
    ]
  },
  {
    wcYear: -135,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '建元',
    stemBranch: '丙午',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲子',
      },
      {
        month: 2,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 3,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 4,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 5,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 6,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 7,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 8,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 9,
        firstDayStemBranch: '庚申',
      },
      {
        month: 10,
        firstDayStemBranch: '己丑',
      },
      {
        month: 11,
        firstDayStemBranch: '己未',
      },
      {
        month: 12,
        firstDayStemBranch: '戊子',
      },
    ]
  },
  {
    wcYear: -134,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元光',
    stemBranch: '丁未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊午',
      },
      {
        month: 2,
        firstDayStemBranch: '戊子',
      },
      {
        month: 3,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 4,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 5,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 6,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 7,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 8,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 9,
        firstDayStemBranch: '甲寅',
      },
      {
        month: -9,
        firstDayStemBranch: '甲申',
      },
      {
        month: 10,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 11,
        firstDayStemBranch: '癸未',
      },
      {
        month: 12,
        firstDayStemBranch: '壬子',
      },
    ]
  },
  {
    wcYear: -133,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元光',
    stemBranch: '戊申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬午',
      },
      {
        month: 2,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 3,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 4,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 5,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 6,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '己酉',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 10,
        firstDayStemBranch: '戊申',
      },
      {
        month: 11,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 12,
        firstDayStemBranch: '丁未',
      },
    ]
  },
  {
    wcYear: -132,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元光',
    stemBranch: '己酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙子',
      },
      {
        month: 2,
        firstDayStemBranch: '丙午',
      },
      {
        month: 3,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 4,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 5,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 6,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 7,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 8,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 9,
        firstDayStemBranch: '癸酉',
      },
      {
        month: -9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 10,
        firstDayStemBranch: '壬申',
      },
      {
        month: 11,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 12,
        firstDayStemBranch: '辛未',
      },
    ]
  },
  {
    wcYear: -131,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元光',
    stemBranch: '庚戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚子',
      },
      {
        month: 2,
        firstDayStemBranch: '庚午',
      },
      {
        month: 3,
        firstDayStemBranch: '己亥',
      },
      {
        month: 4,
        firstDayStemBranch: '己巳',
      },
      {
        month: 5,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 6,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 7,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 8,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 9,
        firstDayStemBranch: '丙申',
      },
      {
        month: 10,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 11,
        firstDayStemBranch: '乙未',
      },
      {
        month: 12,
        firstDayStemBranch: '乙丑',
      },
    ]
  },
  {
    wcYear: -130,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元光',
    stemBranch: '辛亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙未',
      },
      {
        month: 2,
        firstDayStemBranch: '甲子',
      },
      {
        month: 3,
        firstDayStemBranch: '甲午',
      },
      {
        month: 4,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 5,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 6,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 7,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 8,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 9,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 10,
        firstDayStemBranch: '庚申',
      },
      {
        month: 11,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 12,
        firstDayStemBranch: '己未',
      },
    ]
  },
  {
    wcYear: -129,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元光',
    stemBranch: '壬子',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己丑',
      },
      {
        month: 2,
        firstDayStemBranch: '戊午',
      },
      {
        month: 3,
        firstDayStemBranch: '戊子',
      },
      {
        month: 4,
        firstDayStemBranch: '戊午',
      },
      {
        month: 5,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 6,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 7,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 8,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 9,
        firstDayStemBranch: '乙酉',
      },
      {
        month: -9,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 10,
        firstDayStemBranch: '甲申',
      },
      {
        month: 11,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 12,
        firstDayStemBranch: '癸未',
      },
    ]
  },
  {
    wcYear: -128,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元朔',
    stemBranch: '癸丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 2,
        firstDayStemBranch: '壬午',
      },
      {
        month: 3,
        firstDayStemBranch: '壬子',
      },
      {
        month: 4,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 5,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 6,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 7,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 8,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 9,
        firstDayStemBranch: '己酉',
      },
      {
        month: 10,
        firstDayStemBranch: '己卯',
      },
      {
        month: 11,
        firstDayStemBranch: '戊申',
      },
      {
        month: 12,
        firstDayStemBranch: '戊寅',
      },
    ]
  },
  {
    wcYear: -127,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元朔',
    stemBranch: '甲寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁未',
      },
      {
        month: 2,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 3,
        firstDayStemBranch: '丙午',
      },
      {
        month: 4,
        firstDayStemBranch: '丙子',
      },
      {
        month: 5,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 6,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 7,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 8,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 9,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 10,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 11,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 12,
        firstDayStemBranch: '壬申',
      },
    ]
  },
  {
    wcYear: -126,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元朔',
    stemBranch: '乙卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 2,
        firstDayStemBranch: '辛未',
      },
      {
        month: 3,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 4,
        firstDayStemBranch: '庚午',
      },
      {
        month: 5,
        firstDayStemBranch: '庚子',
      },
      {
        month: 6,
        firstDayStemBranch: '己巳',
      },
      {
        month: 7,
        firstDayStemBranch: '己亥',
      },
      {
        month: 8,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 9,
        firstDayStemBranch: '戊戌',
      },
      {
        month: -9,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 10,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 11,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 12,
        firstDayStemBranch: '丙申',
      },
    ]
  },
  {
    wcYear: -125,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元朔',
    stemBranch: '丙辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 2,
        firstDayStemBranch: '乙未',
      },
      {
        month: 3,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 4,
        firstDayStemBranch: '甲午',
      },
      {
        month: 5,
        firstDayStemBranch: '甲子',
      },
      {
        month: 6,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 7,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 8,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 9,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 10,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 11,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 12,
        firstDayStemBranch: '庚寅',
      },
    ]
  },
  {
    wcYear: -124,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元朔',
    stemBranch: '丁巳',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚申',
      },
      {
        month: 2,
        firstDayStemBranch: '己丑',
      },
      {
        month: 3,
        firstDayStemBranch: '己未',
      },
      {
        month: 4,
        firstDayStemBranch: '戊子',
      },
      {
        month: 5,
        firstDayStemBranch: '戊午',
      },
      {
        month: 6,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 7,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 8,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 9,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 10,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 11,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 12,
        firstDayStemBranch: '乙酉',
      },
    ]
  },
  {
    wcYear: -123,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元朔',
    stemBranch: '戊午',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 2,
        firstDayStemBranch: '甲申',
      },
      {
        month: 3,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 4,
        firstDayStemBranch: '癸未',
      },
      {
        month: 5,
        firstDayStemBranch: '壬子',
      },
      {
        month: 6,
        firstDayStemBranch: '壬午',
      },
      {
        month: 7,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 8,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 9,
        firstDayStemBranch: '庚戌',
      },
      {
        month: -9,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 10,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 11,
        firstDayStemBranch: '己卯',
      },
      {
        month: 12,
        firstDayStemBranch: '己酉',
      },
    ]
  },
  {
    wcYear: -122,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元狩',
    stemBranch: '己未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 2,
        firstDayStemBranch: '戊申',
      },
      {
        month: 3,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 4,
        firstDayStemBranch: '丁未',
      },
      {
        month: 5,
        firstDayStemBranch: '丙子',
      },
      {
        month: 6,
        firstDayStemBranch: '丙午',
      },
      {
        month: 7,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 8,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 9,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 10,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 11,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 12,
        firstDayStemBranch: '癸卯',
      },
    ]
  },
  {
    wcYear: -121,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元狩',
    stemBranch: '庚申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬申',
      },
      {
        month: 2,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 3,
        firstDayStemBranch: '壬申',
      },
      {
        month: 4,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 5,
        firstDayStemBranch: '辛未',
      },
      {
        month: 6,
        firstDayStemBranch: '庚子',
      },
      {
        month: 7,
        firstDayStemBranch: '庚午',
      },
      {
        month: 8,
        firstDayStemBranch: '己亥',
      },
      {
        month: 9,
        firstDayStemBranch: '己巳',
      },
      {
        month: -9,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 10,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 11,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 12,
        firstDayStemBranch: '丁卯',
      },
    ]
  },
  {
    wcYear: -120,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元狩',
    stemBranch: '辛酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙申',
      },
      {
        month: 2,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 3,
        firstDayStemBranch: '乙未',
      },
      {
        month: 4,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 5,
        firstDayStemBranch: '乙未',
      },
      {
        month: 6,
        firstDayStemBranch: '甲子',
      },
      {
        month: 7,
        firstDayStemBranch: '甲午',
      },
      {
        month: 8,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 9,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 10,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 11,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 12,
        firstDayStemBranch: '辛酉',
      },
    ]
  },
  {
    wcYear: -119,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元狩',
    stemBranch: '壬戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 2,
        firstDayStemBranch: '庚申',
      },
      {
        month: 3,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 4,
        firstDayStemBranch: '己未',
      },
      {
        month: 5,
        firstDayStemBranch: '己丑',
      },
      {
        month: 6,
        firstDayStemBranch: '戊午',
      },
      {
        month: 7,
        firstDayStemBranch: '戊子',
      },
      {
        month: 8,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 9,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 10,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 11,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 12,
        firstDayStemBranch: '丙辰',
      },
    ]
  },
  {
    wcYear: -118,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元狩',
    stemBranch: '癸亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 2,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 3,
        firstDayStemBranch: '甲申',
      },
      {
        month: 4,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 5,
        firstDayStemBranch: '癸未',
      },
      {
        month: 6,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 7,
        firstDayStemBranch: '壬午',
      },
      {
        month: 8,
        firstDayStemBranch: '壬子',
      },
      {
        month: 9,
        firstDayStemBranch: '辛巳',
      },
      {
        month: -9,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 10,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 11,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 12,
        firstDayStemBranch: '己卯',
      },
    ]
  },
  {
    wcYear: -117,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元狩',
    stemBranch: '甲子',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己酉',
      },
      {
        month: 2,
        firstDayStemBranch: '己卯',
      },
      {
        month: 3,
        firstDayStemBranch: '戊申',
      },
      {
        month: 4,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 5,
        firstDayStemBranch: '丁未',
      },
      {
        month: 6,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 7,
        firstDayStemBranch: '丙午',
      },
      {
        month: 8,
        firstDayStemBranch: '丙子',
      },
      {
        month: 9,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 10,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 11,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 12,
        firstDayStemBranch: '甲戌',
      },
    ]
  },
  {
    wcYear: -116,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元鼎',
    stemBranch: '乙丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 2,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 3,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 4,
        firstDayStemBranch: '壬申',
      },
      {
        month: 5,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 6,
        firstDayStemBranch: '辛未',
      },
      {
        month: 7,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 8,
        firstDayStemBranch: '庚午',
      },
      {
        month: 9,
        firstDayStemBranch: '庚子',
      },
      {
        month: 10,
        firstDayStemBranch: '己巳',
      },
      {
        month: 11,
        firstDayStemBranch: '己亥',
      },
      {
        month: 12,
        firstDayStemBranch: '戊辰',
      },
    ]
  },
  {
    wcYear: -115,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元鼎',
    stemBranch: '丙寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 2,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 3,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 4,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 5,
        firstDayStemBranch: '丙申',
      },
      {
        month: 6,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 7,
        firstDayStemBranch: '乙未',
      },
      {
        month: 8,
        firstDayStemBranch: '甲子',
      },
      {
        month: 9,
        firstDayStemBranch: '甲午',
      },
      {
        month: -9,
        firstDayStemBranch: '甲子',
      },
      {
        month: 10,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 11,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 12,
        firstDayStemBranch: '壬辰',
      },
    ]
  },
  {
    wcYear: -114,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元鼎',
    stemBranch: '丁卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 2,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 3,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 4,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 5,
        firstDayStemBranch: '庚申',
      },
      {
        month: 6,
        firstDayStemBranch: '己丑',
      },
      {
        month: 7,
        firstDayStemBranch: '己未',
      },
      {
        month: 8,
        firstDayStemBranch: '戊子',
      },
      {
        month: 9,
        firstDayStemBranch: '戊午',
      },
      {
        month: 10,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 11,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 12,
        firstDayStemBranch: '丁亥',
      },
    ]
  },
  {
    wcYear: -113,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元鼎',
    stemBranch: '戊辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 2,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 3,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 4,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 5,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 6,
        firstDayStemBranch: '甲申',
      },
      {
        month: 7,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 8,
        firstDayStemBranch: '癸未',
      },
      {
        month: 9,
        firstDayStemBranch: '壬子',
      },
      {
        month: -9,
        firstDayStemBranch: '壬午',
      },
      {
        month: 10,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 11,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 12,
        firstDayStemBranch: '庚戌',
      },
    ]
  },
  {
    wcYear: -112,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元鼎',
    stemBranch: '己巳',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 2,
        firstDayStemBranch: '己酉',
      },
      {
        month: 3,
        firstDayStemBranch: '己卯',
      },
      {
        month: 4,
        firstDayStemBranch: '己酉',
      },
      {
        month: 5,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 8,
        firstDayStemBranch: '丁未',
      },
      {
        month: 9,
        firstDayStemBranch: '丙子',
      },
      {
        month: 10,
        firstDayStemBranch: '丙午',
      },
      {
        month: 11,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 12,
        firstDayStemBranch: '乙巳',
      },
    ]
  },
  {
    wcYear: -111,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元鼎',
    stemBranch: '庚午',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 2,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 3,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 4,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 5,
        firstDayStemBranch: '壬申',
      },
      {
        month: 6,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 7,
        firstDayStemBranch: '辛未',
      },
      {
        month: 8,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 9,
        firstDayStemBranch: '辛未',
      },
      {
        month: 10,
        firstDayStemBranch: '庚子',
      },
      {
        month: 11,
        firstDayStemBranch: '庚午',
      },
      {
        month: 12,
        firstDayStemBranch: '己亥',
      },
    ]
  },
  {
    wcYear: -110,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元封',
    stemBranch: '辛未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己巳',
      },
      {
        month: 2,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 3,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 4,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 5,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 6,
        firstDayStemBranch: '丙申',
      },
      {
        month: 7,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 8,
        firstDayStemBranch: '乙未',
      },
      {
        month: 9,
        firstDayStemBranch: '乙丑',
      },
      {
        month: -9,
        firstDayStemBranch: '甲午',
      },
      {
        month: 10,
        firstDayStemBranch: '甲子',
      },
      {
        month: 11,
        firstDayStemBranch: '甲午',
      },
      {
        month: 12,
        firstDayStemBranch: '癸亥',
      },
    ]
  },
  {
    wcYear: -109,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元封',
    stemBranch: '壬申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 2,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 3,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 4,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 5,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 6,
        firstDayStemBranch: '庚申',
      },
      {
        month: 7,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 8,
        firstDayStemBranch: '己未',
      },
      {
        month: 9,
        firstDayStemBranch: '己丑',
      },
      {
        month: 10,
        firstDayStemBranch: '戊午',
      },
      {
        month: 11,
        firstDayStemBranch: '戊子',
      },
      {
        month: 12,
        firstDayStemBranch: '丁巳',
      },
    ]
  },
  {
    wcYear: -108,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元封',
    stemBranch: '癸酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 2,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 3,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 4,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 5,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 6,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 7,
        firstDayStemBranch: '甲申',
      },
      {
        month: 8,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 9,
        firstDayStemBranch: '癸未',
      },
      {
        month: 10,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 11,
        firstDayStemBranch: '壬午',
      },
      {
        month: 12,
        firstDayStemBranch: '壬子',
      },
    ]
  },
  {
    wcYear: -107,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元封',
    stemBranch: '甲戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 2,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 3,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 4,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 5,
        firstDayStemBranch: '己卯',
      },
      {
        month: 6,
        firstDayStemBranch: '己酉',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '戊申',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: -9,
        firstDayStemBranch: '丁未',
      },
      {
        month: 10,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 11,
        firstDayStemBranch: '丙午',
      },
      {
        month: 12,
        firstDayStemBranch: '丙子',
      },
    ]
  },
  {
    wcYear: -106,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元封',
    stemBranch: '乙亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 2,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 3,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 4,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 5,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 6,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 7,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 8,
        firstDayStemBranch: '壬申',
      },
      {
        month: 9,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 10,
        firstDayStemBranch: '辛未',
      },
      {
        month: 11,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 12,
        firstDayStemBranch: '庚午',
      },
    ]
  },
  {
    wcYear: -105,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '元封',
    stemBranch: '丙子',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚子',
      },
      {
        month: 2,
        firstDayStemBranch: '己巳',
      },
      {
        month: 3,
        firstDayStemBranch: '己亥',
      },
      {
        month: 4,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 5,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 6,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 7,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 8,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 9,
        firstDayStemBranch: '丙申',
      },
      {
        month: -9,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 10,
        firstDayStemBranch: '乙未',
      },
      {
        month: 11,
        firstDayStemBranch: '甲子',
      },
      {
        month: 12,
        firstDayStemBranch: '甲午',
      },
    ]
  },
  {
    wcYear: -104,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太初',
    stemBranch: '丁丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 2,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 3,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 4,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 5,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 6,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 7,
        firstDayStemBranch: '庚申',
      },
      {
        month: 8,
        firstDayStemBranch: '己丑',
      },
      {
        month: 9,
        firstDayStemBranch: '己未',
      },
      {
        month: 10,
        firstDayStemBranch: '戊子',
      },
      {
        month: 11,
        firstDayStemBranch: '戊午',
      },
      {
        month: 12,
        firstDayStemBranch: '丁亥',
      },
    ]
  },
  {
    wcYear: -103,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太初',
    stemBranch: '戊寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 2,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 3,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 4,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 5,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 6,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 7,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 8,
        firstDayStemBranch: '甲申',
      },
      {
        month: 9,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 10,
        firstDayStemBranch: '癸未',
      },
      {
        month: 11,
        firstDayStemBranch: '壬子',
      },
      {
        month: 12,
        firstDayStemBranch: '壬午',
      },
    ]
  },
  {
    wcYear: -102,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太初',
    stemBranch: '己卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 2,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 3,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 4,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 5,
        firstDayStemBranch: '己酉',
      },
      {
        month: 6,
        firstDayStemBranch: '己卯',
      },
      {
        month: -6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 8,
        firstDayStemBranch: '戊申',
      },
      {
        month: 9,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 10,
        firstDayStemBranch: '丁未',
      },
      {
        month: 11,
        firstDayStemBranch: '丙子',
      },
      {
        month: 12,
        firstDayStemBranch: '丙午',
      },
    ]
  },
  {
    wcYear: -101,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太初',
    stemBranch: '庚辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 2,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 3,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 4,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 5,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 6,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 7,
        firstDayStemBranch: '壬申',
      },
      {
        month: 8,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 9,
        firstDayStemBranch: '辛未',
      },
      {
        month: 10,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 11,
        firstDayStemBranch: '辛未',
      },
      {
        month: 12,
        firstDayStemBranch: '庚子',
      },
    ]
  }, 
  {
    wcYear: -100,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '天汉',
    stemBranch: '辛巳',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚午',
      },
      {
        month: 2,
        firstDayStemBranch: '己亥',
      },
      {
        month: 3,
        firstDayStemBranch: '己巳',
      },
      {
        month: 4,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 5,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 6,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 7,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 8,
        firstDayStemBranch: '丙申',
      },
      {
        month: 9,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 10,
        firstDayStemBranch: '乙未',
      },
      {
        month: 11,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 12,
        firstDayStemBranch: '甲午',
      },
    ]
  }, 
  {
    wcYear: -99,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '天汉',
    stemBranch: '壬午',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲子',
      },
      {
        month: 2,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 3,
        firstDayStemBranch: '癸亥',
      },
      {
        month: -3,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 4,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 5,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 6,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 7,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 8,
        firstDayStemBranch: '庚申',
      },
      {
        month: 9,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 10,
        firstDayStemBranch: '己未',
      },
      {
        month: 11,
        firstDayStemBranch: '己丑',
      },
      {
        month: 12,
        firstDayStemBranch: '戊午',
      },
    ]
  }, 
  {
    wcYear: -98,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '天汉',
    stemBranch: '癸未',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊子',
      },
      {
        month: 2,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 3,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 4,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 5,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 6,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 7,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 8,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 9,
        firstDayStemBranch: '甲申',
      },
      {
        month: 10,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 11,
        firstDayStemBranch: '癸未',
      },
      {
        month: 12,
        firstDayStemBranch: '癸丑',
      },
    ]
  }, 
  {
    wcYear: -97,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '天汉',
    stemBranch: '甲申',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬午',
      },
      {
        month: 2,
        firstDayStemBranch: '壬子',
      },
      {
        month: 3,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 4,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 5,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 6,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '己酉',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 10,
        firstDayStemBranch: '戊申',
      },
      {
        month: 11,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 12,
        firstDayStemBranch: '丁未',
      },
      {
        month: -12,
        firstDayStemBranch: '丁丑',
      },
    ]
  }, 
  {
    wcYear: -96,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太始',
    stemBranch: '乙酉',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙午',
      },
      {
        month: 2,
        firstDayStemBranch: '丙子',
      },
      {
        month: 3,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 4,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 5,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 6,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 7,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 8,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 10,
        firstDayStemBranch: '壬申',
      },
      {
        month: 11,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 12,
        firstDayStemBranch: '辛未',
      },
    ]
  }, 
  {
    wcYear: -95,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太始',
    stemBranch: '丙戌',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚子',
      },
      {
        month: 2,
        firstDayStemBranch: '庚午',
      },
      {
        month: 3,
        firstDayStemBranch: '庚子',
      },
      {
        month: 4,
        firstDayStemBranch: '己巳',
      },
      {
        month: 5,
        firstDayStemBranch: '己亥',
      },
      {
        month: 6,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 7,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 8,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 9,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 10,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 11,
        firstDayStemBranch: '丙申',
      },
      {
        month: 12,
        firstDayStemBranch: '乙丑',
      },
    ]
  }, 
  {
    wcYear: -94,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太始',
    stemBranch: '丁亥',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙未',
      },
      {
        month: 2,
        firstDayStemBranch: '甲子',
      },
      {
        month: 3,
        firstDayStemBranch: '甲午',
      },
      {
        month: 4,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 5,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 6,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 7,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 8,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 9,
        firstDayStemBranch: '辛卯',
      },
      {
        month: -9,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 10,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 11,
        firstDayStemBranch: '庚申',
      },
      {
        month: 12,
        firstDayStemBranch: '己丑',
      },
    ]
  }, 
  {
    wcYear: -93,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '太始',
    stemBranch: '戊子',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己未',
      },
      {
        month: 2,
        firstDayStemBranch: '戊子',
      },
      {
        month: 3,
        firstDayStemBranch: '戊午',
      },
      {
        month: 4,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 5,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 6,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 7,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 8,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 9,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 10,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 11,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 12,
        firstDayStemBranch: '甲申',
      },
    ]
  }, 
  {
    wcYear: -92,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '征(延)和',
    stemBranch: '己丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 2,
        firstDayStemBranch: '癸未',
      },
      {
        month: 3,
        firstDayStemBranch: '壬子',
      },
      {
        month: 4,
        firstDayStemBranch: '壬午',
      },
      {
        month: 5,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 6,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 7,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 8,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 9,
        firstDayStemBranch: '己酉',
      },
      {
        month: 10,
        firstDayStemBranch: '己卯',
      },
      {
        month: 11,
        firstDayStemBranch: '戊申',
      },
      {
        month: 12,
        firstDayStemBranch: '戊寅',
      },
    ]
  }, 
  {
    wcYear: -91,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '征(延)和',
    stemBranch: '庚寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊申',
      },
      {
        month: 2,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 3,
        firstDayStemBranch: '丁未',
      },
      {
        month: 4,
        firstDayStemBranch: '丙子',
      },
      {
        month: 5,
        firstDayStemBranch: '丙午',
      },
      {
        month: -5,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 6,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 7,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 8,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 9,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 10,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 11,
        firstDayStemBranch: '壬申',
      },
      {
        month: 12,
        firstDayStemBranch: '壬寅',
      },
    ]
  }, 
  {
    wcYear: -90,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '征(延)和',
    stemBranch: '辛卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛未',
      },
      {
        month: 2,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 3,
        firstDayStemBranch: '庚午',
      },
      {
        month: 4,
        firstDayStemBranch: '庚子',
      },
      {
        month: 5,
        firstDayStemBranch: '庚午',
      },
      {
        month: 6,
        firstDayStemBranch: '己亥',
      },
      {
        month: 7,
        firstDayStemBranch: '己巳',
      },
      {
        month: 8,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 9,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 10,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 11,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 12,
        firstDayStemBranch: '丙申',
      },
    ]
  }, 
  {
    wcYear: -89,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '征(延)和',
    stemBranch: '壬辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 2,
        firstDayStemBranch: '乙未',
      },
      {
        month: 3,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 4,
        firstDayStemBranch: '甲午',
      },
      {
        month: 5,
        firstDayStemBranch: '甲子',
      },
      {
        month: 6,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 7,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 8,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 9,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 10,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 11,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 12,
        firstDayStemBranch: '辛卯',
      },
    ]
  }, 
  {
    wcYear: -88,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '后元',
    stemBranch: '癸巳',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚申',
      },
      {
        month: -1,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 2,
        firstDayStemBranch: '己未',
      },
      {
        month: 3,
        firstDayStemBranch: '己丑',
      },
      {
        month: 4,
        firstDayStemBranch: '戊午',
      },
      {
        month: 5,
        firstDayStemBranch: '戊子',
      },
      {
        month: 6,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 7,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 8,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 9,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 10,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 11,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 12,
        firstDayStemBranch: '乙卯',
      },
    ]
  }, 
  {
    wcYear: -87,
    dynasty: '西汉',
    emperor: '武帝',
    chineseEraName: '后元',
    stemBranch: '甲午',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲申',
      },
      {
        month: 2,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 3,
        firstDayStemBranch: '癸未',
      },
      {
        month: 4,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 5,
        firstDayStemBranch: '壬午',
      },
      {
        month: 6,
        firstDayStemBranch: '壬子',
      },
      {
        month: 7,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 8,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 9,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 10,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 11,
        firstDayStemBranch: '己卯',
      },
      {
        month: 12,
        firstDayStemBranch: '己酉',
      },
    ]
  }, 
  {
    wcYear: -86,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '始元',
    stemBranch: '乙未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 2,
        firstDayStemBranch: '戊申',
      },
      {
        month: 3,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 4,
        firstDayStemBranch: '丁未',
      },
      {
        month: 5,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 6,
        firstDayStemBranch: '丙午',
      },
      {
        month: 7,
        firstDayStemBranch: '丙子',
      },
      {
        month: 8,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 9,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 10,
        firstDayStemBranch: '甲辰',
      },
      {
        month: -10,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 11,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 12,
        firstDayStemBranch: '癸酉',
      },
    ]
  }, 
  {
    wcYear: -85,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '始元',
    stemBranch: '丙申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 2,
        firstDayStemBranch: '壬申',
      },
      {
        month: 3,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 4,
        firstDayStemBranch: '辛未',
      },
      {
        month: 5,
        firstDayStemBranch: '庚子',
      },
      {
        month: 6,
        firstDayStemBranch: '庚午',
      },
      {
        month: 7,
        firstDayStemBranch: '庚子',
      },
      {
        month: 8,
        firstDayStemBranch: '己巳',
      },
      {
        month: 9,
        firstDayStemBranch: '己亥',
      },
      {
        month: 10,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 11,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 12,
        firstDayStemBranch: '丁卯',
      },
    ]
  }, 
  {
    wcYear: -84,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '始元',
    stemBranch: '丁酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 2,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 3,
        firstDayStemBranch: '丙申',
      },
      {
        month: 4,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 5,
        firstDayStemBranch: '乙未',
      },
      {
        month: 6,
        firstDayStemBranch: '甲子',
      },
      {
        month: 7,
        firstDayStemBranch: '甲午',
      },
      {
        month: 8,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 9,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 10,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 11,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 12,
        firstDayStemBranch: '壬戌',
      },
    ]
  }, 
  {
    wcYear: -83,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '始元',
    stemBranch: '戊戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 2,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 3,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 4,
        firstDayStemBranch: '庚申',
      },
      {
        month: 5,
        firstDayStemBranch: '己丑',
      },
      {
        month: 6,
        firstDayStemBranch: '己未',
      },
      {
        month: 7,
        firstDayStemBranch: '戊子',
      },
      {
        month: -7,
        firstDayStemBranch: '戊午',
      },
      {
        month: 8,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 9,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 10,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 11,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 12,
        firstDayStemBranch: '乙酉',
      },
    ]
  }, 
  {
    wcYear: -82,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '始元',
    stemBranch: '己亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 2,
        firstDayStemBranch: '甲申',
      },
      {
        month: 3,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 4,
        firstDayStemBranch: '甲申',
      },
      {
        month: 5,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 6,
        firstDayStemBranch: '癸未',
      },
      {
        month: 7,
        firstDayStemBranch: '壬子',
      },
      {
        month: 8,
        firstDayStemBranch: '壬午',
      },
      {
        month: 9,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 10,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 11,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 12,
        firstDayStemBranch: '庚辰',
      },
    ]
  }, 
  {
    wcYear: -81,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '始元',
    stemBranch: '庚子',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己酉',
      },
      {
        month: 2,
        firstDayStemBranch: '己卯',
      },
      {
        month: 3,
        firstDayStemBranch: '戊申',
      },
      {
        month: 4,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 5,
        firstDayStemBranch: '丁未',
      },
      {
        month: 6,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 7,
        firstDayStemBranch: '丁未',
      },
      {
        month: 8,
        firstDayStemBranch: '丙子',
      },
      {
        month: 9,
        firstDayStemBranch: '丙午',
      },
      {
        month: 10,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 11,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 12,
        firstDayStemBranch: '甲戌',
      },
    ]
  }, 
  {
    wcYear: -80,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元凤',
    stemBranch: '辛丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 2,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 3,
        firstDayStemBranch: '癸卯',
      },
      {
        month: -3,
        firstDayStemBranch: '壬申',
      },
      {
        month: 4,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 5,
        firstDayStemBranch: '辛未',
      },
      {
        month: 6,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 7,
        firstDayStemBranch: '庚午',
      },
      {
        month: 8,
        firstDayStemBranch: '庚子',
      },
      {
        month: 9,
        firstDayStemBranch: '己巳',
      },
      {
        month: 10,
        firstDayStemBranch: '己亥',
      },
      {
        month: 11,
        firstDayStemBranch: '己巳',
      },
      {
        month: 12,
        firstDayStemBranch: '戊戌',
      },
    ]
  }, 
  {
    wcYear: -79,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元凤',
    stemBranch: '壬寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 2,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 3,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 4,
        firstDayStemBranch: '丙申',
      },
      {
        month: 5,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 6,
        firstDayStemBranch: '乙未',
      },
      {
        month: 7,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 8,
        firstDayStemBranch: '甲午',
      },
      {
        month: 9,
        firstDayStemBranch: '甲子',
      },
      {
        month: 10,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 11,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 12,
        firstDayStemBranch: '壬辰',
      },
    ]
  }, 
  {
    wcYear: -78,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元凤',
    stemBranch: '癸卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 2,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 3,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 4,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 5,
        firstDayStemBranch: '庚申',
      },
      {
        month: 6,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 7,
        firstDayStemBranch: '己未',
      },
      {
        month: 8,
        firstDayStemBranch: '己丑',
      },
      {
        month: 9,
        firstDayStemBranch: '戊午',
      },
      {
        month: 10,
        firstDayStemBranch: '戊子',
      },
      {
        month: 11,
        firstDayStemBranch: '丁巳',
      },
      {
        month: -11,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 12,
        firstDayStemBranch: '丙辰',
      },
    ]
  }, 
  {
    wcYear: -77,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元凤',
    stemBranch: '甲辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 2,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 3,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 4,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 5,
        firstDayStemBranch: '甲申',
      },
      {
        month: 6,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 7,
        firstDayStemBranch: '癸未',
      },
      {
        month: 8,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 9,
        firstDayStemBranch: '壬午',
      },
      {
        month: 10,
        firstDayStemBranch: '壬子',
      },
      {
        month: 11,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 12,
        firstDayStemBranch: '辛亥',
      },
    ]
  }, 
  {
    wcYear: -76,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元凤',
    stemBranch: '乙巳',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 2,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 3,
        firstDayStemBranch: '己卯',
      },
      {
        month: 4,
        firstDayStemBranch: '己酉',
      },
      {
        month: 5,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 8,
        firstDayStemBranch: '丁未',
      },
      {
        month: 9,
        firstDayStemBranch: '丙子',
      },
      {
        month: 10,
        firstDayStemBranch: '丙午',
      },
      {
        month: 11,
        firstDayStemBranch: '丙子',
      },
      {
        month: 12,
        firstDayStemBranch: '乙巳',
      },
    ]
  }, 
  {
    wcYear: -75,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元凤',
    stemBranch: '丙午',
    year: 6,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 2,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 3,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 4,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 5,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 6,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 7,
        firstDayStemBranch: '壬申',
      },
      {
        month: 8,
        firstDayStemBranch: '辛丑',
      },
      {
        month: -8,
        firstDayStemBranch: '辛未',
      },
      {
        month: 9,
        firstDayStemBranch: '庚子',
      },
      {
        month: 10,
        firstDayStemBranch: '庚午',
      },
      {
        month: 11,
        firstDayStemBranch: '己亥',
      },
      {
        month: 12,
        firstDayStemBranch: '己巳',
      },
    ]
  }, 
  {
    wcYear: -74,
    dynasty: '西汉',
    emperor: '昭帝',
    chineseEraName: '元平',
    stemBranch: '丁未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己亥',
      },
      {
        month: 2,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 3,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 4,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 5,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 6,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 7,
        firstDayStemBranch: '丙申',
      },
      {
        month: 8,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 9,
        firstDayStemBranch: '乙未',
      },
      {
        month: 10,
        firstDayStemBranch: '甲子',
      },
      {
        month: 11,
        firstDayStemBranch: '甲午',
      },
      {
        month: 12,
        firstDayStemBranch: '癸亥',
      },
    ]
  }, 
  {
    wcYear: -73,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '本始',
    stemBranch: '戊申',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 2,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 3,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 4,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 5,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 6,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 7,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 8,
        firstDayStemBranch: '庚申',
      },
      {
        month: 9,
        firstDayStemBranch: '己丑',
      },
      {
        month: 10,
        firstDayStemBranch: '己未',
      },
      {
        month: 11,
        firstDayStemBranch: '戊子',
      },
      {
        month: 12,
        firstDayStemBranch: '戊午',
      },
    ]
  }, 
  {
    wcYear: -72,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '本始',
    stemBranch: '己酉',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 2,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 3,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 4,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 5,
        firstDayStemBranch: '乙酉',
      },
      {
        month: -5,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 6,
        firstDayStemBranch: '甲申',
      },
      {
        month: 7,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 8,
        firstDayStemBranch: '甲申',
      },
      {
        month: 9,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 10,
        firstDayStemBranch: '癸未',
      },
      {
        month: 11,
        firstDayStemBranch: '壬子',
      },
      {
        month: 12,
        firstDayStemBranch: '壬午',
      },
    ]
  }, 
  {
    wcYear: -71,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '本始',
    stemBranch: '庚戌',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 2,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 3,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 4,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 5,
        firstDayStemBranch: '己酉',
      },
      {
        month: 6,
        firstDayStemBranch: '己卯',
      },
      {
        month: 7,
        firstDayStemBranch: '戊申',
      },
      {
        month: 8,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 9,
        firstDayStemBranch: '丁未',
      },
      {
        month: 10,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 11,
        firstDayStemBranch: '丙午',
      },
      {
        month: 12,
        firstDayStemBranch: '丙子',
      },
    ]
  }, 
  {
    wcYear: -70,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '本始',
    stemBranch: '辛亥',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙午',
      },
      {
        month: 2,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 3,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 4,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 5,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 6,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 7,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 8,
        firstDayStemBranch: '壬申',
      },
      {
        month: 9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 10,
        firstDayStemBranch: '辛未',
      },
      {
        month: 11,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 12,
        firstDayStemBranch: '庚午',
      },
    ]
  }, 
  {
    wcYear: -69,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '地节',
    stemBranch: '壬子',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚子',
      },
      {
        month: -1,
        firstDayStemBranch: '己巳',
      },
      {
        month: 2,
        firstDayStemBranch: '己亥',
      },
      {
        month: 3,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 4,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 5,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 6,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 7,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 8,
        firstDayStemBranch: '丙申',
      },
      {
        month: 9,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 10,
        firstDayStemBranch: '乙未',
      },
      {
        month: 11,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 12,
        firstDayStemBranch: '甲午',
      },
    ]
  }, 
  {
    wcYear: -68,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '地节',
    stemBranch: '癸丑',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲子',
      },
      {
        month: 2,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 3,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 4,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 5,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 6,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 7,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 8,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 9,
        firstDayStemBranch: '庚申',
      },
      {
        month: 10,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 11,
        firstDayStemBranch: '己未',
      },
      {
        month: 12,
        firstDayStemBranch: '己丑',
      },
    ]
  }, 
  {
    wcYear: -67,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '地节',
    stemBranch: '甲寅',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊午',
      },
      {
        month: 2,
        firstDayStemBranch: '戊子',
      },
      {
        month: 3,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 4,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 5,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 6,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 7,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 8,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 9,
        firstDayStemBranch: '甲寅',
      },
      {
        month: -9,
        firstDayStemBranch: '甲申',
      },
      {
        month: 10,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 11,
        firstDayStemBranch: '癸未',
      },
      {
        month: 12,
        firstDayStemBranch: '癸丑',
      },
    ]
  }, 
  {
    wcYear: -66,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '地节',
    stemBranch: '乙卯',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬午',
      },
      {
        month: 2,
        firstDayStemBranch: '壬子',
      },
      {
        month: 3,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 4,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 5,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 6,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '己酉',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 10,
        firstDayStemBranch: '戊申',
      },
      {
        month: 11,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 12,
        firstDayStemBranch: '丁未',
      },
    ]
  }, 
  {
    wcYear: -65,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '元康',
    stemBranch: '丙辰',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙子',
      },
      {
        month: 2,
        firstDayStemBranch: '丙午',
      },
      {
        month: 3,
        firstDayStemBranch: '丙子',
      },
      {
        month: 4,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 5,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 6,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 7,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 8,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 9,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 10,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 11,
        firstDayStemBranch: '壬申',
      },
      {
        month: 12,
        firstDayStemBranch: '辛丑',
      },
    ]
  }, 
  {
    wcYear: -64,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '元康',
    stemBranch: '丁巳',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛未',
      },
      {
        month: 2,
        firstDayStemBranch: '庚子',
      },
      {
        month: 3,
        firstDayStemBranch: '庚午',
      },
      {
        month: 4,
        firstDayStemBranch: '己亥',
      },
      {
        month: 5,
        firstDayStemBranch: '己巳',
      },
      {
        month: 6,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 7,
        firstDayStemBranch: '戊辰',
      },
      {
        month: -7,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 8,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 9,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 10,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 11,
        firstDayStemBranch: '丙申',
      },
      {
        month: 12,
        firstDayStemBranch: '乙丑',
      },
    ]
  }, 
  {
    wcYear: -63,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '元康',
    stemBranch: '戊午',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙未',
      },
      {
        month: 2,
        firstDayStemBranch: '甲子',
      },
      {
        month: 3,
        firstDayStemBranch: '甲午',
      },
      {
        month: 4,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 5,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 6,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 7,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 8,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 9,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 10,
        firstDayStemBranch: '庚申',
      },
      {
        month: 11,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 12,
        firstDayStemBranch: '庚申',
      },
    ]
  }, 
  {
    wcYear: -62,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '元康',
    stemBranch: '己未',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己丑',
      },
      {
        month: 2,
        firstDayStemBranch: '己未',
      },
      {
        month: 3,
        firstDayStemBranch: '戊子',
      },
      {
        month: 4,
        firstDayStemBranch: '戊午',
      },
      {
        month: 5,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 6,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 7,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 8,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 9,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 10,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 11,
        firstDayStemBranch: '甲申',
      },
      {
        month: 12,
        firstDayStemBranch: '甲寅',
      },
    ]
  }, 
  {
    wcYear: -61,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '神爵',
    stemBranch: '庚申',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸未',
      },
      {
        month: 2,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 3,
        firstDayStemBranch: '癸未',
      },
      {
        month: 4,
        firstDayStemBranch: '壬子',
      },
      {
        month: -4,
        firstDayStemBranch: '壬午',
      },
      {
        month: 5,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 6,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 7,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 8,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 9,
        firstDayStemBranch: '己酉',
      },
      {
        month: 10,
        firstDayStemBranch: '己卯',
      },
      {
        month: 11,
        firstDayStemBranch: '戊申',
      },
      {
        month: 12,
        firstDayStemBranch: '戊寅',
      },
    ]
  }, 
  {
    wcYear: -60,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '神爵',
    stemBranch: '辛酉',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁未',
      },
      {
        month: 2,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 3,
        firstDayStemBranch: '丙午',
      },
      {
        month: 4,
        firstDayStemBranch: '丙子',
      },
      {
        month: 5,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 6,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 7,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 8,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 9,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 10,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 11,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 12,
        firstDayStemBranch: '壬申',
      },
    ]
  }, 
  {
    wcYear: -59,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '神爵',
    stemBranch: '壬戌',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 2,
        firstDayStemBranch: '辛未',
      },
      {
        month: 3,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 4,
        firstDayStemBranch: '庚午',
      },
      {
        month: 5,
        firstDayStemBranch: '庚子',
      },
      {
        month: 6,
        firstDayStemBranch: '己巳',
      },
      {
        month: 7,
        firstDayStemBranch: '己亥',
      },
      {
        month: 8,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 9,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 10,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 11,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 12,
        firstDayStemBranch: '丁卯',
      },
      {
        month: -12,
        firstDayStemBranch: '丙申',
      },
    ]
  }, 
  {
    wcYear: -58,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '神爵',
    stemBranch: '癸亥',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 2,
        firstDayStemBranch: '乙未',
      },
      {
        month: 3,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 4,
        firstDayStemBranch: '甲午',
      },
      {
        month: 5,
        firstDayStemBranch: '甲子',
      },
      {
        month: 6,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 7,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 8,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 9,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 10,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 11,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 12,
        firstDayStemBranch: '庚寅',
      },
    ]
  }, 
  {
    wcYear: -57,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '五凤',
    stemBranch: '甲子',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚申',
      },
      {
        month: 2,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 3,
        firstDayStemBranch: '己未',
      },
      {
        month: 4,
        firstDayStemBranch: '己丑',
      },
      {
        month: 5,
        firstDayStemBranch: '戊午',
      },
      {
        month: 6,
        firstDayStemBranch: '戊子',
      },
      {
        month: 7,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 8,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 9,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 10,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 11,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 12,
        firstDayStemBranch: '乙酉',
      },
    ]
  }, 
  {
    wcYear: -56,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '五凤',
    stemBranch: '乙丑',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 2,
        firstDayStemBranch: '甲申',
      },
      {
        month: 3,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 4,
        firstDayStemBranch: '癸未',
      },
      {
        month: 5,
        firstDayStemBranch: '壬子',
      },
      {
        month: 6,
        firstDayStemBranch: '壬午',
      },
      {
        month: 7,
        firstDayStemBranch: '壬子',
      },
      {
        month: 8,
        firstDayStemBranch: '辛巳',
      },
      {
        month: -8,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 9,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 10,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 11,
        firstDayStemBranch: '己卯',
      },
      {
        month: 12,
        firstDayStemBranch: '己酉',
      },
    ]
  }, 
  {
    wcYear: -55,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '五凤',
    stemBranch: '丙寅',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 2,
        firstDayStemBranch: '戊申',
      },
      {
        month: 3,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 4,
        firstDayStemBranch: '丁未',
      },
      {
        month: 5,
        firstDayStemBranch: '丙子',
      },
      {
        month: 6,
        firstDayStemBranch: '丙午',
      },
      {
        month: 7,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 8,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 9,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 10,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 11,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 12,
        firstDayStemBranch: '癸卯',
      },
    ]
  }, 
  {
    wcYear: -54,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '五凤',
    stemBranch: '丁卯',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 2,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 3,
        firstDayStemBranch: '壬申',
      },
      {
        month: 4,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 5,
        firstDayStemBranch: '辛未',
      },
      {
        month: 6,
        firstDayStemBranch: '庚子',
      },
      {
        month: 7,
        firstDayStemBranch: '庚午',
      },
      {
        month: 8,
        firstDayStemBranch: '己亥',
      },
      {
        month: 9,
        firstDayStemBranch: '己巳',
      },
      {
        month: 10,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 11,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 12,
        firstDayStemBranch: '丁酉',
      },
    ]
  }, 
  {
    wcYear: -53,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '甘露',
    stemBranch: '戊辰',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 2,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 3,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 4,
        firstDayStemBranch: '丙申',
      },
      {
        month: 5,
        firstDayStemBranch: '乙丑',
      },
      {
        month: -5,
        firstDayStemBranch: '乙未',
      },
      {
        month: 6,
        firstDayStemBranch: '甲子',
      },
      {
        month: 7,
        firstDayStemBranch: '甲午',
      },
      {
        month: 8,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 9,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 10,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 11,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 12,
        firstDayStemBranch: '辛酉',
      },
    ]
  }, 
  {
    wcYear: -52,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '甘露',
    stemBranch: '己巳',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 2,
        firstDayStemBranch: '庚申',
      },
      {
        month: 3,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 4,
        firstDayStemBranch: '庚申',
      },
      {
        month: 5,
        firstDayStemBranch: '己丑',
      },
      {
        month: 6,
        firstDayStemBranch: '己未',
      },
      {
        month: 7,
        firstDayStemBranch: '戊子',
      },
      {
        month: 8,
        firstDayStemBranch: '戊午',
      },
      {
        month: 9,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 10,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 11,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 12,
        firstDayStemBranch: '丙辰',
      },
    ]
  }, 
  {
    wcYear: -51,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '甘露',
    stemBranch: '庚午',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 2,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 3,
        firstDayStemBranch: '甲申',
      },
      {
        month: 4,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 5,
        firstDayStemBranch: '癸未',
      },
      {
        month: 6,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 7,
        firstDayStemBranch: '壬午',
      },
      {
        month: 8,
        firstDayStemBranch: '壬子',
      },
      {
        month: 9,
        firstDayStemBranch: '壬午',
      },
      {
        month: 10,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 11,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 12,
        firstDayStemBranch: '庚戌',
      },
    ]
  }, 
  {
    wcYear: -50,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '甘露',
    stemBranch: '辛未',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 2,
        firstDayStemBranch: '己酉',
      },
      {
        month: -2,
        firstDayStemBranch: '己卯',
      },
      {
        month: 3,
        firstDayStemBranch: '戊申',
      },
      {
        month: 4,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 5,
        firstDayStemBranch: '丁未',
      },
      {
        month: 6,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 7,
        firstDayStemBranch: '丙午',
      },
      {
        month: 8,
        firstDayStemBranch: '丙子',
      },
      {
        month: 9,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 10,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 11,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 12,
        firstDayStemBranch: '甲戌',
      },
    ]
  }, 
  {
    wcYear: -49,
    dynasty: '西汉',
    emperor: '宣帝',
    chineseEraName: '黄龙',
    stemBranch: '壬申',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 2,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 3,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 4,
        firstDayStemBranch: '壬申',
      },
      {
        month: 5,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 6,
        firstDayStemBranch: '辛未',
      },
      {
        month: 7,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 8,
        firstDayStemBranch: '庚午',
      },
      {
        month: 9,
        firstDayStemBranch: '庚子',
      },
      {
        month: 10,
        firstDayStemBranch: '己巳',
      },
      {
        month: 11,
        firstDayStemBranch: '己亥',
      },
      {
        month: 12,
        firstDayStemBranch: '戊辰',
      },
    ]
  }, 
  {
    wcYear: -48,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '初元',
    stemBranch: '癸酉',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 2,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 3,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 4,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 5,
        firstDayStemBranch: '丙申',
      },
      {
        month: 6,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 7,
        firstDayStemBranch: '乙未',
      },
      {
        month: 8,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 9,
        firstDayStemBranch: '甲午',
      },
      {
        month: 10,
        firstDayStemBranch: '甲子',
      },
      {
        month: -10,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 11,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 12,
        firstDayStemBranch: '壬辰',
      },
    ]
  }, 
  {
    wcYear: -47,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '初元',
    stemBranch: '甲戌',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 2,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 3,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 4,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 5,
        firstDayStemBranch: '庚申',
      },
      {
        month: 6,
        firstDayStemBranch: '己丑',
      },
      {
        month: 7,
        firstDayStemBranch: '己未',
      },
      {
        month: 8,
        firstDayStemBranch: '己丑',
      },
      {
        month: 9,
        firstDayStemBranch: '戊午',
      },
      {
        month: 10,
        firstDayStemBranch: '戊子',
      },
      {
        month: 11,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 12,
        firstDayStemBranch: '丁亥',
      },
    ]
  }, 
  {
    wcYear: -46,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '初元',
    stemBranch: '乙亥',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 2,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 3,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 4,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 5,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 6,
        firstDayStemBranch: '甲申',
      },
      {
        month: 7,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 8,
        firstDayStemBranch: '癸未',
      },
      {
        month: 9,
        firstDayStemBranch: '壬子',
      },
      {
        month: 10,
        firstDayStemBranch: '壬午',
      },
      {
        month: 11,
        firstDayStemBranch: '壬子',
      },
      {
        month: 12,
        firstDayStemBranch: '辛巳',
      },
    ]
  }, 
  {
    wcYear: -45,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '初元',
    stemBranch: '丙子',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 2,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 3,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 4,
        firstDayStemBranch: '己卯',
      },
      {
        month: 5,
        firstDayStemBranch: '己酉',
      },
      {
        month: 6,
        firstDayStemBranch: '戊寅',
      },
      {
        month: -6,
        firstDayStemBranch: '戊申',
      },
      {
        month: 7,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 8,
        firstDayStemBranch: '丁未',
      },
      {
        month: 9,
        firstDayStemBranch: '丙子',
      },
      {
        month: 10,
        firstDayStemBranch: '丙午',
      },
      {
        month: 11,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 12,
        firstDayStemBranch: '乙巳',
      },
    ]
  }, 
  {
    wcYear: -44,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '初元',
    stemBranch: '丁丑',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 2,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 3,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 4,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 5,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 6,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 7,
        firstDayStemBranch: '壬申',
      },
      {
        month: 8,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 9,
        firstDayStemBranch: '辛未',
      },
      {
        month: 10,
        firstDayStemBranch: '庚子',
      },
      {
        month: 11,
        firstDayStemBranch: '庚午',
      },
      {
        month: 12,
        firstDayStemBranch: '己亥',
      },
    ]
  }, 
  {
    wcYear: -43,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '永光',
    stemBranch: '戊寅',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己巳',
      },
      {
        month: 2,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 3,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 4,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 5,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 6,
        firstDayStemBranch: '丙申',
      },
      {
        month: 7,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 8,
        firstDayStemBranch: '丙申',
      },
      {
        month: 9,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 10,
        firstDayStemBranch: '乙未',
      },
      {
        month: 11,
        firstDayStemBranch: '甲子',
      },
      {
        month: 12,
        firstDayStemBranch: '甲午',
      },
    ]
  }, 
  {
    wcYear: -42,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '永光',
    stemBranch: '己卯',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 2,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 3,
        firstDayStemBranch: '壬戌',
      },
      {
        month: -3,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 4,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 5,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 6,
        firstDayStemBranch: '庚申',
      },
      {
        month: 7,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 8,
        firstDayStemBranch: '己未',
      },
      {
        month: 9,
        firstDayStemBranch: '己丑',
      },
      {
        month: 10,
        firstDayStemBranch: '己未',
      },
      {
        month: 11,
        firstDayStemBranch: '戊子',
      },
      {
        month: 12,
        firstDayStemBranch: '戊午',
      },
    ]
  }, 
  {
    wcYear: -41,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '永光',
    stemBranch: '庚辰',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 2,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 3,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 4,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 5,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 6,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 7,
        firstDayStemBranch: '甲申',
      },
      {
        month: 8,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 9,
        firstDayStemBranch: '癸未',
      },
      {
        month: 10,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 11,
        firstDayStemBranch: '壬午',
      },
      {
        month: 12,
        firstDayStemBranch: '壬子',
      },
    ]
  }, 
  {
    wcYear: -40,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '永光',
    stemBranch: '辛巳',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 2,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 3,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 4,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 5,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 6,
        firstDayStemBranch: '己酉',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '戊申',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 10,
        firstDayStemBranch: '丁未',
      },
      {
        month: 11,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 12,
        firstDayStemBranch: '丙午',
      },
      {
        month: -12,
        firstDayStemBranch: '丙子',
      },
    ]
  }, 
  {
    wcYear: -39,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '永光',
    stemBranch: '壬午',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 2,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 3,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 4,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 5,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 6,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 7,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 8,
        firstDayStemBranch: '壬申',
      },
      {
        month: 9,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 10,
        firstDayStemBranch: '辛未',
      },
      {
        month: 11,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 12,
        firstDayStemBranch: '庚午',
      },
    ]
  }, 
  {
    wcYear: -38,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '建昭',
    stemBranch: '癸未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚子',
      },
      {
        month: 2,
        firstDayStemBranch: '己巳',
      },
      {
        month: 3,
        firstDayStemBranch: '己亥',
      },
      {
        month: 4,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 5,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 6,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 7,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 8,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 9,
        firstDayStemBranch: '丙申',
      },
      {
        month: 10,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 11,
        firstDayStemBranch: '乙未',
      },
      {
        month: 12,
        firstDayStemBranch: '乙丑',
      },
    ]
  }, 
  {
    wcYear: -37,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '建昭',
    stemBranch: '甲申',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲午',
      },
      {
        month: 2,
        firstDayStemBranch: '甲子',
      },
      {
        month: 3,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 4,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 5,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 6,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 7,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 8,
        firstDayStemBranch: '辛酉',
      },
      {
        month: -8,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 9,
        firstDayStemBranch: '庚申',
      },
      {
        month: 10,
        firstDayStemBranch: '己丑',
      },
      {
        month: 11,
        firstDayStemBranch: '己未',
      },
      {
        month: 12,
        firstDayStemBranch: '戊子',
      },
    ]
  }, 
  {
    wcYear: -36,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '建昭',
    stemBranch: '乙酉',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊午',
      },
      {
        month: 2,
        firstDayStemBranch: '戊子',
      },
      {
        month: 3,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 4,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 5,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 6,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 7,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 8,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 9,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 10,
        firstDayStemBranch: '甲申',
      },
      {
        month: 11,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 12,
        firstDayStemBranch: '癸未',
      },
    ]
  }, 
  {
    wcYear: -35,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '建昭',
    stemBranch: '丙戌',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬子',
      },
      {
        month: 2,
        firstDayStemBranch: '壬午',
      },
      {
        month: 3,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 4,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 5,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 6,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 7,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 8,
        firstDayStemBranch: '己卯',
      },
      {
        month: 9,
        firstDayStemBranch: '己酉',
      },
      {
        month: 10,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 11,
        firstDayStemBranch: '戊申',
      },
      {
        month: 12,
        firstDayStemBranch: '丁丑',
      },
    ]
  }, 
  {
    wcYear: -34,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '建昭',
    stemBranch: '丁亥',
    year: 5,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁未',
      },
      {
        month: 2,
        firstDayStemBranch: '丙子',
      },
      {
        month: 3,
        firstDayStemBranch: '丙午',
      },
      {
        month: 4,
        firstDayStemBranch: '乙亥',
      },
      {
        month: -4,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 5,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 6,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 7,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 8,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 9,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 10,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 11,
        firstDayStemBranch: '壬申',
      },
      {
        month: 12,
        firstDayStemBranch: '辛丑',
      },
    ]
  }, 
  {
    wcYear: -33,
    dynasty: '西汉',
    emperor: '元帝',
    chineseEraName: '竟宁',
    stemBranch: '戊子',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛未',
      },
      {
        month: 2,
        firstDayStemBranch: '庚子',
      },
      {
        month: 3,
        firstDayStemBranch: '庚午',
      },
      {
        month: 4,
        firstDayStemBranch: '己亥',
      },
      {
        month: 5,
        firstDayStemBranch: '己巳',
      },
      {
        month: 6,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 7,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 8,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 9,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 10,
        firstDayStemBranch: '丙申',
      },
      {
        month: 11,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 12,
        firstDayStemBranch: '丙申',
      },
    ]
  }, 
  {
    wcYear: -32,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '建始',
    stemBranch: '己丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 2,
        firstDayStemBranch: '乙未',
      },
      {
        month: 3,
        firstDayStemBranch: '甲子',
      },
      {
        month: 4,
        firstDayStemBranch: '甲午',
      },
      {
        month: 5,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 6,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 7,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 8,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 9,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 10,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 11,
        firstDayStemBranch: '庚申',
      },
      {
        month: 12,
        firstDayStemBranch: '庚寅',
      },
    ]
  }, 
  {
    wcYear: -31,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '建始',
    stemBranch: '庚寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己未',
      },
      {
        month: -1,
        firstDayStemBranch: '己丑',
      },
      {
        month: 2,
        firstDayStemBranch: '戊午',
      },
      {
        month: 3,
        firstDayStemBranch: '戊子',
      },
      {
        month: 4,
        firstDayStemBranch: '戊午',
      },
      {
        month: 5,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 6,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 7,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 8,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 9,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 10,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 11,
        firstDayStemBranch: '甲申',
      },
      {
        month: 12,
        firstDayStemBranch: '甲寅',
      },
    ]
  }, 
  {
    wcYear: -30,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '建始',
    stemBranch: '辛卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸未',
      },
      {
        month: 2,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 3,
        firstDayStemBranch: '壬午',
      },
      {
        month: 4,
        firstDayStemBranch: '壬子',
      },
      {
        month: 5,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 6,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 7,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 8,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 9,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 10,
        firstDayStemBranch: '己酉',
      },
      {
        month: 11,
        firstDayStemBranch: '己卯',
      },
      {
        month: 12,
        firstDayStemBranch: '戊申',
      },
    ]
  }, 
  {
    wcYear: -29,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '建始',
    stemBranch: '壬辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 2,
        firstDayStemBranch: '丁未',
      },
      {
        month: 3,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 4,
        firstDayStemBranch: '丙午',
      },
      {
        month: 5,
        firstDayStemBranch: '丙子',
      },
      {
        month: 6,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 7,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 8,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 9,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 10,
        firstDayStemBranch: '癸卯',
      },
      {
        month: -10,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 11,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 12,
        firstDayStemBranch: '壬申',
      },
    ]
  }, 
  {
    wcYear: -28,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '河平',
    stemBranch: '癸巳',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 2,
        firstDayStemBranch: '辛未',
      },
      {
        month: 3,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 4,
        firstDayStemBranch: '庚午',
      },
      {
        month: 5,
        firstDayStemBranch: '庚子',
      },
      {
        month: 6,
        firstDayStemBranch: '己巳',
      },
      {
        month: 7,
        firstDayStemBranch: '己亥',
      },
      {
        month: 8,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 9,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 10,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 11,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 12,
        firstDayStemBranch: '丙寅',
      },
    ]
  }, 
  {
    wcYear: -27,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '河平',
    stemBranch: '甲午',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙申',
      },
      {
        month: 2,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 3,
        firstDayStemBranch: '乙未',
      },
      {
        month: 4,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 5,
        firstDayStemBranch: '甲午',
      },
      {
        month: 6,
        firstDayStemBranch: '甲子',
      },
      {
        month: 7,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 8,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 9,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 10,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 11,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 12,
        firstDayStemBranch: '辛酉',
      },
    ]
  }, 
  {
    wcYear: -26,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '河平',
    stemBranch: '乙未',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 2,
        firstDayStemBranch: '庚申',
      },
      {
        month: 3,
        firstDayStemBranch: '己丑',
      },
      {
        month: 4,
        firstDayStemBranch: '己未',
      },
      {
        month: 5,
        firstDayStemBranch: '戊子',
      },
      {
        month: 6,
        firstDayStemBranch: '戊午',
      },
      {
        month: -6,
        firstDayStemBranch: '戊子',
      },
      {
        month: 7,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 8,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 9,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 10,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 11,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 12,
        firstDayStemBranch: '乙酉',
      },
    ]
  }, 
  {
    wcYear: -25,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '河平',
    stemBranch: '丙申',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 2,
        firstDayStemBranch: '甲申',
      },
      {
        month: 3,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 4,
        firstDayStemBranch: '癸未',
      },
      {
        month: 5,
        firstDayStemBranch: '壬子',
      },
      {
        month: 6,
        firstDayStemBranch: '壬午',
      },
      {
        month: 7,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 8,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 9,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 10,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 11,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 12,
        firstDayStemBranch: '己卯',
      },
    ]
  }, 
  {
    wcYear: -24,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '阳朔',
    stemBranch: '丁酉',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己酉',
      },
      {
        month: 2,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 3,
        firstDayStemBranch: '戊申',
      },
      {
        month: 4,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 5,
        firstDayStemBranch: '丁未',
      },
      {
        month: 6,
        firstDayStemBranch: '丙子',
      },
      {
        month: 7,
        firstDayStemBranch: '丙午',
      },
      {
        month: 8,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 9,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 10,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 11,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 12,
        firstDayStemBranch: '癸酉',
      },
    ]
  }, 
  {
    wcYear: -23,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '阳朔',
    stemBranch: '戊戌',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 2,
        firstDayStemBranch: '壬申',
      },
      {
        month: 3,
        firstDayStemBranch: '壬寅',
      },
      {
        month: -3,
        firstDayStemBranch: '壬申',
      },
      {
        month: 4,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 5,
        firstDayStemBranch: '辛未',
      },
      {
        month: 6,
        firstDayStemBranch: '庚子',
      },
      {
        month: 7,
        firstDayStemBranch: '庚午',
      },
      {
        month: 8,
        firstDayStemBranch: '己亥',
      },
      {
        month: 9,
        firstDayStemBranch: '己巳',
      },
      {
        month: 10,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 11,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 12,
        firstDayStemBranch: '丁酉',
      },
    ]
  }, 
  {
    wcYear: -22,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '阳朔',
    stemBranch: '己亥',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 2,
        firstDayStemBranch: '丙申',
      },
      {
        month: 3,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 4,
        firstDayStemBranch: '乙未',
      },
      {
        month: 5,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 6,
        firstDayStemBranch: '乙未',
      },
      {
        month: 7,
        firstDayStemBranch: '甲子',
      },
      {
        month: 8,
        firstDayStemBranch: '甲午',
      },
      {
        month: 9,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 10,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 11,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 12,
        firstDayStemBranch: '壬辰',
      },
    ]
  }, 
  {
    wcYear: -21,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '阳朔',
    stemBranch: '庚子',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 2,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 3,
        firstDayStemBranch: '庚申',
      },
      {
        month: 4,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 5,
        firstDayStemBranch: '己未',
      },
      {
        month: 6,
        firstDayStemBranch: '己丑',
      },
      {
        month: 7,
        firstDayStemBranch: '戊午',
      },
      {
        month: 8,
        firstDayStemBranch: '戊子',
      },
      {
        month: 9,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 10,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 11,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 12,
        firstDayStemBranch: '丙戌',
      },
      {
        month: -12,
        firstDayStemBranch: '丙辰',
      },
    ]
  }, 
  {
    wcYear: -20,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '鸿嘉',
    stemBranch: '辛丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 2,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 3,
        firstDayStemBranch: '甲申',
      },
      {
        month: 4,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 5,
        firstDayStemBranch: '癸未',
      },
      {
        month: 6,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 7,
        firstDayStemBranch: '壬午',
      },
      {
        month: 8,
        firstDayStemBranch: '壬子',
      },
      {
        month: 9,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 10,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 11,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 12,
        firstDayStemBranch: '庚戌',
      },
    ]
  }, 
  {
    wcYear: -19,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '鸿嘉',
    stemBranch: '壬寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 2,
        firstDayStemBranch: '己酉',
      },
      {
        month: 3,
        firstDayStemBranch: '己卯',
      },
      {
        month: 4,
        firstDayStemBranch: '戊申',
      },
      {
        month: 5,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 6,
        firstDayStemBranch: '丁未',
      },
      {
        month: 7,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 8,
        firstDayStemBranch: '丙午',
      },
      {
        month: 9,
        firstDayStemBranch: '丙子',
      },
      {
        month: 10,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 11,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 12,
        firstDayStemBranch: '甲辰',
      },
    ]
  }, 
  {
    wcYear: -18,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '鸿嘉',
    stemBranch: '癸卯',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 2,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 3,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 4,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 5,
        firstDayStemBranch: '壬申',
      },
      {
        month: 6,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 7,
        firstDayStemBranch: '辛未',
      },
      {
        month: 8,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 9,
        firstDayStemBranch: '庚午',
      },
      {
        month: -9,
        firstDayStemBranch: '庚子',
      },
      {
        month: 10,
        firstDayStemBranch: '己巳',
      },
      {
        month: 11,
        firstDayStemBranch: '己亥',
      },
      {
        month: 12,
        firstDayStemBranch: '戊辰',
      },
    ]
  }, 
  {
    wcYear: -17,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '鸿嘉',
    stemBranch: '甲辰',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 2,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 3,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 4,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 5,
        firstDayStemBranch: '丙申',
      },
      {
        month: 6,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 7,
        firstDayStemBranch: '乙未',
      },
      {
        month: 8,
        firstDayStemBranch: '甲子',
      },
      {
        month: 9,
        firstDayStemBranch: '甲午',
      },
      {
        month: 10,
        firstDayStemBranch: '甲子',
      },
      {
        month: 11,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 12,
        firstDayStemBranch: '癸亥',
      },
    ]
  }, 
  {
    wcYear: -16,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '永始',
    stemBranch: '乙巳',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 2,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 3,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 4,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 5,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 6,
        firstDayStemBranch: '庚申',
      },
      {
        month: 7,
        firstDayStemBranch: '己丑',
      },
      {
        month: 8,
        firstDayStemBranch: '己未',
      },
      {
        month: 9,
        firstDayStemBranch: '戊子',
      },
      {
        month: 10,
        firstDayStemBranch: '戊午',
      },
      {
        month: 11,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 12,
        firstDayStemBranch: '丁巳',
      },
    ]
  }, 
  {
    wcYear: -15,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '永始',
    stemBranch: '丙午',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 2,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 3,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 4,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 5,
        firstDayStemBranch: '乙酉',
      },
      {
        month: -5,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 6,
        firstDayStemBranch: '甲申',
      },
      {
        month: 7,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 8,
        firstDayStemBranch: '癸未',
      },
      {
        month: 9,
        firstDayStemBranch: '壬子',
      },
      {
        month: 10,
        firstDayStemBranch: '壬午',
      },
      {
        month: 11,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 12,
        firstDayStemBranch: '辛巳',
      },
    ]
  }, 
  {
    wcYear: -14,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '永始',
    stemBranch: '丁未',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 2,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 3,
        firstDayStemBranch: '己酉',
      },
      {
        month: 4,
        firstDayStemBranch: '己卯',
      },
      {
        month: 5,
        firstDayStemBranch: '己酉',
      },
      {
        month: 6,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 7,
        firstDayStemBranch: '戊申',
      },
      {
        month: 8,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 9,
        firstDayStemBranch: '丁未',
      },
      {
        month: 10,
        firstDayStemBranch: '丙子',
      },
      {
        month: 11,
        firstDayStemBranch: '丙午',
      },
      {
        month: 12,
        firstDayStemBranch: '乙亥',
      },
    ]
  }, 
  {
    wcYear: -13,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '永始',
    stemBranch: '戊申',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 2,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 3,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 4,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 5,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 6,
        firstDayStemBranch: '壬申',
      },
      {
        month: 7,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 8,
        firstDayStemBranch: '壬申',
      },
      {
        month: 9,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 10,
        firstDayStemBranch: '辛未',
      },
      {
        month: 11,
        firstDayStemBranch: '庚子',
      },
      {
        month: 12,
        firstDayStemBranch: '庚午',
      },
    ]
  }, 
  {
    wcYear: -12,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '元延',
    stemBranch: '己酉',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '己亥',
      },
      {
        month: -1,
        firstDayStemBranch: '己巳',
      },
      {
        month: 2,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 3,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 4,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 5,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 6,
        firstDayStemBranch: '丙申',
      },
      {
        month: 7,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 8,
        firstDayStemBranch: '乙未',
      },
      {
        month: 9,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 10,
        firstDayStemBranch: '甲午',
      },
      {
        month: 11,
        firstDayStemBranch: '甲子',
      },
      {
        month: 12,
        firstDayStemBranch: '甲午',
      },
    ]
  }, 
  {
    wcYear: -11,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '元延',
    stemBranch: '庚戌',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 2,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 3,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 4,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 5,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 6,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 7,
        firstDayStemBranch: '庚申',
      },
      {
        month: 8,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 9,
        firstDayStemBranch: '己未',
      },
      {
        month: 10,
        firstDayStemBranch: '己丑',
      },
      {
        month: 11,
        firstDayStemBranch: '戊午',
      },
      {
        month: 12,
        firstDayStemBranch: '戊子',
      },
    ]
  }, 
  {
    wcYear: -10,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '元延',
    stemBranch: '辛亥',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 2,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 3,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 4,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 5,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 6,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 7,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 8,
        firstDayStemBranch: '甲申',
      },
      {
        month: 9,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 10,
        firstDayStemBranch: '癸未',
      },
      {
        month: -10,
        firstDayStemBranch: '癸丑',
      },
      {
        month: 11,
        firstDayStemBranch: '壬午',
      },
      {
        month: 12,
        firstDayStemBranch: '壬子',
      },
    ]
  }, 
  {
    wcYear: -9,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '元延',
    stemBranch: '壬子',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 2,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 3,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 4,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 5,
        firstDayStemBranch: '己卯',
      },
      {
        month: 6,
        firstDayStemBranch: '己酉',
      },
      {
        month: 7,
        firstDayStemBranch: '己卯',
      },
      {
        month: 8,
        firstDayStemBranch: '戊申',
      },
      {
        month: 9,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 10,
        firstDayStemBranch: '丁未',
      },
      {
        month: 11,
        firstDayStemBranch: '丁丑',
      },
      {
        month: 12,
        firstDayStemBranch: '丙午',
      },
    ]
  }, 
  {
    wcYear: -8,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '绥和',
    stemBranch: '癸丑',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丙子',
      },
      {
        month: 2,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 3,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 4,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 5,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 6,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 7,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 8,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 9,
        firstDayStemBranch: '壬申',
      },
      {
        month: 10,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 11,
        firstDayStemBranch: '辛未',
      },
      {
        month: 12,
        firstDayStemBranch: '辛丑',
      },
    ]
  }, 
  {
    wcYear: -7,
    dynasty: '西汉',
    emperor: '成帝',
    chineseEraName: '绥和',
    stemBranch: '甲寅',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '庚午',
      },
      {
        month: 2,
        firstDayStemBranch: '庚子',
      },
      {
        month: 3,
        firstDayStemBranch: '己巳',
      },
      {
        month: 4,
        firstDayStemBranch: '己亥',
      },
      {
        month: 5,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 6,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 7,
        firstDayStemBranch: '丁卯',
      },
      {
        month: -7,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 8,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 9,
        firstDayStemBranch: '丙申',
      },
      {
        month: 10,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 11,
        firstDayStemBranch: '乙未',
      },
      {
        month: 12,
        firstDayStemBranch: '甲子',
      },
    ]
  }, 
  {
    wcYear: -6,
    dynasty: '西汉',
    emperor: '哀帝',
    chineseEraName: '建平',
    stemBranch: '乙卯',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '甲午',
      },
      {
        month: 2,
        firstDayStemBranch: '甲子',
      },
      {
        month: 3,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 4,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 5,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 6,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 7,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 8,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 9,
        firstDayStemBranch: '庚寅',
      },
      {
        month: 10,
        firstDayStemBranch: '庚申',
      },
      {
        month: 11,
        firstDayStemBranch: '己丑',
      },
      {
        month: 12,
        firstDayStemBranch: '己未',
      },
    ]
  }, 
  {
    wcYear: -5,
    dynasty: '西汉',
    emperor: '哀帝',
    chineseEraName: '建平',
    stemBranch: '丙辰',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '戊子',
      },
      {
        month: 2,
        firstDayStemBranch: '戊午',
      },
      {
        month: 3,
        firstDayStemBranch: '丁亥',
      },
      {
        month: 4,
        firstDayStemBranch: '丁巳',
      },
      {
        month: 5,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 6,
        firstDayStemBranch: '丙辰',
      },
      {
        month: 7,
        firstDayStemBranch: '丙戌',
      },
      {
        month: 8,
        firstDayStemBranch: '乙卯',
      },
      {
        month: 9,
        firstDayStemBranch: '乙酉',
      },
      {
        month: 10,
        firstDayStemBranch: '甲寅',
      },
      {
        month: 11,
        firstDayStemBranch: '甲申',
      },
      {
        month: 12,
        firstDayStemBranch: '癸丑',
      },
    ]
  }, 
  {
    wcYear: -4,
    dynasty: '西汉',
    emperor: '哀帝',
    chineseEraName: '建平',
    stemBranch: '丁巳',
    year: 3,
    months: [
      {
        month: 1,
        firstDayStemBranch: '癸未',
      },
      {
        month: 2,
        firstDayStemBranch: '壬子',
      },
      {
        month: 3,
        firstDayStemBranch: '壬午',
      },
      {
        month: -3,
        firstDayStemBranch: '辛亥',
      },
      {
        month: 4,
        firstDayStemBranch: '辛巳',
      },
      {
        month: 5,
        firstDayStemBranch: '庚戌',
      },
      {
        month: 6,
        firstDayStemBranch: '庚辰',
      },
      {
        month: 7,
        firstDayStemBranch: '己酉',
      },
      {
        month: 8,
        firstDayStemBranch: '己卯',
      },
      {
        month: 9,
        firstDayStemBranch: '戊申',
      },
      {
        month: 10,
        firstDayStemBranch: '戊寅',
      },
      {
        month: 11,
        firstDayStemBranch: '戊申',
      },
      {
        month: 12,
        firstDayStemBranch: '丁丑',
      },
    ]
  }, 
  {
    wcYear: -3,
    dynasty: '西汉',
    emperor: '哀帝',
    chineseEraName: '建平',
    stemBranch: '戊午',
    year: 4,
    months: [
      {
        month: 1,
        firstDayStemBranch: '丁未',
      },
      {
        month: 2,
        firstDayStemBranch: '丙子',
      },
      {
        month: 3,
        firstDayStemBranch: '丙午',
      },
      {
        month: 4,
        firstDayStemBranch: '乙亥',
      },
      {
        month: 5,
        firstDayStemBranch: '乙巳',
      },
      {
        month: 6,
        firstDayStemBranch: '甲戌',
      },
      {
        month: 7,
        firstDayStemBranch: '甲辰',
      },
      {
        month: 8,
        firstDayStemBranch: '癸酉',
      },
      {
        month: 9,
        firstDayStemBranch: '癸卯',
      },
      {
        month: 10,
        firstDayStemBranch: '壬申',
      },
      {
        month: 11,
        firstDayStemBranch: '壬寅',
      },
      {
        month: 12,
        firstDayStemBranch: '辛未',
      },
    ]
  },
  {
    wcYear: -2,
    dynasty: '西汉',
    emperor: '哀帝',
    chineseEraName: '元寿',
    stemBranch: '己未',
    year: 1,
    months: [
      {
        month: 1,
        firstDayStemBranch: '辛丑',
      },
      {
        month: 2,
        firstDayStemBranch: '辛未',
      },
      {
        month: 3,
        firstDayStemBranch: '庚子',
      },
      {
        month: 4,
        firstDayStemBranch: '庚午',
      },
      {
        month: 5,
        firstDayStemBranch: '己亥',
      },
      {
        month: 6,
        firstDayStemBranch: '己巳',
      },
      {
        month: 7,
        firstDayStemBranch: '戊戌',
      },
      {
        month: 8,
        firstDayStemBranch: '戊辰',
      },
      {
        month: 9,
        firstDayStemBranch: '丁酉',
      },
      {
        month: 10,
        firstDayStemBranch: '丁卯',
      },
      {
        month: 11,
        firstDayStemBranch: '丙申',
      },
      {
        month: -11,
        firstDayStemBranch: '丙寅',
      },
      {
        month: 12,
        firstDayStemBranch: '乙未',
      },
    ]
  },
  {
    wcYear: -1,
    dynasty: '西汉',
    emperor: '哀帝',
    stemBranch: '庚申',
    chineseEraName: '元寿',
    year: 2,
    months: [
      {
        month: 1,
        firstDayStemBranch: '乙丑',
      },
      {
        month: 2,
        firstDayStemBranch: '甲午',
      },
      {
        month: 3,
        firstDayStemBranch: '甲子',
      },
      {
        month: 4,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 5,
        firstDayStemBranch: '癸亥',
      },
      {
        month: 6,
        firstDayStemBranch: '癸巳',
      },
      {
        month: 7,
        firstDayStemBranch: '壬戌',
      },
      {
        month: 8,
        firstDayStemBranch: '壬辰',
      },
      {
        month: 9,
        firstDayStemBranch: '辛酉',
      },
      {
        month: 10,
        firstDayStemBranch: '辛卯',
      },
      {
        month: 11,
        firstDayStemBranch: '庚申',
      },
      {
        month: 12,
        firstDayStemBranch: '庚寅',
      },
    ]
  },
];

export const endDayStr = '0001-02-11'; // 汉平帝元始元年1月1号对应的公历日期，可以此倒推之前的公历日期
export const endDayStemBranch: StemBranch = '己未';

let cloneEndDayStemBranch: StemBranch = endDayStemBranch;
[...data].reverse().forEach((item) => {
  [...item.months].reverse().forEach((month) => {
    month.days = getBetweenDays(
      month.firstDayStemBranch,
      cloneEndDayStemBranch,
    );
    cloneEndDayStemBranch = month.firstDayStemBranch;
  });
});

export default data;