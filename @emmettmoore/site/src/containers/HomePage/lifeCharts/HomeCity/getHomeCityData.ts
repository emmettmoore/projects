import { HOUSTON, DOVER, SOMERVILLE, BOSTON, CAMBRIDGE } from './utils';

export default (): Array<{
  age: number;
  location: number;
}> => {
  return [
    {
      age: 0,
      location: HOUSTON,
    },
    {
      age: 12.7,
      location: HOUSTON,
    },
    {
      age: 12.75,
      location: DOVER,
    },
    {
      age: 17.95,
      location: DOVER,
    },
    {
      age: 18,
      location: SOMERVILLE,
    },
    {
      age: 21.95,
      location: SOMERVILLE,
    },
    {
      age: 22,
      location: BOSTON,
    },
    {
      age: 22.95,
      location: BOSTON,
    },
    {
      age: 23,
      location: SOMERVILLE,
    },
    {
      age: 25.95,
      location: SOMERVILLE,
    },
    {
      age: 26,
      location: CAMBRIDGE,
    },
    {
      age: 30,
      location: CAMBRIDGE,
    },
  ];
};
