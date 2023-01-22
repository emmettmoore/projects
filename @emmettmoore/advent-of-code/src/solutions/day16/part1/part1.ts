import getData from '../getData';
import { Valve, ValveMap, getDistanceBetween } from '../utils';

const distanceMemo = new Map<string, number>();

const START = `AA`;

const initMap = (data: Array<Valve>): ValveMap => {
  const map: ValveMap = {};
  data.forEach((v) => {
    map[v.name] = v;
  });
  return map;
};

const findMaxFlow = (
  valveName: string,
  map: ValveMap,
  valvesWithFlow: Array<string>,
  {
    timeLeft,
    score,
  }: {
    timeLeft: number;
    score: number;
  }
): number => {
  let currentHighPressure = 0;
  for (let vf = 0; vf < valvesWithFlow.length; vf += 1) {
    const candidateValve = valvesWithFlow[vf];
    const distance = getDistanceBetween(
      map,
      valveName,
      candidateValve,
      distanceMemo
    );

    // 1 to open valve
    const timeLeftAfterOpeningValve = timeLeft - distance - 1;

    if (timeLeftAfterOpeningValve <= 0) {
      continue;
    }

    const addedScore = timeLeftAfterOpeningValve * map[candidateValve].rate;

    const remainingValves = valvesWithFlow.filter((v) => {
      return v !== candidateValve;
    });

    const option = findMaxFlow(candidateValve, map, remainingValves, {
      timeLeft: timeLeftAfterOpeningValve,
      score: addedScore,
    });

    if (option > currentHighPressure) {
      currentHighPressure = option;
    }
  }

  return score + currentHighPressure;
};

/**
 * strategy:
 * get only valves that can release pressure
 * Instead of doing a DFS on the entire graph try instead to
 * visit each valve that can relieve pressure. calculate distances
 * between valves. As part of a DFS, visit each valve and open it, collecting
 * the total pressure. Cache each distance between each node along the way.
 */
export default async (): Promise<number> => {
  const data = getData();
  const map = initMap(data);

  const valvesWithFlow = data
    .filter(({ rate }) => {
      return rate > 0;
    })
    .map(({ name }) => {
      return name;
    });

  return findMaxFlow(START, map, valvesWithFlow, { score: 0, timeLeft: 30 });
};
