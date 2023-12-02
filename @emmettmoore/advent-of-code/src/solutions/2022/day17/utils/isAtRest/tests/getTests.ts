import { Chamber, Fill } from '../../types';
interface Test {
  name: string;
  chamber: Chamber;
  output: boolean;
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
        `..@@@@.`,
        `.......`,
      ]),
      output: false,
    },
    {
      name: `dash rock on floor is at rest`,
      chamber: mapChamber([
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `..@@@@.`,
      ]),
      output: true,
    },
    {
      name: `plus rock on floor is at rest`,
      chamber: mapChamber([
        `.......`,
        `...@...`,
        `..@@@..`,
        `...@...`,
        `.......`,
      ]),
      output: false,
    },
    {
      name: `plus rock on floor is at rest`,
      chamber: mapChamber([
        `.......`,
        `.......`,
        `...@...`,
        `..@@@..`,
        `...@...`,
      ]),
      output: true,
    },
    {
      name: `plus rock not on floor with adjacent rocks is not at rest`,
      chamber: mapChamber([
        `#......`,
        `#..@...`,
        `#.@@@..`,
        `#..@...`,
        `#......`,
      ]),
      output: false,
    },
    {
      name: `plus rock catches edge`,
      chamber: mapChamber([
        `#......`,
        `#..@...`,
        `#.@@@..`,
        `###@...`,
        `#......`,
      ]),
      output: true,
    },
    {
      name: `plus rock near miss 1`,
      chamber: mapChamber([
        `#......`,
        `#..@...`,
        `#.@@@..`,
        `##.@...`,
        `#......`,
      ]),
      output: false,
    },
    {
      name: `plus rock near miss 2`,
      chamber: mapChamber([
        `#......`,
        `#..@...`,
        `#.@@@..`,
        `#..@...`,
        `#.#.#..`,
      ]),
      output: false,
    },
    {
      name: `plus rock catches spike`,
      chamber: mapChamber([
        `#......`,
        `#..@...`,
        `#.@@@..`,
        `#..@...`,
        `#..#...`,
      ]),
      output: true,
    },
  ];
};
