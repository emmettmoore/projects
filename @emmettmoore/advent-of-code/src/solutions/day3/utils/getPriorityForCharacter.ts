import { InvalidParsingError } from '../../../errors';

export default (c: string): number => {
  if (c.length !== 1) {
    throw new InvalidParsingError();
  }

  const order = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  const score = order.indexOf(c);

  if (score === -1) {
    throw new InvalidParsingError();
  }

  return score + 1;
};
