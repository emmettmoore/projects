/**
 * Given a list of numbers in an input file of format, with new lines
 * separating each number, and additional blank lines separating sections,
 * return a list of sections where each section is a list of numbers.
 */
export default (rawInput: string): Array<Array<number>> => {
  const allLines = rawInput.split(`\n`);

  const sections = new Array<Array<number>>();

  let i = 0;
  let currentSection = null;
  while (i < allLines.length) {
    if (currentSection === null) {
      currentSection = new Array<number>();
    }

    const nextLine = allLines[i];
    if (nextLine === ``) {
      sections.push(currentSection);
      currentSection = null;
    } else {
      currentSection.push(parseInt(nextLine, 10));
    }

    if (currentSection && i === allLines.length - 1) {
      sections.push(currentSection);
    }

    i += 1;
  }

  return sections;
};
