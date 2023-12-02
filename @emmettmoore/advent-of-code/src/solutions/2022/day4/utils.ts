/**
 * Expects "<number>-<number>"
 */
export const parseAssignment = (assignment: string): Array<number> => {
  return assignment.split(`-`).map((rangeElement) => {
    return parseInt(rangeElement, 10);
  });
};
