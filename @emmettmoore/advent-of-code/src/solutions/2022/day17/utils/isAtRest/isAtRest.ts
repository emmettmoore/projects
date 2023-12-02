import { Chamber, Fill } from '../types';

const hasBottomCollision = (
  currentRow: Array<Fill>,
  nextRow: Array<Fill>
): boolean => {
  for (let i = 0; i < currentRow.length; i += 1) {
    if (currentRow[i] === Fill.NewRock && nextRow[i] === Fill.Rock) {
      return true;
    }
  }
  return false;
};

export default (chamber: Chamber): boolean => {
  let i = 0;
  let foundFirstNewRockRow = false;
  let currentRowHasNewRock = false;
  while (i < chamber.length) {
    if (i === chamber.length - 1) {
      // at floor
      const bottomRow = chamber[i];
      return bottomRow.includes(Fill.NewRock);
    }

    const currentRow = chamber[i];
    const nextRow = chamber[i + 1];

    i += 1;
    if (currentRow.includes(Fill.NewRock)) {
      foundFirstNewRockRow = true;
      currentRowHasNewRock = true;
    } else {
      currentRowHasNewRock = false;
    }

    if (!foundFirstNewRockRow) {
      continue;
    }

    if (!currentRowHasNewRock) {
      // moved past new rock, not at rest.
      break;
    }

    if (hasBottomCollision(currentRow, nextRow)) {
      return true;
    }
  }

  return false;
};
