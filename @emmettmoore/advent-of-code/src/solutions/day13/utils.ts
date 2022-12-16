import getData from './getData';

export type ValueOrArray = number | ValueOrArray[];
export type NestedArray = ValueOrArray;

export const parseLine = (line: string): Array<NestedArray> => {
  return JSON.parse(line);
};

export interface NestedPair {
  left: Array<NestedArray>;
  right: Array<NestedArray>;
}

export const isInRightOrder = (nestedPair: NestedPair): boolean | null => {
  const { left, right } = nestedPair;
  while (left.length > 0) {
    if (right.length < 1) {
      return false;
    }
    const l = left.shift();
    const r = right.shift();

    if (l === undefined || r === undefined) {
      throw new Error();
    }

    if (typeof l === `number` && typeof r === `number`) {
      // both integers
      if (l > r) {
        return false;
      }
      if (l < r) {
        return true;
      }
    } else {
      const isOrdered = isInRightOrder({
        left: Array.isArray(l) ? l : [l],
        right: Array.isArray(r) ? r : [r],
      });
      if (isOrdered !== null) {
        return isOrdered;
      }
    }
  }

  if (right.length === 0) {
    return null;
  }
  return true;
};

export default async (): Promise<number> => {
  const data = getData();

  const allPairs: Array<NestedPair> = data.map(([lineLeft, lineRight]) => {
    return {
      left: parseLine(lineLeft),
      right: parseLine(lineRight),
    };
  });

  let sum = 0;
  allPairs.map((pair, i) => {
    const pairIsInRightOrder = isInRightOrder(pair);
    if (pairIsInRightOrder) {
      sum += i + 1;
    }
  });

  return sum;
};
