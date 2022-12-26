import getData from '../getData';
import {
  getCurrentDirection,
  mapNewRocksToRocks,
  getChamberHeight,
  addRockToChamber,
  NUM_ROCKS_TO_FALL,
  isAtRest,
  getRock,
  applyJetStream,
  maybeAddHeightToChamber,
  resetChamber,
  Fill,
  applyGravity,
} from '../utils';

export default async (): Promise<number> => {
  const directions = getData();

  let chamber = new Array<Array<Fill>>();

  maybeAddHeightToChamber(chamber);

  let fallIterations = 0;
  for (let rockIndex = 0; rockIndex < NUM_ROCKS_TO_FALL; rockIndex += 1) {
    const rock = getRock(rockIndex);
    chamber = resetChamber(chamber);
    addRockToChamber(rock, chamber);

    while (true) {
      const direction = getCurrentDirection(directions, fallIterations);
      fallIterations += 1;

      chamber = applyJetStream(chamber, direction);

      if (isAtRest(chamber)) {
        break;
      }

      chamber = applyGravity(chamber);
    }
    chamber = mapNewRocksToRocks(chamber);
  }

  return getChamberHeight(chamber);
};
