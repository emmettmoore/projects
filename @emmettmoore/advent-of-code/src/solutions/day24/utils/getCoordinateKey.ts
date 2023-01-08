import { Coordinate } from '../types';

export default (coordinate: Coordinate): string => {
  return `x${coordinate.x}y${coordinate.y}`;
};
