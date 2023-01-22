/* eslint-disable no-console */
import fs from 'fs';

export default (path: string): string => {
  let data: string;
  try {
    data = fs.readFileSync(path, `utf8`);
  } catch (err) {
    console.error(err);
    throw err;
  }

  return data;
};
