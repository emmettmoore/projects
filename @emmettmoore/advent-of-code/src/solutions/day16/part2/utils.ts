import { ValveMap, getDistanceBetween } from '../utils';

/**
 * given a set of valves, returns the sum of the shortest
 * distance between any two valves
 */
export const getCombinedDistanceBetweenAllValves = (
  map: ValveMap,
  myValves: Array<string>,
  elephantValves: Array<string>,
  distanceMemo: Map<string, number>
): number => {
  let score = 0;
  for (let i = 0; i < myValves.length; i++) {
    for (let j = i + 1; j < myValves.length; j++) {
      score += getDistanceBetween(map, myValves[i], myValves[j], distanceMemo);
    }
  }
  for (let i = 0; i < elephantValves.length; i++) {
    for (let j = i + 1; j < elephantValves.length; j++) {
      score += getDistanceBetween(map, myValves[i], myValves[j], distanceMemo);
    }
  }

  return score;
};

/**
 * Brute force find a way to split the valves into two sets
 * that finds the minimum number of
 */
export const efficientlySplit = (
  map: ValveMap,
  valves: Array<string>,
  distanceMemo: Map<string, number>
): { myValves: Array<string>; elephantValves: Array<string> } => {
  let score = Infinity;
  let myValves: Array<string> = [];
  let elephantValves: Array<string> = [];

  // Just randomly generate 100,000 splits and pick the best
  for (let i = 0; i < 100_000; i++) {
    const elephantValvesTest: Array<string> = [];
    const myValvesTest: Array<string> = [];

    valves.forEach((valve) => {
      if (Math.random() > 0.5) {
        myValvesTest.push(valve);
      } else {
        elephantValvesTest.push(valve);
      }
    });

    const newScore = getCombinedDistanceBetweenAllValves(
      map,
      myValvesTest,
      elephantValves,
      distanceMemo
    );

    if (newScore < score) {
      score = newScore;
      myValves = myValvesTest;
      elephantValves = elephantValvesTest;
    }
  }

  return { myValves, elephantValves };
};
