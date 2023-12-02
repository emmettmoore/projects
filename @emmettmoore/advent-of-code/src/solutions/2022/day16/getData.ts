import { getInput, getSectionsFromRawInput } from '../../../utils';

import { Valve } from './utils';

export default (): Array<Valve> => {
  const rawInput = getInput(`./input/d16p1.txt`);
  const sections = getSectionsFromRawInput(rawInput)[0];

  return sections.map((section) => {
    const [firstPart, lastPart] = section.split(`;`);
    const s = firstPart
      .replace(`Valve `, `{ "name": "`)
      .replace(` has flow rate=`, `", "rate": `)
      .replace(`;`, `,`);

    const obj = JSON.parse(`${s} }`);

    const next = lastPart
      .replace(`tunnels lead to valves `, ``)
      .replace(`tunnel leads to valves `, ``)
      .replace(`tunnels leads to valve `, ``)
      .replace(`tunnel leads to valve `, ``)
      .split(`, `)
      .map((valve) => {
        return valve.trim();
      });

    return {
      ...obj,
      next,
      isOpen: false,
    };
  });
};
