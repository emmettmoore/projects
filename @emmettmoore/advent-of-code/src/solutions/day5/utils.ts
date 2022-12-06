export const getStacks = (): Array<Array<string>> => {
  // copied from the puzzle input (d5p1.txt)
  return [
    `TDWZVP`,
    `LSWVFJD`,
    `ZMLSVTBH`,
    `RSJ`,
    `CZBGFMLW`,
    `QWVHZRGB`,
    `VJPCBDN`,
    `PTBQ`,
    `HGZRC`,
  ].map((s) => {
    return s.split(``);
  });
};

export const parseMoves = (moves: Array<Array<string>>): Array<Move> => {
  return moves.map((move) => {
    return {
      num: parseInt(move[1], 10),
      from: parseInt(move[3], 10) - 1, // translate to array index position
      to: parseInt(move[5], 10) - 1, // translate to array index position
    };
  });
};

export interface Move {
  num: number;
  from: number;
  to: number;
}
