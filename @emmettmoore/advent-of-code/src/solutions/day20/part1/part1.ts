import getData from '../getData';
import mixElement from './mixElement';

import { Element } from './types';

const logElements = (elements: Array<Element>): void => {
  // eslint-disable-next-line no-console
  console.log(
    elements
      .map(({ value: v }) => {
        return v;
      })
      .join(`, `)
  );
};

export default async (): Promise<number> => {
  const data = getData();

  const elements: Array<Element> = data.map((d, i) => {
    return {
      value: d,
      originalIndex: i,
    };
  });

  for (let i = 0; i < data.length; i += 1) {
    const index = elements.findIndex((n) => {
      return n.originalIndex === i;
    });

    const { value } = elements[index];

    mixElement(elements, value, index);
  }

  const indexOfZero = elements.findIndex((e) => {
    return e.value === 0;
  });

  logElements(elements);

  return (
    elements[(indexOfZero + 1000) % elements.length].value +
    elements[(indexOfZero + 2000) % elements.length].value +
    elements[(indexOfZero + 3000) % elements.length].value
  );
};
