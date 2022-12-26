import { Direction } from '../../getData';

export default (directions: Array<Direction>, iter: number): Direction => {
  return directions[iter % directions.length];
};
