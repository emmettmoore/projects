import getData from '../getData';

import { parseAssignment } from '../utils';

const hasOverlap = (
  firstAssignment: Array<number>,
  secondAssignment: Array<number>
): boolean => {
  return (
    (firstAssignment[0] <= secondAssignment[1] &&
      firstAssignment[0] >= secondAssignment[0]) ||
    (firstAssignment[1] >= secondAssignment[0] &&
      firstAssignment[1] <= secondAssignment[1])
  );
};

const isAssignmentOverlapping = (assignmentPair: Array<string>): boolean => {
  const firstAssignment: Array<number> = parseAssignment(assignmentPair[1]);
  const secondAssignment: Array<number> = parseAssignment(assignmentPair[0]);
  return (
    hasOverlap(firstAssignment, secondAssignment) ||
    hasOverlap(secondAssignment, firstAssignment)
  );
};

export default (): number => {
  // [ [`1-2`, 34-36`], ... ]
  const data = getData();

  return data.map(isAssignmentOverlapping).filter(Boolean).length;
};
