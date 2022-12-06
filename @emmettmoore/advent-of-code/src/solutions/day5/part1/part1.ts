import getData from '../getData';
import { getStacks, Move, parseMoves } from '../utils';
import { InvalidParsingError } from '../../../errors';

export default (): string => {
  const stacks = getStacks();

  const data = getData();
  const moves: Array<Move> = parseMoves(data);

  moves.forEach(({ num, from, to }) => {
    let c: number = num;

    while (c > 0) {
      const popped = stacks[from].pop();
      if (!popped) {
        throw new InvalidParsingError();
      }
      stacks[to].push(popped);
      c -= 1;
    }
  });

  return stacks
    .map((stack) => {
      return stack.pop();
    })
    .join(``);
};
