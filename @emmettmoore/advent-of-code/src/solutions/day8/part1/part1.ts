import getData from '../getData';

interface Tree {
  height: number;
  visibleFromLeft: boolean;
  visibleFromRight: boolean;
  visibleFromTop: boolean;
  visibleFromBottom: boolean;
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
        visibleFromLeft: true,
        visibleFromRight: true,
        visibleFromTop: true,
        visibleFromBottom: true,
      });
    }
    forest.push(tree);
  }

  return forest;
};

const setLeftVisibility = (
  forest: Forest,
  numRows: number,
  numCols: number
): void => {
  for (let i = 0; i < numRows; i += 1) {
    const row = forest[i];
    let tallestLeftOfCurrTree = null;
    for (let j = 0; j < numCols; j += 1) {
      const tree = row[j];

      const currTreeHeight = tree.height;
      if (
        tallestLeftOfCurrTree !== null &&
        currTreeHeight <= tallestLeftOfCurrTree
      ) {
        tree.visibleFromLeft = false;
      }
      if (
        tallestLeftOfCurrTree === null ||
        currTreeHeight > tallestLeftOfCurrTree
      ) {
        tallestLeftOfCurrTree = currTreeHeight;
      }
    }
  }
};

const setTopVisibility = (
  forest: Forest,
  numRows: number,
  numCols: number
): void => {
  for (let i = 0; i < numCols; i += 1) {
    let tallestTopOfCurrTree = null;
    for (let j = 0; j < numRows; j += 1) {
      const tree = forest[j][i];

      const currTreeHeight = tree.height;
      if (
        tallestTopOfCurrTree !== null &&
        currTreeHeight <= tallestTopOfCurrTree
      ) {
        tree.visibleFromTop = false;
      }
      if (
        tallestTopOfCurrTree === null ||
        currTreeHeight > tallestTopOfCurrTree
      ) {
        tallestTopOfCurrTree = currTreeHeight;
      }
    }
  }
};

const setRightVisibility = (
  forest: Forest,
  numRows: number,
  numCols: number
): void => {
  for (let i = 0; i < numRows; i += 1) {
    const row = forest[i];
    let tallestRightOfCurrTree = null;
    for (let j = numCols - 1; j >= 0; j -= 1) {
      const tree = row[j];

      const currTreeHeight = tree.height;
      if (
        tallestRightOfCurrTree !== null &&
        currTreeHeight <= tallestRightOfCurrTree
      ) {
        tree.visibleFromRight = false;
      }
      if (
        tallestRightOfCurrTree === null ||
        currTreeHeight > tallestRightOfCurrTree
      ) {
        tallestRightOfCurrTree = currTreeHeight;
      }
    }
  }
};

const setBottomVisibility = (
  forest: Forest,
  numRows: number,
  numCols: number
): void => {
  for (let i = 0; i < numCols; i += 1) {
    let tallestBottomOfCurrTree = null;
    for (let j = numRows - 1; j >= 0; j -= 1) {
      const tree = forest[j][i];

      const currTreeHeight = tree.height;
      if (
        tallestBottomOfCurrTree !== null &&
        currTreeHeight <= tallestBottomOfCurrTree
      ) {
        tree.visibleFromBottom = false;
      }
      if (
        tallestBottomOfCurrTree === null ||
        currTreeHeight > tallestBottomOfCurrTree
      ) {
        tallestBottomOfCurrTree = currTreeHeight;
      }
    }
  }
};

const getNumVisibleTrees = (forest: Forest): number => {
  let count = 0;
  forest.forEach((row) => {
    row.forEach((tree) => {
      if (
        tree.visibleFromBottom ||
        tree.visibleFromTop ||
        tree.visibleFromLeft ||
        tree.visibleFromRight
      ) {
        count += 1;
      }
    });
  });

  return count;
};

export default (): number => {
  const data = getData();

  const numRows = data.length;
  const numCols = data[0].length;

  const forest = initializeForest(data, numCols, numRows);

  setLeftVisibility(forest, numRows, numCols);
  setRightVisibility(forest, numRows, numCols);
  setTopVisibility(forest, numRows, numCols);
  setBottomVisibility(forest, numRows, numCols);

  return getNumVisibleTrees(forest);
};
