import getData from '../getData';
import { NestedArray, NestedPair, parseLine } from '../utils';

export const compare = (nestedPair: NestedPair): number => {
  const { left, right } = nestedPair;
  for (let i = 0; i < left.length; i += 1) {
    if (right.length <= i) {
      return 1;
    }
    const l = left[i];
    const r = right[i];

    if (typeof l === `number` && typeof r === `number`) {
      // both integers
      if (l > r) {
        return 1;
      }
      if (l < r) {
        return -1;
      }
    } else {
      const c = compare({
        left: Array.isArray(l) ? l : [l],
        right: Array.isArray(r) ? r : [r],
      });
      if (c !== 0) {
        return c;
      }
    }
  }

  if (right.length === left.length) {
    return 0;
  }
  return -1;
};

export default async (): Promise<number> => {
  const data = getData();

  const allNestedArrays = new Array<NestedArray[]>();
  data.forEach(([lineLeft, lineRight]) => {
    allNestedArrays.push(parseLine(lineLeft));
    allNestedArrays.push(parseLine(lineRight));
  });

  allNestedArrays.push([[2]]);
  allNestedArrays.push([[6]]);

  const sorted = allNestedArrays.sort((left, right): number => {
    return compare({
      left,
      right,
    });
  });

  const mults = new Array<number>();
  sorted.forEach((s, i) => {
    if (
      Array.isArray(s) &&
      Array.isArray(s[0]) &&
      (s[0][0] === 2 || s[0][0] === 6) &&
      s.length === 1 &&
      s[0].length === 1
    ) {
      mults.push(i + 1);
    }
  });

  if (mults.length !== 2) {
    throw new Error();
  }

  return mults[0] * mults[1];
};
