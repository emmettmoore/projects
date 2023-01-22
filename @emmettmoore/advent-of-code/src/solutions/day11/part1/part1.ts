import getData, { Monkey } from '../getData';

const NUM_ROUNDS = 20;

interface Throw {
  monkey: number;
  item: number;
}

const initializeMonkeyInspectionTotals = (): Array<number> => {
  return [0, 0, 0, 0, 0, 0, 0, 0];
};

const testWorryLevel = (worryLevel: number, divisor: number): boolean => {
  return worryLevel % divisor === 0;
};

const getThrows = (monkey: Monkey): Array<Throw> => {
  return monkey.items.map((worryLevel) => {
    let w = monkey.operation(worryLevel);
    w = Math.floor(w / 3);

    const nextMonkey = testWorryLevel(w, monkey.divisor)
      ? monkey.testSuccessMonkey
      : monkey.testFailMonkey;

    return {
      monkey: nextMonkey,
      item: w,
    };
  });
};

export default async (): Promise<number> => {
  const monkies = getData();
  const monkeyInspectionTotals = initializeMonkeyInspectionTotals();

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
