import { AdventDay } from '../types';

export default (s: string): AdventDay | null => {
  if (s in AdventDay) {
    return s as unknown as AdventDay;
  }

  return null;
};
