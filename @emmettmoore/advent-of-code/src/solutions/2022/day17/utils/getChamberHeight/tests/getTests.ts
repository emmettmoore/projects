import { Chamber, Fill } from '../../types';
interface Test {
  name: string;
  chamber: Chamber;
  output: number;
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
      output: 1,
    },
    {
      name: `dash rock on floor is at rest`,
      chamber: mapChamber([
        `.......`,
        `...#...`,
        `...#...`,
        `...#...`,
        `..####.`,
      ]),
      output: 4,
    },
    {
      name: `plus rock on floor is at rest`,
      chamber: mapChamber([
        `.###...`,
        `...#...`,
        `..###..`,
        `...#...`,
        `...#...`,
      ]),
      output: 5,
    },
  ];
};
