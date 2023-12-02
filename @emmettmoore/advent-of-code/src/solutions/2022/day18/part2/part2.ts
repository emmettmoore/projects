import getData from '../getData';

const getDimensions = (data: Array<Array<number>>): Array<Array<number>> => {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;

  for (let i = 0; i < data.length; i += 1) {
    const [x, y, z] = data[i];

    if (x < minX) {
      minX = x;
    }

    if (y < minY) {
      minY = y;
    }

    if (z < minZ) {
      minZ = z;
    }

    if (x > maxX) {
      maxX = x;
    }

    if (y > maxY) {
      maxY = y;
    }

    if (z > maxZ) {
      maxZ = z;
    }
  }

  return [
    [minX - 1, minY - 1, minZ - 1],
    [maxX + 1, maxY + 1, maxZ + 1],
  ];
};

const getCellKey = ([x, y, z]: number[]): string => {
  return `${x}-${y}-${z}`;
};

const getNeighbors = (cell: Array<number>): Array<Array<number>> => {
  return [
    [cell[0] + 1, cell[1], cell[2]],
    [cell[0] - 1, cell[1], cell[2]],
    [cell[0], cell[1] + 1, cell[2]],
    [cell[0], cell[1] - 1, cell[2]],
    [cell[0], cell[1], cell[2] + 1],
    [cell[0], cell[1], cell[2] - 1],
  ];
};

const inGrid = (
  cell: Array<number>,
  dimensions: Array<Array<number>>
): boolean => {
  return [0, 1, 2].every((i) => {
    return cell[i] >= dimensions[0][i] && cell[i] <= dimensions[1][i];
  });
};

export default async (): Promise<number> => {
  const data = getData();

  const dimensions = getDimensions(data);

  const queue = [dimensions[0]];

  const allCells = new Set<string>(
    data.map((d) => {
      return getCellKey(d);
    })
  );

  let numEdgesExposed = 0;
  const visited = new Set<string>();

  while (queue.length > 0) {
    const cell = queue.pop();
    if (!cell) {
      throw new Error();
    }

    const key = getCellKey(cell);
    if (allCells.has(key)) {
      numEdgesExposed += 1;
      continue;
    }

    if (!visited.has(key)) {
      visited.add(key);
      const neighbors = getNeighbors(cell);

      for (let i = 0; i < neighbors.length; i += 1) {
        const n = neighbors[i];

        if (inGrid(n, dimensions)) {
          queue.unshift(n);
        }
      }
    }
  }

  return numEdgesExposed;
};
