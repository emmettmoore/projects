import { Fill, Chamber } from './types';

const getBottomOfNewRock = (chamber: Chamber): number => {
  let i = 0;
  let foundFirstNewRockRow = false;
  let currentRowHasNewRock = false;

  while (i < chamber.length - 1) {
    const currentRow = chamber[i];
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
  }

  return i;
};

export default (chamber: Chamber): Chamber => {
  // trick is to start at bottom and work way up

  const bottomOfRock = getBottomOfNewRock(chamber);

  for (let i = bottomOfRock; i >= 0; i -= 1) {
    const sourceRow = chamber[i];
    const destRow = chamber[i + 1];

    for (let j = 0; j < sourceRow.length; j += 1) {
      if (sourceRow[j] === Fill.NewRock) {
        destRow[j] = Fill.NewRock;
        sourceRow[j] = Fill.Air;
      }
    }
  }

  return chamber;
};
