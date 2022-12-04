import getSectionsFromRawInput from '../getSectionsFromRawInput';

/**
 * Given a raw input string, with new lines separating each input,
 * and additional blank lines separating grouped sections,
 * return a list of sections where each section is a list of strings.
 */
export default (rawInput: string): Array<Array<number>> => {
  const sections = getSectionsFromRawInput(rawInput);

  return sections.map((section) => {
    return section.map((line) => {
      return parseInt(line, 10);
    });
  });
};
