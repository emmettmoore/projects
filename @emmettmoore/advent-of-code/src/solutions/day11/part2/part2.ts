import getData, { Monkey } from '../getData';

const NUM_ROUNDS = 10000;

interface Throw {
  monkey: number;
  item: number;
}

const testWorryLevel = (worryLevel: number, divisor: number): boolean => {
  return Boolean(worryLevel % divisor === 0);
};

const initializeMonkeyInspectionTotals = (): Array<number> => {
  return [0, 0, 0, 0, 0, 0, 0, 0];
};

const getThrows = (monkey: Monkey, mod: number): Array<Throw> => {
  return monkey.items.map((worryLevel) => {
    let w = monkey.operation(worryLevel);

    w = w % mod;

    let nextMonkey: number;
    if (testWorryLevel(w, monkey.divisor)) {
      nextMonkey = monkey.testSuccessMonkey;
    } else {
      nextMonkey = monkey.testFailMonkey;
    }

    return {
      monkey: nextMonkey,
      item: w,
    };
  });
};

export default (): number => {
  const monkies = getData();
  const monkeyInspectionTotals = initializeMonkeyInspectionTotals();

  // All divisors are prime. We use the product of all these
  // prime numbers as a mod since it won't affect the tests
  // since they just check against prime divisibility.
  let mod = 1;
  monkies.forEach((m) => {
    mod = m.divisor * mod;
  });

  for (let round = 0; round < NUM_ROUNDS; round += 1) {
    for (let m = 0; m < monkies.length; m += 1) {
      const throws = getThrows(monkies[m], mod);
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
