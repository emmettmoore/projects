import { Row } from '../getData';
import { getRootPathKeys, executeOperation } from '../utils';

export const calculateNodeValue = (
  map: { [key: string]: Row },
  valueMemo: Map<string, any>,
  node: Row
): number => {
  const rootPathKeys = getRootPathKeys(map, node);

  while (true) {
    let isMissingValue = false;
    for (let i = 0; i < rootPathKeys.length; i += 1) {
      const key = rootPathKeys[i];

      if (valueMemo.has(key)) {
        continue;
      }

      const row = map[key];

      if (row.kind === `value`) {
        valueMemo.set(key, row.value);
        continue;
      }

      const leftValue = valueMemo.get(row.left);
      const rightValue = valueMemo.get(row.right);

      if (leftValue !== undefined && rightValue !== undefined) {
        const value = executeOperation(leftValue, rightValue, row.kind);

        valueMemo.set(key, value);
        continue;
      }
      isMissingValue = true;
    }

    if (!isMissingValue) {
      break;
    }
  }

  const rootValue = valueMemo.get(node.key);

  if (rootValue === undefined) {
    throw new Error(`unexpected root value`);
  }

  return rootValue;
};
