import { Chamber } from './types';

export default (rock: Chamber, chamber: Chamber): void => {
  while (rock.length > 0) {
    const row = rock.pop();
    if (row === undefined) {
      break;
    }

    chamber.unshift(row);
  }
};
