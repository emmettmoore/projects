import { Fill, Chamber } from '../types';

export default (chamber: Chamber): Chamber => {
  let y = 0;
  while (y < chamber.length) {
    const row = chamber[y];
    const allAir = row.every((c) => {
      return c === Fill.Air;
    });
    if (!allAir) {
      break;
    }

    y += 1;
  }

  const newChamber = chamber.slice(y);

  return [
    [Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air],
    [Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air],
    [Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air],
  ].concat(newChamber) as Chamber;
};
