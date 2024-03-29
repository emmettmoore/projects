import getData from '../getData';
import { produceSand, initCave } from '../utils';

export default async (): Promise<number> => {
  const data = getData();
  const cave = await initCave(data);

  let numGrains = 0;
  while (true) {
    const fellIntoAbyss = await produceSand(cave);
    if (fellIntoAbyss) {
      break;
    }
    numGrains += 1;
  }

  return numGrains;
};
