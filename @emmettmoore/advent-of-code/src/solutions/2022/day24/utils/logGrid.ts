/* eslint-disable no-console */
import { Grid, Coordinate } from '../types';

export default (grid: Grid, location: Coordinate | null): void => {
  grid.forEach((row, y) => {
    const cells = new Array<string>();

    row.forEach((c, x) => {
      if (location !== null && x === location.x && y === location.y) {
        cells.push(`E`);
      } else if (c.kind === `wall`) {
        cells.push(`#`);
      } else if (c.kind === `ground`) {
        const vals = Array<string>();
        if (c.blizzard.north) {
          vals.push(`^`);
        }
        if (c.blizzard.east) {
          vals.push(`>`);
        }
        if (c.blizzard.west) {
          vals.push(`<`);
        }
        if (c.blizzard.south) {
          vals.push(`v`);
        }

        if (vals.length === 0) {
          cells.push(`.`);
        } else if (vals.length === 1) {
          cells.push(vals[0]);
        } else {
          cells.push(`${vals.length}`);
        }
      }
    });

    console.log(cells.join(``));
  });
  console.log();
};
