import { Chamber, Fill } from '../../types';

interface Test {
  name: string;
  chamber: Chamber;
  output: Chamber;
}

const mapChamber = (lines: Array<string>): Chamber => {
  return lines.map((line) => {
    return line.split(``) as Array<Fill>;
  });
};

export default (): Array<Test> => {
  return [
    {
      name: `dash rock on not on floor is not at rest`,
      chamber: mapChamber([
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `..####.`,
      ]),
      output: mapChamber([`..####.`]),
    },
    {
      name: `dash rock on not on floor is not at rest`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..####.`,
      ]),
      output: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..####.`,
      ]),
    },
    {
      name: `dash rock on not on floor is not at rest`,
      chamber: mapChamber([
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..####.`,
      ]),
      output: mapChamber([
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..####.`,
      ]),
    },
  ];
};
