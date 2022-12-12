import getInstructions from '../getInstructions';
import getSignals from '../getSignals';

const INTERESTING_CYCLES = [20, 60, 100, 140, 180, 220];

export default (): number => {
  const instructions = getInstructions();

  const signals = getSignals(instructions);

  let sum = 0;
  signals.forEach((signal, i) => {
    const cycle = i + 1;
    if (INTERESTING_CYCLES.includes(cycle)) {
      sum += signal * cycle;
    }
  });

  return sum;
};
