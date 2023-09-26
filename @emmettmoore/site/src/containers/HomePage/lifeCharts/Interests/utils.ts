export const DORMANT = 0;
export const INTERESTED = 33;
export const DEDICATED = 66;
export const TOO_MUCH = 100;

export const getYAxisTicks = (): Array<number> => {
  return [DORMANT, INTERESTED, DEDICATED, TOO_MUCH];
};
