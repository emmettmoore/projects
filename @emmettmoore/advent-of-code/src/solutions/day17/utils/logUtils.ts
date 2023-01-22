/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
import { Chamber } from './types';

export const logChamber = (chamber: Chamber): void => {
  chamber.forEach((row) => {
    console.log(row.join(``));
  });
  console.log(``);
};
