import getData from '../getData';
import { getStacks, Move, parseMoves } from '../utils';

export default async (): Promise<string> => {
  const stacks = getStacks();

  const data = getData();
  const moves: Array<Move> = parseMoves(data);

  moves.forEach(({ num, from, to }) => {
    const moved = stacks[from].splice(
      stacks[from].length - num,
      stacks[from].length
    );

    stacks[to] = stacks[to].concat(moved);
  });

  return stacks
    .map((stack) => {
      return stack.pop();
    })
    .join(``);
};
