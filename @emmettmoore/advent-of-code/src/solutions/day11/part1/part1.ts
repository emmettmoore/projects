import getData, { Monkey } from '../getData';

const NUM_ROUNDS = 20;

interface Throw {
  monkey: number;
  item: number;
}

const initializeMonkeyInspectionTotals = (): Array<number> => {
  return [0, 0, 0, 0, 0, 0, 0, 0];
};

const getThrows = (monkey: Monkey): Array<Throw> => {
  return monkey.items.map((worryLevel) => {
    let w = monkey.operation(worryLevel);
    w = Math.floor(w / 3);

    const nextMonkey = monkey.test(w);

    return {
      monkey: nextMonkey,
      item: w,
    };
  });
};

export default (): number => {
  const monkies = getData();
  const monkeyInspectionTotals = initializeMonkeyInspectionTotals();

  /*
  After each monkey inspects an item but before it tests your worry level, 
  your relief that the monkey's inspection didn't damage the item causes 
  your worry level to be divided by three and rounded down to the nearest integer.
  */

  /* 
    inspect and throw all items in order listed.

    monkey 0 goes first, then 1, etc.

    item goes to end of recipient monkey list
  */
  for (let round = 0; round < NUM_ROUNDS; round += 1) {
    for (let m = 0; m < monkies.length; m += 1) {
      const throws = getThrows(monkies[m]);
      monkies[m].items = [];
      monkeyInspectionTotals[m] += throws.length;
      throws.forEach(({ monkey, item }) => {
        monkies[monkey].items.push(item);
      });
    }
  }

  const sorted = monkeyInspectionTotals.sort((a, b) => {
    return a - b;
  });

  return sorted[monkies.length - 2] * sorted[monkies.length - 1];
};
