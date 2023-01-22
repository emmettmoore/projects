import _ from 'lodash';
import { InvalidParsingError } from '../../errors';

export interface Directory {
  parent: Directory | null;
  directories: Record<string, Directory>;
  files: Record<string, number>;
}

export type Line =
  | {
      kind: `cd`;
      dir: string;
    }
  | {
      kind: `ls`;
    }
  | {
      kind: `file`;
      name: string;
      size: number;
    }
  | {
      kind: `dir`;
      name: string;
    };

export interface DirectorySummary {
  name: string;
  size: number;
}

export const getRootDirectoryFromLines = (lines: Array<Line>): Directory => {
  const directoryRoot: Directory = {
    parent: null,
    directories: {},
    files: {},
  };

  let i = 1; // Skip first line ("$ cd /")
  let currDirectory = directoryRoot;
  while (i < lines.length) {
    const line = lines[i];
    if (line.kind === `cd`) {
      if (line.dir == `..`) {
        if (currDirectory.parent !== null) {
          // if currDirectory is null, it's root - cd .. keeps same dir.
          currDirectory = currDirectory.parent;
        }
      } else {
        if (!(line.dir in currDirectory)) {
          currDirectory.directories[line.dir] = {
            parent: currDirectory,
            directories: {},
            files: {},
          };
        }
        currDirectory = currDirectory.directories[line.dir];
      }
    } else if (line.kind === `file`) {
      currDirectory.files[line.name] = line.size;
    } else if (line.kind === `dir`) {
      currDirectory.directories[line.name] = {
        parent: currDirectory,
        directories: {},
        files: {},
      };
    } else if (line.kind === `ls`) {
      // do nothing
    }

    i += 1;
  }
  return directoryRoot;
};

export const getInputLines = (data: Array<Array<string>>): Array<Line> => {
  const lines: Array<Line> = data.map((segment) => {
    if (segment[0] === `$`) {
      if (segment[1] === `cd`) {
        return {
          kind: `cd`,
          dir: segment[2],
        };
      }
      if (segment[1] === `ls`) {
        return {
          kind: `ls`,
        };
      }
      throw new InvalidParsingError();
    } else if (segment[0] === `dir`) {
      return {
        kind: `dir`,
        name: segment[1],
      };
    }

    return {
      kind: `file`,
      size: parseInt(segment[0], 10),
      name: segment[1],
    };
  });

  return lines;
};
export const getAllDirectorySummaries = (
  name: string,
  dir: Directory,
  allDirectorySummaries: Array<DirectorySummary>
): number => {
  const subdirectories = Object.entries(dir.directories);
  const fileSizes = Object.values(dir.files);
  const filesOnlySum = _.sum(fileSizes);

  const subDirTotals = _.sum(
    subdirectories.map(([subDirName, subDir]) => {
      return getAllDirectorySummaries(
        subDirName,
        subDir,
        allDirectorySummaries
      );
    })
  );

  const filesAndSubDirTotals = filesOnlySum + subDirTotals;

  allDirectorySummaries.push({ name, size: filesAndSubDirTotals });

  return filesAndSubDirTotals;
};
