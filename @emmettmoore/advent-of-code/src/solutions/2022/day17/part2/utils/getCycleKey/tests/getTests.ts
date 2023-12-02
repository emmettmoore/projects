interface Test {
  name: string;
  columnHeights: Array<number>;
  rockIndex: number;
  directionIndex: number;
  output: string;
}

export default (): Array<Test> => {
  return [
    {
      name: `small numbers with 0`,
      columnHeights: [0, 1, 2, 3, 4, 5, 6],
      directionIndex: 20,
      rockIndex: 4,
      output: `0$1$2$3$4$5$6-4-20`,
    },
    {
      name: `big numbers with 0`,
      columnHeights: [110, 221, 332, 0, 444, 5332145, 6],
      directionIndex: 20,
      rockIndex: 4,
      output: `110$221$332$0$444$5332145$6-4-20`,
    },
    {
      name: `small numbers with all greater than 0`,
      columnHeights: [1, 1, 2, 3, 4, 5, 6],
      directionIndex: 20,
      rockIndex: 4,
      output: `0$0$1$2$3$4$5-4-20`,
    },
    {
      name: `big numbers with all greater than 0`,
      columnHeights: [110, 221, 332, 413, 444, 5332145, 600],
      directionIndex: 20,
      rockIndex: 4,
      output: `0$111$222$303$334$5332035$490-4-20`,
    },
  ];
};
