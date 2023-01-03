import getData, { Row } from '../getData';
import { calculateNodeValue } from '../utils';

const populateMaps = (
  rows: Array<Row>,
  map: { [key: string]: Row },
  valueMemo: Map<string, number>
): void => {
  rows.forEach((row) => {
    map[row.key] = row;
    if (row.kind === `value`) {
      valueMemo.set(row.key, row.value);
    }
  });
};

export default async (): Promise<number> => {
  const rows = getData();

  const map: { [key: string]: Row } = {};
  const valueMemo = new Map<string, number>();

  populateMaps(rows, map, valueMemo);

  const root = map[`root`];

  if (!root) {
    throw new Error();
  }

  return calculateNodeValue(map, valueMemo, root);
};
