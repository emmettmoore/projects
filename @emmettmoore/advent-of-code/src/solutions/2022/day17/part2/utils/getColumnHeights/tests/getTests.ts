import { Chamber, Fill } from '../../../../utils';

interface Test {
  name: string;
  chamber: Chamber;
  output: Array<number>;
}

const mapChamber = (lines: Array<string>): Chamber => {
  return lines.map((line) => {
    return line.split(``) as Array<Fill>;
  });
};

export default (): Array<Test> => {
  return [
    {
      name: `no row`,
      chamber: mapChamber([]),
      output: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: `one row`,
      chamber: mapChamber([`.......`]),
      output: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: `empty chamber with many rows`,
      chamber: mapChamber([
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `.......`,
      ]),
      output: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: `chamber with complete floor`,
      chamber: mapChamber([
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `.......`,
        `#######`,
      ]),
      output: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      name: `not fully blocked (1)`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..####.`,
      ]),
      output: [0, 0, 5, 1, 1, 1, 0],
    },
    {
      name: `not fully blocked (2)`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..####.`,
      ]),
      output: [4, 4, 6, 4, 3, 1, 0],
    },
    {
      name: `fully blocked on one line`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `#######`,
      ]),
      output: [1, 1, 6, 1, 1, 1, 1],
    },
    {
      name: `fully blocked on one line with stuff below`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `#######`,
        `.#.....`,
        `..#....`,
        `...#...`,
      ]),
      output: [4, 4, 9, 4, 4, 4, 4],
    },
    {
      name: `fully blocked, nothing below bottom block`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..#####`,
      ]),
      output: [4, 4, 6, 4, 3, 1, 1],
    },
    {
      name: `fully blocked, extra rows below bottom block`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..#####`,
        `..##...`,
        `..##.##`,
        `.......`,
        `..#####`,
      ]),
      output: [8, 8, 10, 8, 7, 5, 5],
    },
  ];
};
