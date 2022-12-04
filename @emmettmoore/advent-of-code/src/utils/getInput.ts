/* eslint-disable no-console */
import fs from 'fs';

export default (): string => {
  let data: string;
  try {
    data = fs.readFileSync(`./input.txt`, `utf8`);
  } catch (err) {
    console.error(err);
    throw err;
  }

  return data;
};
