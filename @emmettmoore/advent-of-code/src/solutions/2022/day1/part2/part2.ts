import _ from 'lodash';

import getElfSnackPacks from '../getElfSnackPacks';

export default async (): Promise<number> => {
  const snackPacks = getElfSnackPacks();

  const sums: Array<number> = snackPacks.map((snackPack): number => {
    return _.sum(snackPack);
  });

  const sorted = sums.sort((a, b) => {
    return a - b;
  });

  const top3 = sorted.slice(sums.length - 3);

  return _.sum(top3);
};
