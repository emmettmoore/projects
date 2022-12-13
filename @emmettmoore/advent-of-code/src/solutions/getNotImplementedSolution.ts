import { SolutionDay } from '../types';
import { NotImplementedError } from '../errors';

export default (): SolutionDay => {
  return {
    part1: (): Promise<string> => {
      throw new NotImplementedError();
    },
    part2: (): Promise<string> => {
      throw new NotImplementedError();
    },
  };
};
