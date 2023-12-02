import { WIDTH, Chamber, Fill } from '../../../utils';

export default (chamber: Chamber): Array<number> => {
  const foundHeights = new Array<boolean>(WIDTH).fill(false);
  const columnHeights = new Array<number>(WIDTH).fill(0);
  for (let y = 0; y < chamber.length; y += 1) {
    const row = chamber[y];

    for (let x = 0; x < WIDTH; x += 1) {
      const cell = row[x];
      if (!foundHeights[x] && cell === Fill.Rock) {
        foundHeights[x] = true;
        columnHeights[x] = chamber.length - y;
      }
    }

    if (foundHeights.every(Boolean)) {
      return columnHeights;
    }
  }

  return columnHeights;
};
