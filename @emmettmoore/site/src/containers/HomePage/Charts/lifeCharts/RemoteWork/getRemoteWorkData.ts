const NOWHERE = 20;
const OFFICE = 50;
const HOME = 80;

export default (): Array<{
  age: number;
  location: number;
}> => {
  return [
    {
      age: 0,
      location: NOWHERE,
    },
    {
      age: 21.95,
      location: NOWHERE,
    },
    {
      age: 22,
      location: OFFICE,
    },
    {
      age: 25.5,
      location: OFFICE,
    },
    {
      age: 25.55,
      location: HOME,
    },
    {
      age: 30,
      location: HOME,
    },
  ];
};
