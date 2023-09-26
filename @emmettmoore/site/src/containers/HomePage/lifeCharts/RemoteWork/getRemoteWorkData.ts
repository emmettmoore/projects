import { adjustYearForAdultChart } from '../utils';

import { MEDIUM, HIGH, OFFICE, HOME } from './utils';

export default (): Array<{
  year: number;
  location: number;
  happiness: number;
  productivity: number;
}> => {
  return [
    {
      year: adjustYearForAdultChart(2015),
      location: OFFICE,
      happiness: MEDIUM + (HIGH - MEDIUM) / 2 - 10,
      productivity: MEDIUM + 10,
    },
    {
      year: adjustYearForAdultChart(2020.2),
      location: OFFICE,
      happiness: MEDIUM + (HIGH - MEDIUM) / 2 - 10,
      productivity: MEDIUM + 10,
    },
    {
      year: adjustYearForAdultChart(2020.25),
      location: HOME,
      happiness: MEDIUM + (HIGH - MEDIUM) / 2 - 10,
      productivity: MEDIUM + 10,
    },
    {
      year: adjustYearForAdultChart(2023),
      location: HOME,
      happiness: HIGH - 10,
      productivity: MEDIUM + 10,
    },
  ];
};
