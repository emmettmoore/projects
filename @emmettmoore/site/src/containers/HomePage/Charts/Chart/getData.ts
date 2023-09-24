export default (): Array<{
  age: number;
  climbing: number;
  music: number;
  climbingEnthusiasm?: `None` | `Interested` | `Dedicated` | `Overboard?`;
}> => {
  return [
    {
      age: 0,
      climbing: 0,
      music: 0,
    },
    {
      age: 5,
      climbing: 0,
      music: 0,
    },
    {
      age: 6,
      climbing: 0,
      music: 15,
    },
    {
      age: 8,
      climbing: 0,
      music: 15,
    },
    {
      age: 9,
      climbing: 10,
      music: 15,
    },
    {
      age: 10,
      climbing: 0,
      music: 15,
    },
    {
      age: 12,
      climbing: 0,
      music: 20,
    },
    {
      age: 15,
      climbing: 0,
      music: 35,
    },
    {
      age: 17,
      climbing: 0,
      music: 40,
    },
    {
      age: 18,
      climbing: 20,
      music: 25,
    },
    {
      age: 19,
      climbing: 60,
      music: 0,
    },
    {
      age: 20,
      climbing: 90,
      music: 0,
    },
    {
      age: 21,
      climbing: 95,
      music: 0,
    },
    {
      age: 24,
      climbing: 75,
      music: 0,
    },
    {
      age: 30,
      climbing: 68,
      music: 0,
    },
  ];
};
