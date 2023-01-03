import { NotImplementedError } from '../../../errors';

export default async (): Promise<string> => {
  throw new NotImplementedError(`Unsolved`);
};
