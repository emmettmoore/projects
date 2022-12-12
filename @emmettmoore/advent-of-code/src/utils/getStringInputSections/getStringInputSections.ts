/**
 * Given a list of strings in a
 * separating each number, and additional blank lines separating sections,
 * return a list of sections where each section is a list of numbers.
 */
export default (
  rawInput: string,
  inlineSeparator?: string
): Array<Array<string>> => {
  const allLines = rawInput.split(`\n`);

  if (!inlineSeparator) {
    return allLines.map((line) => {
      return [line];
    });
  }

  return allLines.map((line) => {
    return line.split(inlineSeparator);
  });
};
