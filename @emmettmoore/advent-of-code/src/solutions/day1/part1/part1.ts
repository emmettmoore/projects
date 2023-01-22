/* eslint-disable no-console */
import _ from 'lodash';
import getElfSnackPacks from '../getElfSnackPacks';

export default async (): Promise<number> => {
  const elfSnackPacks = getElfSnackPacks();

  const sums: Array<number> = elfSnackPacks.map((snackPack): number => {
    return _.sum(snackPack);
  });

  const maxCalories = Math.max(...sums);

  return maxCalories;
};
