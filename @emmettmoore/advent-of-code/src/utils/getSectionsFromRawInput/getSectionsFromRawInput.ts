/**
 * Given a raw input string, with new lines separating each input,
 * and additional blank lines separating grouped sections,
 * return a list of sections where each section is a list of strings.
 */
export default (rawInput: string): Array<Array<string>> => {
  const allLines = rawInput.split(`\n`);

  const sections = new Array<Array<string>>();

  let i = 0;
  let currentSection = null;
  while (i < allLines.length) {
    if (currentSection === null) {
      currentSection = new Array<string>();
    }

    const nextLine = allLines[i];
    if (nextLine === ``) {
      sections.push(currentSection);
      currentSection = null;
    } else {
      currentSection.push(nextLine);
    }

    if (currentSection && i === allLines.length - 1) {
      sections.push(currentSection);
    }

    i += 1;
  }

  return sections;
};
