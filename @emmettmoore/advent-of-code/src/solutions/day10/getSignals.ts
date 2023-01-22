import { Instruction } from './getInstructions';

export default (instructions: Array<Instruction>): Array<number> => {
  const signals = [1];
  let i = 0;
  instructions.forEach((instruction) => {
    if (instruction.directive === `noop`) {
      const currentSignal = signals[i];
      signals.push(currentSignal);
      i += 1;
      return;
    } else if (instruction.directive === `addx`) {
      signals.push(signals[i]);
      signals.push(signals[i] + instruction.num);
      i += 2;
    }
  });

  return signals;
};
