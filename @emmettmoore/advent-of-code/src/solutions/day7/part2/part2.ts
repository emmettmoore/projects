import _ from 'lodash';

import { InvalidParsingError } from '../../../errors';
import getData from '../getData';
import {
  getInputLines,
  getRootDirectoryFromLines,
  DirectorySummary,
  getAllDirectorySummaries,
} from '../utils';

const TOTAL_DISK_SPACE = 70000000;
const UNUSED_NEEDED_FOR_UPDATE = 30000000;

export default (): number => {
  const data = getData();

  const lines = getInputLines(data);

  const rootDirectory = getRootDirectoryFromLines(lines);

  const allDirectorySummaries = new Array<DirectorySummary>();
  const rootSize = getAllDirectorySummaries(
    `/`,
    rootDirectory,
    allDirectorySummaries
  );

  const currentUnused = TOTAL_DISK_SPACE - rootSize;

  const neededForDeletion = UNUSED_NEEDED_FOR_UPDATE - currentUnused;

  const minDirectory = _.min(
    allDirectorySummaries
      .filter((summary) => {
        return summary.size >= neededForDeletion;
      })
      .map(({ size }) => {
        return size;
      })
  );

  if (!minDirectory) {
    throw new InvalidParsingError();
  }
  return minDirectory;
};
