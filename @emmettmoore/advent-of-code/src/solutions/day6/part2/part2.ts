import getData from '../getData';

const START_OF_MESSAGE_MARKER_LENGTH = 14;
export default async (): Promise<number> => {
  const data = getData();

  let i = START_OF_MESSAGE_MARKER_LENGTH;
  while (i < data.length) {
    const elems = new Set(data.slice(i - START_OF_MESSAGE_MARKER_LENGTH, i));

    const count = Array.from(elems).length;

    if (count === START_OF_MESSAGE_MARKER_LENGTH) {
      break;
    }
    i += 1;
  }

  return i;
};
