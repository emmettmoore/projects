/* eslint-disable no-console */
import _ from 'lodash';

import { getInput } from '../../../utils';

export default (): string => {
  const rawInput = getInput(`./input/d1p1.txt`);

  const allLines = rawInput.split(`\n`);

  const elfSnackPacks = new Array<Array<number>>();

  let i = 0;
  let currentElfSnackPack = null;
  while (i < allLines.length) {
    if (currentElfSnackPack === null) {
      currentElfSnackPack = new Array<number>();
    }

    const nextLine = allLines[i];
    if (nextLine === ``) {
      elfSnackPacks.push(currentElfSnackPack);
      currentElfSnackPack = null;
    } else {
      currentElfSnackPack.push(parseInt(nextLine, 10));
    }

    if (currentElfSnackPack && i === allLines.length - 1) {
      elfSnackPacks.push(currentElfSnackPack);
    }

    i += 1;
  }

  const sums: Array<number> = elfSnackPacks.map((snackPack): number => {
    return _.sum(snackPack);
  });

  const maxCalories = Math.max(...sums);

  return maxCalories.toString();
};
