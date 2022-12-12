import getInstructions from '../getInstructions';
import getSignals from '../getSignals';

const shouldRenderSprite = (signal: number, i: number): boolean => {
  const spritePositions = [signal - 1, signal, signal + 1];
  const cursorPosition = i % 40;
  return spritePositions.includes(cursorPosition);
};

const renderScreen = (signals: Array<number>): void => {
  let row = new Array<string>();
  signals.forEach((signal, i) => {
    const charToRender = shouldRenderSprite(signal, i) ? `#` : ` `;
    if (i % 40 === 0) {
      // eslint-disable-next-line no-console
      console.log(row.join(``));
      row = new Array<string>();
    }
    row.push(charToRender);
  });

  // eslint-disable-next-line no-console
  console.log();
};

export default (): string => {
  const instructions = getInstructions();

  const signals = getSignals(instructions);

  renderScreen(signals);

  return `See solution`;
};
