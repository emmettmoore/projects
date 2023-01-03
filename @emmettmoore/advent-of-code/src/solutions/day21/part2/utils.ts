import { Row } from '../getData';
import { calculateNodeValue } from '../utils';

const HUMN = `humn`;

type Operation = `+` | `-` | `*` | `/`;

export const hasKey = (map: { [key: string]: Row }, node: Row): boolean => {
  if (node.kind === `value`) {
    return node.key === HUMN;
  }
  const left = map[node.left];
  const right = map[node.right];
  return hasKey(map, left) || hasKey(map, right);
};

export const populateValueMemo = (
  rows: Array<Row>,
  valueMemo: Map<string, bigint>
): void => {
  rows.forEach((row) => {
    if (row.kind === `value`) {
      valueMemo.set(row.key, row.value);
    }
  });
};

export const calculateTargetValue = (
  rows: Array<Row>,
  map: { [key: string]: Row },
  node: Row
): { value: bigint; next: `left` | `right` | null } => {
  const valueMemo = new Map<string, bigint>();
  populateValueMemo(rows, valueMemo);

  if (node.kind === `value`) {
    return {
      value: node.value,
      next: null,
    };
  }

  const left = map[node.left];
  const right = map[node.right];

  if (hasKey(map, left)) {
    return {
      value: calculateNodeValue(map, valueMemo, right),
      next: `left`,
    };
  }

  return {
    value: calculateNodeValue(map, valueMemo, left),
    next: `right`,
  };
};

const getNewTarget = (
  targetValue: bigint,
  operation: Operation,
  oppositeValue: bigint,
  nextPosition: `left` | `right`
): bigint => {
  if (operation === `+`) {
    return nextPosition === `right`
      ? targetValue - oppositeValue
      : oppositeValue - targetValue;
  }
  if (operation === `-`) {
    return nextPosition === `right`
      ? targetValue + oppositeValue
      : oppositeValue + targetValue;
  }
  if (operation === `*`) {
    return nextPosition === `right`
      ? targetValue / oppositeValue
      : oppositeValue / targetValue;
  }
  if (operation === `/`) {
    return nextPosition === `right`
      ? targetValue * oppositeValue
      : oppositeValue * targetValue;
  }

  const exhaustiveCheck: never = operation;
  return exhaustiveCheck;
};

export const calculateHumn = async (
  rows: Array<Row>,
  map: { [key: string]: Row },
  node: Row,
  targetValue: bigint
): Promise<bigint> => {
  if (node.kind === `value`) {
    if (node.key === HUMN) {
      return targetValue;
    } else {
      throw new Error(`Expecting humn`);
    }
  }

  const { value: nextValue, next } = calculateTargetValue(rows, map, node);

  if (next === null) {
    throw new Error();
  }

  const newTarget = getNewTarget(targetValue, node.kind, nextValue, next);

  if (next === `left`) {
    node = map[node.left];
  } else if (next === `right`) {
    node = map[node.right];
  }

  const x = await calculateHumn(rows, map, node, newTarget);

  return x;
};
