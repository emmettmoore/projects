import { Fill, Chamber } from './types';

export default (chamber: Chamber): Chamber => {
  return chamber.map((row) => {
    return row.map((c) => {
      return c === Fill.NewRock ? Fill.Rock : c;
    });
  });
};
