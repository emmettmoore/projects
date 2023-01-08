import { Fill, Grid, Coordinate } from '../types';

const getDirectionFill = (d: boolean): string => {
  return d ? `Y` : `N`;
};

const getCellKey = (fill: Fill): string => {
  if (fill.kind === `wall`) {
    return `#`;
  }

  const n = getDirectionFill(fill.blizzard.north);
  const s = getDirectionFill(fill.blizzard.south);
  const e = getDirectionFill(fill.blizzard.east);
  const w = getDirectionFill(fill.blizzard.west);

  return `<>N${n}S${s}E${e}W${w}`;
};
export default (grid: Grid, location: Coordinate): string => {
  const cellKeys = new Array<string>();

  grid.forEach((row) => {
    row.forEach((cell) => {
      const cellKey = getCellKey(cell);
      cellKeys.push(cellKey);
    });
  });

  return `L-x${location.x}y${location.y}<>G-${cellKeys.join(``)}`;
};
