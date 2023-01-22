import _ from 'lodash';

import getData from '../getData';
import { getPriorityForCharacter } from '../utils';
import { InvalidParsingError } from '../../../errors';

const getElfGroups = (rucksacks: Array<string>): Array<Array<string>> => {
  const elfGroups = new Array<Array<string>>();
  let currentElfGroup = new Array<string>();

  let i = 0;
  while (i < rucksacks.length) {
    if (i % 3 === 0) {
      currentElfGroup = new Array<string>();
    }

    currentElfGroup.push(rucksacks[i]);
    if (currentElfGroup.length === 3) {
      elfGroups.push(currentElfGroup);
    }

    i += 1;
  }

  return elfGroups;
};

export default async (): Promise<number> => {
  // only one data section in this problem
  const allRucksacks = getData()[0];

  const elfGroups = getElfGroups(allRucksacks);

  const priorities = elfGroups.map(([rucksackA, rucksackB, rucksackC]) => {
    const setA: Set<string> = new Set(rucksackA.split(``));
    const setB: Set<string> = new Set(rucksackB.split(``));
    const setC: Set<string> = new Set(rucksackC.split(``));
    const intersectionAandB = new Set(
      [...setA].filter((i) => {
        return setB.has(i);
      })
    );

    const intersectionAll = Array.from(
      new Set(
        [...intersectionAandB].filter((i) => {
          return setC.has(i);
        })
      )
    );

    if (intersectionAll.length !== 1) {
      throw new InvalidParsingError();
    }

    const priority = getPriorityForCharacter(intersectionAll[0]);

    return priority;
  });

  return _.sum(priorities);
};
