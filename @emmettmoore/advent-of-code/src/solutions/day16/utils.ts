export interface Valve {
  name: string;
  rate: number;
  next: Array<string>;
}

export type ValveMap = { [key: string]: Valve };

export const initMap = (data: Array<Valve>): ValveMap => {
  const map: ValveMap = {};
  data.forEach((v) => {
    map[v.name] = v;
  });
  return map;
};

const getDistanceMemoKey = (currValve: string, targetValve: string): string => {
  return currValve < targetValve
    ? currValve + targetValve
    : targetValve + currValve;
};

export const getDistanceBetween = (
  map: ValveMap,
  currValve: string,
  targetValve: string,
  distanceMemo: Map<string, number>
): number => {
  const key = getDistanceMemoKey(currValve, targetValve);
  if (distanceMemo.has(key)) {
    const dist = distanceMemo.get(key);
    if (dist === undefined) {
      throw new Error();
    }
    return dist;
  }
  const visited = new Set();
  let queue = [currValve];
  let traveled = 0;

  while (queue.length > 0) {
    const nextQueue = new Array<string>();
    for (let v = 0; v < queue.length; v += 1) {
      const valve = queue[v];
      if (visited.has(valve)) {
        continue;
      }
      visited.add(valve);
      if (valve === targetValve) {
        distanceMemo.set(key, traveled);
        return traveled;
      }
      map[valve].next.forEach((n: string) => {
        nextQueue.push(n);
      });
    }
    queue = nextQueue;
    traveled = traveled += 1;
  }

  distanceMemo.set(key, traveled);
  return traveled;
};
