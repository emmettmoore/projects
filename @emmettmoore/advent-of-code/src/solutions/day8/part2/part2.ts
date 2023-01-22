import getData from '../getData';
import { InvalidParsingError } from '../../../errors';

interface Tree {
  height: number;
  scenicNumberLeft: number | null;
  scenicNumberRight: number | null;
  scenicNumberTop: number | null;
  scenicNumberBottom: number | null;
}

type Forest = Array<Array<Tree>>;

const initializeForest = (
  data: Array<Array<number>>,
  cols: number,
  rows: number
): Forest => {
  const forest: Forest = new Array<Array<Tree>>();

  for (let i = 0; i < rows; i += 1) {
    const tree = new Array<Tree>();
    for (let j = 0; j < cols; j += 1) {
      tree.push({
        height: data[i][j],
        scenicNumberLeft: null,
        scenicNumberRight: null,
        scenicNumberTop: null,
        scenicNumberBottom: null,
      });
    }
    forest.push(tree);
  }

  return forest;
};

const getScenicNumber = (trees: Array<Tree>, height: number): number => {
  if (trees.length === 0) {
    return 0;
  }

  let scenicNumber = 0;
  let i = 0;
  while (i <= trees.length - 1) {
    scenicNumber += 1;

    if (trees[i].height >= height) {
      break;
    }
    i += 1;
  }
  return scenicNumber;
};

const setVerticalScenicNumbers = (
  forest: Forest,
  numRows: number,
  numCols: number
): void => {
  for (let i = 0; i < numCols; i += 1) {
    for (let j = 0; j < numRows; j += 1) {
      const row = forest[j];
      const tree = row[i];
      const treeColumns = forest.map((fRow) => {
        return fRow[i];
      });

      const scenicNumberTop = getScenicNumber(
        treeColumns.slice(0, j).reverse(),
        tree.height
      );

      const scenicNumberBottom = getScenicNumber(
        treeColumns.slice(j + 1, numRows),
        tree.height
      );

      tree.scenicNumberTop = scenicNumberTop;
      tree.scenicNumberBottom = scenicNumberBottom;
    }
  }
};

const setHorizontalScenicNumbers = (
  forest: Forest,
  numRows: number,
  numCols: number
): void => {
  for (let i = 0; i < numRows; i += 1) {
    const row = forest[i];

    for (let j = 0; j < numCols; j += 1) {
      const tree = row[j];
      const scenicNumberRight = getScenicNumber(
        row.slice(j + 1, numCols),
        tree.height
      );

      const scenicNumberLeft = getScenicNumber(
        row.slice(0, j).reverse(),
        tree.height
      );

      tree.scenicNumberRight = scenicNumberRight;
      tree.scenicNumberLeft = scenicNumberLeft;
    }
  }
};

const findMaxScenicNumber = (forest: Forest): number => {
  let currMax = 0;
  forest.forEach((row) => {
    row.forEach((tree) => {
      if (
        tree.scenicNumberBottom === null ||
        tree.scenicNumberLeft === null ||
        tree.scenicNumberRight === null ||
        tree.scenicNumberTop === null
      ) {
        throw new InvalidParsingError();
      }

      const scenicNumber =
        tree.scenicNumberBottom *
        tree.scenicNumberLeft *
        tree.scenicNumberRight *
        tree.scenicNumberTop;

      if (scenicNumber > currMax) {
        currMax = scenicNumber;
      }
    });
  });

  return currMax;
};

export default async (): Promise<number> => {
  const data = getData();

  const numRows = data.length;
  const numCols = data[0].length;

  const forest = initializeForest(data, numCols, numRows);

  setHorizontalScenicNumbers(forest, numRows, numCols);
  setVerticalScenicNumbers(forest, numRows, numCols);

  return findMaxScenicNumber(forest);
};
