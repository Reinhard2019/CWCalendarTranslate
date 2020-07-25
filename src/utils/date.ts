import { StemBranch } from '../types';
import stemBranchList from '../data/stemBranch.json';

export function getBetweenDays(startStemBranch: StemBranch, endStemBranch: StemBranch) {
  const startIndex = stemBranchList.findIndex((value: StemBranch) => value === startStemBranch);
  let endIndex = stemBranchList.findIndex((value: StemBranch) => value === endStemBranch);
  if (startIndex > endIndex) {
    // 干支 60 为一循环，如果 endIndex 小于 startIndex，代表进入下一循环，需要加上 60。
    endIndex += 60;
  }

  return endIndex - startIndex; // 间隔天数
}