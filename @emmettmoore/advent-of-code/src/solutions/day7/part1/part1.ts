import _ from 'lodash';

import getData from '../getData';
import {
  getInputLines,
  getRootDirectoryFromLines,
  DirectorySummary,
  getAllDirectorySummaries,
} from '../utils';

const TARGET_SIZE = 100000;
export default (): number => {
  const data = getData();

  const lines = getInputLines(data);

  const rootDirectory = getRootDirectoryFromLines(lines);

  const allDirectorySummaries = new Array<DirectorySummary>();
  getAllDirectorySummaries(`/`, rootDirectory, allDirectorySummaries);

  const allResultsTotal = _.sum(
    allDirectorySummaries
      .filter(({ size }) => {
        return size <= TARGET_SIZE;
      })
      .map(({ size }) => {
        return size;
      })
  );

  return allResultsTotal;
};
