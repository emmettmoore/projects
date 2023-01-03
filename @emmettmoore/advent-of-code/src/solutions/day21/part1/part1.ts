import getData, { Row } from '../getData';

const getRootPathKeys = (
  map: { [key: string]: Row },
  root: Row
): Array<string> => {
  const rootPathKeys = new Array<string>();
  const queue = new Array<Row>(root);

  while (true) {
    const elem: Row | undefined = queue.pop();

    if (elem === undefined) {
      break;
    }

    rootPathKeys.push(elem.key);

    if (elem.kind !== `value`) {
      queue.push(map[elem.left]);
      queue.push(map[elem.right]);
    }
  }

  return rootPathKeys;
};

const executeOperation = (
  valueMemo: Map<string, number>,
  leftValue: number,
  rightValue: number,
  operation: `*` | `/` | `-` | `+`
): number => {
  if (operation === `*`) {
    return leftValue * rightValue;
  }
  if (operation === `/`) {
    return leftValue / rightValue;
  }
  if (operation === `+`) {
    return leftValue + rightValue;
  }
  if (operation === `-`) {
    return leftValue - rightValue;
  }

  const exhaustiveCheck: never = operation;
  return exhaustiveCheck;
};

export default async (): Promise<number> => {
  const rows = getData();

  const map: { [key: string]: Row } = {};
  const valueMemo = new Map<string, number>();

  rows.forEach((row) => {
    map[row.key] = row;
    if (row.kind === `value`) {
      valueMemo.set(row.key, row.value);
    }
  });

  const root = map[`root`];

  if (!root) {
    throw new Error();
  }

  const rootPathKeys = getRootPathKeys(map, root);

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
        const value = executeOperation(
          valueMemo,
          leftValue,
          rightValue,
          row.kind
        );

        valueMemo.set(key, value);
        continue;
      }
      isMissingValue = true;
    }

    if (!isMissingValue) {
      break;
    }
  }

  const rootValue = valueMemo.get(root.key);

  if (rootValue === undefined) {
    throw new Error(`unexpected root value`);
  }

  return rootValue;
};
