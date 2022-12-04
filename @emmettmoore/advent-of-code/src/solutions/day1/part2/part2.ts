import { NotImplementedError } from '../../../errors';

export default (): string => {
  throw new NotImplementedError();
};
