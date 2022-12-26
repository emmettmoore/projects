import { Fill, Chamber } from '../types';

export default (chamber: Chamber): number => {
  return (
    chamber.length -
    chamber.findIndex((row) => {
      return row.includes(Fill.Rock);
    })
  );
};
