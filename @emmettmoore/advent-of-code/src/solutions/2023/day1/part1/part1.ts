import getData from '../getData';

export default async (): Promise<number> => {
  const data = getData();

  const numsOnlyData = data.map((line) => {
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
