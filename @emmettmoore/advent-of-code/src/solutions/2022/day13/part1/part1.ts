import getData from '../getData';
import { isInRightOrder, NestedPair, parseLine } from '../utils';

/*
  If both values are integers, the lower integer should come first. If the left integer is lower than the right integer, the inputs are in the right order. If the left integer is higher than the right integer, the inputs are not in the right order. Otherwise, the inputs are the same integer; continue checking the next part of the input.


  If exactly one value is an integer, convert the integer to a list which contains that integer as its only value, then retry the comparison. For example, if comparing [0,0,0] and 2, convert the right value to [2] (a list containing 2); the result is then found by instead comparing [0,0,0] and [2].

*/

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
