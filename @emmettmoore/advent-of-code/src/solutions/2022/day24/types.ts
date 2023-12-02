export interface Blizzard {
  north: boolean;
  east: boolean;
  south: boolean;
  west: boolean;
}

export enum Direction {
  North = `North`,
  East = `East`,
  West = `West`,
  South = `South`,
}

export type Fill = { kind: `wall` } | { kind: `ground`; blizzard: Blizzard };

export type Grid = Array<Array<Fill>>;

export interface Coordinate {
  x: number;
  y: number;
}

export type Visited = Array<Array<Array<boolean>>>;
