export type Rock = `#`;
export type Air = `.`;
export type NewRock = `@`;
export type Chamber = Array<Array<Fill>>;

export enum Fill {
  NewRock = `@`,
  Rock = `#`,
  Air = `.`,
}
