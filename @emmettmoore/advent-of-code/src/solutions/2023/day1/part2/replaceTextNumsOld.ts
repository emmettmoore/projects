export default (line: string[], variant: `start` | `end`): string[] => {
  let s = line.join('');
  while (true) {
    const indexOfOne = s.indexOf('one');
    const indexOfTwo = s.indexOf('two');
    const indexOfThree = s.indexOf('three');
    const indexOfFour = s.indexOf('four');
    const indexOfFive = s.indexOf('five');
    const indexOfSix = s.indexOf('six');
    const indexOfSeven = s.indexOf('seven');
    const indexOfEight = s.indexOf('eight');
    const indexOfNine = s.indexOf('nine');

    const indexes = [
      indexOfOne,
      indexOfTwo,
      indexOfThree,
      indexOfFour,
      indexOfFive,
      indexOfSix,
      indexOfSeven,
      indexOfEight,
      indexOfNine,
    ];

    const indexesToReplace = indexes.filter((i) => {
      return i >= 0;
    });

    if (indexesToReplace.length < 1) {
      break;
    }

    const indexOfTextNumber =
      variant === `start`
        ? Math.min(...indexesToReplace)
        : Math.max(...indexesToReplace);

    const numberToReplace =
      indexes.findIndex((option: number) => {
        return option >= 0 && option === indexOfTextNumber;
      }) + 1;

    const mapping: { [key: number]: { current: string; newVal: string } } = {
      1: { current: `one`, newVal: `1` },
      2: { current: `two`, newVal: `2` },
      3: { current: `three`, newVal: `3` },
      4: { current: `four`, newVal: `4` },
      5: { current: `five`, newVal: `5` },
      6: { current: `six`, newVal: `6` },
      7: { current: `seven`, newVal: `7` },
      8: { current: `eight`, newVal: `8` },
      9: { current: `nine`, newVal: `9` },
    };

    const { current, newVal } = mapping[numberToReplace];

    s = s.replace(current, newVal);
  }

  return s.split('');
};
