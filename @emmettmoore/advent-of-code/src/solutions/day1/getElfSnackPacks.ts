import { getInput } from '../../utils';

export default (): Array<Array<number>> => {
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

  return elfSnackPacks;
};
