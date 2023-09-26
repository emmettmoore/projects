export const adjustYearForAdultChart = (age: number): number => {
  return age - 2015;
};

export const get18AdjustedAgeFormatter = (): ((val: number) => string) => {
  return (val: number): string => {
    return `${val + 2015}`;
  };
};
