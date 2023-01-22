import { InvalidParsingError } from '../../../errors';

import getPriorityForCharacter from './getPriorityForCharacter';
describe(`getPriorityForCharacter`, (): void => {
  it(`works on lower case letters`, (): void => {
    expect(getPriorityForCharacter(`a`)).toEqual(1);
    expect(getPriorityForCharacter(`b`)).toEqual(2);
    expect(getPriorityForCharacter(`c`)).toEqual(3);
    expect(getPriorityForCharacter(`m`)).toEqual(13);
    expect(getPriorityForCharacter(`x`)).toEqual(24);
    expect(getPriorityForCharacter(`y`)).toEqual(25);
    expect(getPriorityForCharacter(`z`)).toEqual(26);
  });
  it(`works on uppercase letters`, (): void => {
    expect(getPriorityForCharacter(`A`)).toEqual(27);
    expect(getPriorityForCharacter(`B`)).toEqual(28);
    expect(getPriorityForCharacter(`C`)).toEqual(29);
    expect(getPriorityForCharacter(`M`)).toEqual(39);
    expect(getPriorityForCharacter(`X`)).toEqual(50);
    expect(getPriorityForCharacter(`Y`)).toEqual(51);
    expect(getPriorityForCharacter(`Z`)).toEqual(52);
  });
  it(`works on invalid characters`, (): void => {
    expect((): void => {
      getPriorityForCharacter(`~`);
    }).toThrow(InvalidParsingError);
    expect((): void => {
      getPriorityForCharacter(` `);
    }).toThrow(InvalidParsingError);
    expect((): void => {
      getPriorityForCharacter(`8`);
    }).toThrow(InvalidParsingError);
  });
});
