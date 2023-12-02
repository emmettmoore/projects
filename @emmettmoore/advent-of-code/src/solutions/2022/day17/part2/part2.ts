import getData from '../getData';
import {
  getCurrentDirection,
  mapNewRocksToRocks,
  getChamberHeight,
  addRockToChamber,
  isAtRest,
  getRock,
  applyJetStream,
  addExtraSpaceToChamber,
  resetChamber,
  Fill,
  applyGravity,
} from '../utils';

import { getColumnHeights, getCycleKey } from './utils';

interface ChamberMemo {
  rockNum: number;
  height: number;
}

const NUM_ROCKS_TO_FALL = 1000000000000;

export default async (): Promise<number> => {
  const directions = getData();

  let chamber = new Array<Array<Fill>>();

  const chamberMap = new Map<string, ChamberMemo>();

  let columnHeights = [0, 0, 0, 0, 0, 0, 0];

  let fallIterations = 0;
  let rockNum = 0;
  let heightAddedInAllCycles = 0;
  let cycleFound = false;
  while (rockNum < NUM_ROCKS_TO_FALL) {
    const rockIndex = rockNum % 5;
    const rock = getRock(rockIndex);

    chamber = resetChamber(chamber);

    if (!cycleFound) {
      const cycleKey = getCycleKey(
        columnHeights,
        rockIndex,
        fallIterations % directions.length
      );

      if (chamberMap.has(cycleKey)) {
        cycleFound = true;
        const memo: ChamberMemo | undefined = chamberMap.get(cycleKey);

        if (memo === undefined) {
          throw new Error(`Invalid memoization`);
        }

        const heightGainedInCycle = Math.max(...columnHeights) - memo.height;
        const rocksInCycle = rockNum - memo.rockNum;
        const remainingRocks = NUM_ROCKS_TO_FALL - rockNum;
        const cyclesRemaining = Math.floor(remainingRocks / rocksInCycle);
        const rockRemainder = remainingRocks % rocksInCycle;
        heightAddedInAllCycles = heightGainedInCycle * cyclesRemaining;

        rockNum = NUM_ROCKS_TO_FALL - rockRemainder;
      }

      chamberMap.set(cycleKey, {
        rockNum,
        height: Math.max(...columnHeights),
      });
    }

    chamber = addExtraSpaceToChamber(chamber);
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

    columnHeights = getColumnHeights(chamber);
    rockNum += 1;
  }

  return getChamberHeight(chamber) + heightAddedInAllCycles;
};
