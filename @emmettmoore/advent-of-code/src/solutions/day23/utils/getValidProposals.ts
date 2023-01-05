import { Proposal } from './getProposal';

import { Coordinate } from './types';

export const getCoordinateKey = (coordinate: Coordinate): string => {
  return `x${coordinate.x}y${coordinate.y}`;
};

export default (proposals: Array<Proposal>): Array<Proposal> => {
  const countMap = new Map<string, number>();
  proposals.forEach((proposal) => {
    const key = getCoordinateKey(proposal.nextCoordinate);
    const value = countMap.get(key);
    if (value === undefined) {
      countMap.set(key, 1);
    } else {
      countMap.set(key, value + 1);
    }
  });

  return proposals.filter((proposal) => {
    const key = getCoordinateKey(proposal.nextCoordinate);
    const count = countMap.get(key);
    if (count === undefined) {
      throw new Error(`unexpected missing count for ${key}`);
    }
    return count === 1;
  });
};
