export default (
  columnHeights: Array<number>,
  rockIndex: number,
  directionIndex: number
): string => {
  const minHeight = Math.min(...columnHeights);

  const cycleHeights = columnHeights.map((h) => {
    return h - minHeight;
  });

  return `${cycleHeights.join(`$`)}-${rockIndex}-${directionIndex}`;
};
