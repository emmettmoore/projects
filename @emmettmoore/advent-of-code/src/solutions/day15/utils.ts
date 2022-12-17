import { Coordinate, Scan } from './getData';

interface Range {
  min: number;
  max: number;
}

export const getCoordinateKey = (coordinate: Coordinate): string => {
  return `x${coordinate.x}y${coordinate.y}`;
};

export const getManhattanDist = (a: Coordinate, b: Coordinate): number => {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
};

export const getRange = async (
  scan: Scan,
  targetY: number
): Promise<Range | null> => {
  const { source, closestBeacon } = scan;
  const maxManhattanDist = getManhattanDist(source, closestBeacon);

  const distToY = targetY - source.y;

  const diff = maxManhattanDist - Math.abs(distToY);
  if (diff < 0) {
    // didn't discover anything on target Y line.
    return null;
  }
  return {
    min: source.x - diff,
    max: source.x + diff,
  };
};

export const getUniqueCoordsAtY = (
  coordinates: Array<Coordinate>,
  y: number
): Set<string> => {
  const uniqueCoordinates = new Set<string>();

  coordinates.forEach((c) => {
    const key = getCoordinateKey(c);
    if (y === c.y) {
      uniqueCoordinates.add(key);
    }
  });

  return uniqueCoordinates;
};
