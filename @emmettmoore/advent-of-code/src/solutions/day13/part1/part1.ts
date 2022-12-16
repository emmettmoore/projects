import getData from '../getData';

type ValueOrArray = number | ValueOrArray[];
type NestedArray = ValueOrArray;

const parseLine = (line: string): Array<NestedArray> => {
  return JSON.parse(line);
};

interface NestedPair {
  left: Array<NestedArray>;
  right: Array<NestedArray>;
}

/*
  If both values are integers, the lower integer should come first. If the left integer is lower than the right integer, the inputs are in the right order. If the left integer is higher than the right integer, the inputs are not in the right order. Otherwise, the inputs are the same integer; continue checking the next part of the input.


  If exactly one value is an integer, convert the integer to a list which contains that integer as its only value, then retry the comparison. For example, if comparing [0,0,0] and 2, convert the right value to [2] (a list containing 2); the result is then found by instead comparing [0,0,0] and [2].

*/
const isInRightOrder = (nestedPair: NestedPair): boolean | null => {
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
