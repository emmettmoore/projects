export const MEH = 20;
export const NEAT = 50;
export const LOVE = 80;
export const NONE = 20;
export const INTRODUCED = 50;
export const ADOPTED = 80;

export const getRightYAxis = (): number[] => {
  return [NONE, INTRODUCED, ADOPTED];
};
export const getLeftYAxis = (): number[] => {
  return [MEH, NEAT, LOVE];
};
