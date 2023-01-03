import { getInput, getStringInputSections } from '../../utils';
import { InvalidParsingError } from '../../errors';

export type Row =
  | {
      kind: `value`;
      key: string;
      value: number;
    }
  | {
      kind: `*`;
      key: string;
      left: string;
      right: string;
    }
  | {
      kind: `/`;
      key: string;
      left: string;
      right: string;
    }
  | {
      kind: `+`;
      key: string;
      left: string;
      right: string;
    }
  | {
      kind: `-`;
      key: string;
      left: string;
      right: string;
    };

export default (): Array<Row> => {
  const rawInput = getInput(`./input/d21small.txt`);
  const rawRows = getStringInputSections(rawInput, ` `);

  const rows = new Array<Row>();

  rawRows.forEach((r) => {
    const key = r[0].slice(0, 4); // remove ":"
    if (r.length === 2) {
      rows.push({
        kind: `value`,
        key,
        value: parseInt(r[1], 10),
      });
    } else if (r[2] === `+` || r[2] === `-` || r[2] === `*` || r[2] == `/`) {
      rows.push({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        kind: r[2] as any,
        key,
        left: r[1],
        right: r[3],
      });
    } else {
      throw new InvalidParsingError();
    }
  });

  return rows;
};
