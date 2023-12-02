import { Fill, Chamber, WIDTH } from '../../../utils';

const TRUNCATED_LENGTH = 30;

export default (chamber: Chamber): Chamber | null => {
  const res = new Array<boolean>(7).fill(false);
  for (let y = 0; y < Math.min(TRUNCATED_LENGTH, chamber.length); y += 1) {
    const row = chamber[y];
    for (let x = 0; x < WIDTH; x += 1) {
      if (row[x] === Fill.Rock) {
        res[x] = true;
      }
    }
    const blockedUntilRow = res.every((cell) => {
      return cell === true;
    });

    if (blockedUntilRow) {
      return chamber.slice(0, y + 1);
    }
  }

  return null;
};
