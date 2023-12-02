import { Row } from './getData';

export const getRootPathKeys = (
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

export const executeOperation = (
  leftValue: bigint,
  rightValue: bigint,
  operation: `*` | `/` | `-` | `+`
): bigint => {
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

export const calculateNodeValue = (
  map: { [key: string]: Row },
  valueMemo: Map<string, bigint>,
  node: Row
): bigint => {
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
