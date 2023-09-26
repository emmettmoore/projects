const TEXAS = 33;
const MASSACHUSETTS = 66;

export default (): Array<{
  age: number;
  location: number;
}> => {
  return [
    {
      age: 0,
      location: TEXAS,
    },
    {
      age: 12,
      location: TEXAS,
    },
    {
      age: 13,
      location: MASSACHUSETTS,
    },
    {
      age: 30,
      location: MASSACHUSETTS,
    },
  ];
};
