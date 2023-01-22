import { Chamber, Fill } from '../../../../utils';

interface Test {
  name: string;
  chamber: Chamber;
  output: Chamber | null;
}

const mapChamber = (lines: Array<string>): Chamber => {
  return lines.map((line) => {
    return line.split(``) as Array<Fill>;
  });
};

export default (): Array<Test> => {
  return [
    {
      name: `not fully blocked`,
      chamber: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..####.`,
      ]),
      output: null,
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
      output: null,
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
      output: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `#######`,
      ]),
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
        `.#.....`,
        `..#....`,
        `...#...`,
      ]),
      output: mapChamber([
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `..#....`,
        `#######`,
      ]),
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
      output: mapChamber([
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..#####`,
      ]),
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
      output: mapChamber([
        `..#....`,
        `..#....`,
        `####...`,
        `..###..`,
        `...#...`,
        `..#####`,
      ]),
    },
  ];
};
