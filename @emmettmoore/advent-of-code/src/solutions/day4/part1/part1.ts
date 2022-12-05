import getData from '../getData';

import { parseAssignment } from '../utils';

const assignmentCovers = (
  assignmentA: Array<number>,
  assignmentB: Array<number>
): boolean => {
  return assignmentA[0] <= assignmentB[0] && assignmentA[1] >= assignmentB[1];
};

const isAssignmentRedundant = (assignmentPair: Array<string>): boolean => {
  const firstAssignment: Array<number> = parseAssignment(assignmentPair[0]);
  const secondAssignment: Array<number> = parseAssignment(assignmentPair[1]);

  return (
    assignmentCovers(firstAssignment, secondAssignment) ||
    assignmentCovers(secondAssignment, firstAssignment)
  );
};

export default (): number => {
  // [ [`1-2`, 34-36`], ... ]
  const data = getData();

  return data.map(isAssignmentRedundant).filter(Boolean).length;
};
