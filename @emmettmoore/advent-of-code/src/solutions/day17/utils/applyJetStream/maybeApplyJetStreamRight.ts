/* eslint-disable no-constant-condition */
import { WIDTH } from '../constants';
import { Chamber, Fill } from '../types';

const hasRightCollision = (row: Array<Fill>): boolean => {
  const rockX =
    WIDTH -
    [...row].reverse().findIndex((c) => {
      return c === Fill.NewRock;
    }) -
    1;

  if (rockX === -1) {
    throw new Error(`Unexpected rockX`);
  }

  return rockX === WIDTH - 1 || row[rockX + 1] === Fill.Rock;
};

const applyJetStreamRight = (chamber: Chamber): Chamber => {
  return chamber.map((row) => {
    if (row.includes(Fill.NewRock)) {
      const newRow = new Array<Fill>();
      for (let i = 0; i < row.length; i += 1) {
        if (row[i] === Fill.Rock) {
          newRow.push(Fill.Rock);
        } else if (i === 0) {
          newRow.push(Fill.Air);
        } else if (row[i - 1] === Fill.Rock) {
          newRow.push(Fill.Air);
        } else {
          newRow.push(row[i - 1]);
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

    if (hasRightCollision(currentRow)) {
      return chamber;
    }
  }

  return applyJetStreamRight(chamber);
};
