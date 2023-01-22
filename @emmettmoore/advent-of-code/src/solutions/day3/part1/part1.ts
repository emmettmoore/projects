import _ from 'lodash';

import getData from '../getData';
import { getPriorityForCharacter } from '../utils';
import { InvalidParsingError } from '../../../errors';

const getCharacterFromRucksack = (rucksack: string): string => {
  const length = rucksack.length;

  const firstPart: Set<string> = new Set(
    rucksack.slice(0, length / 2).split(``)
  );
  const secondPart: Set<string> = new Set(
    rucksack.slice(length / 2, length).split(``)
  );

  const intersection = Array.from(
    new Set(
      [...firstPart].filter((i) => {
        return secondPart.has(i);
      })
    )
  );

  if (intersection.length !== 1) {
    throw new InvalidParsingError();
  }

  return intersection[0];
};

export default async (): Promise<number> => {
  // only one data section in this problem
  const allRucksacks = getData()[0];

  const priorities = allRucksacks.map((rucksack) => {
    const intersectedChar = getCharacterFromRucksack(rucksack);
    const priority = getPriorityForCharacter(intersectedChar);

    return priority;
  });

  return _.sum(priorities);
};
