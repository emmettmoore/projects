/* eslint-disable no-constant-condition */
import { WIDTH } from '../constants';
import { Chamber, Fill } from '../types';

const hasLeftCollision = (row: Array<Fill>): boolean => {
  const rockX = row.findIndex((c) => {
    return c === Fill.NewRock;
  });

  if (rockX === -1) {
    throw new Error(`Unexpected rockX`);
  }

  return rockX === 0 || row[rockX - 1] === Fill.Rock;
};

const applyJetStreamLeft = (chamber: Chamber): Chamber => {
  return chamber.map((row) => {
    if (row.includes(Fill.NewRock)) {
      const newRow = new Array<Fill>();
      for (let i = 0; i < row.length; i += 1) {
        if (row[i] === Fill.Rock) {
          newRow.push(Fill.Rock);
        } else if (i === WIDTH - 1) {
          newRow.push(Fill.Air);
        } else if (row[i + 1] === Fill.Rock) {
          newRow.push(Fill.Air);
        } else {
          newRow.push(row[i + 1]);
        }
      }
      return newRow;
    }
    return row;
  });
};

export default (chamber: Chamber): Chamber => {
  let i = 0;
  let foundFirstNewRockRow = false;
  let currentRowHasNewRock = false;
  while (i < chamber.length) {
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
      break;
    }

    if (hasLeftCollision(currentRow)) {
      return chamber;
    }
  }

  return applyJetStreamLeft(chamber);
};
