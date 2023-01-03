import getData, { Row } from '../getData';

import { calculateTargetValue, calculateHumn } from './utils';

export default async (): Promise<number> => {
  const rows = getData();

  const map: { [key: string]: Row } = {};

  rows.forEach((row) => {
    map[row.key] = row;
  });

  const root = map[`root`];

  if (!root || root.kind === `value`) {
    throw new Error();
  }

  const { value: targetValue, next: rootNext } = calculateTargetValue(
    rows,
    map,
    root
  );

  if (rootNext === null) {
    throw new Error(`unexpected tree shape`);
  }

  const node: Row = rootNext === `left` ? map[root.left] : map[root.right];

  const result = await calculateHumn(rows, map, node, targetValue);
  return Number(result);
};
