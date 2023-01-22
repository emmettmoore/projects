import getData from '../getData';

export default async (): Promise<number> => {
  const data = getData();

  let surfaceArea = data.length * 6;

  for (let i = 0; i < data.length; i += 1) {
    const [xa, ya, za] = data[i];

    for (let j = i; j < data.length; j += 1) {
      const [xb, yb, zb] = data[j];

      if (xa === xb && ya === yb && Math.abs(za - zb) === 1) {
        surfaceArea -= 2;
      } else if (xa === xb && za === zb && Math.abs(ya - yb) === 1) {
        surfaceArea -= 2;
      } else if (za === zb && ya === yb && Math.abs(xa - xb) === 1) {
        surfaceArea -= 2;
      }
    }
  }

  return surfaceArea;
};
