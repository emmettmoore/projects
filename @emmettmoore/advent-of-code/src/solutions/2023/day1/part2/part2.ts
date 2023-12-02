import getData from '../getData';

import replaceTextNums from './replaceTextNums';

export default async (): Promise<number> => {
  const data = getData();

  const txtNmsReplaced = data.map((line) => {
    return replaceTextNums(line);
  });

  const numsOnlyData = txtNmsReplaced.map((line) => {
    return line
      .filter((c) => {
        const num = parseInt(c, 10);
        if (Number.isNaN(num)) {
          return false;
        }
        return true;
      })
      .map((c) => {
        return parseInt(c, 10);
      });
  });

  const calibrations = numsOnlyData.map((row) => {
    return 10 * row[0] + row[row.length - 1];
  });

  const sum = calibrations.reduce((partialSum, a) => {
    return partialSum + a;
  }, 0);

  return sum;
};
