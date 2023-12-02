import { Position } from './types';

export const getUniquePositions = (positions: Array<Position>): Set<string> => {
  const uniquePositions = new Set<string>();
  positions.forEach((pos) => {
    const key = `x${pos.x}y${pos.y}`;
    uniquePositions.add(key);
  });

  return uniquePositions;
};

export default (positions: Array<Position>): number => {
  const uniquePositions = getUniquePositions(positions);

  return uniquePositions.size;
};
