import { MEH, NONE, NEAT, INTRODUCED, LOVE, ADOPTED } from './utils';
import { adjustYearForAdultChart } from '../utils';

export default (): Array<{
  age: number;
  enjoyment: number;
  react: number;
  typescript: number;
  cssModules: number;
}> => {
  return [
    {
      age: adjustYearForAdultChart(2015),
      enjoyment: MEH,
      react: NONE,
      typescript: NONE,
      cssModules: NONE,
    },
    {
      age: adjustYearForAdultChart(2016.5),
      enjoyment: MEH + (NEAT - MEH) / 2,
      react: INTRODUCED,
      typescript: NONE,
      cssModules: NONE,
    },
    {
      age: adjustYearForAdultChart(2018),
      enjoyment: NEAT,
      react: ADOPTED,
      typescript: NONE,
      cssModules: ADOPTED,
    },
    {
      age: adjustYearForAdultChart(2019),
      enjoyment: NEAT + (LOVE - NEAT) * 0.33,
      react: ADOPTED,
      typescript: INTRODUCED,
      cssModules: ADOPTED,
    },
    {
      age: adjustYearForAdultChart(2020),
      enjoyment: NEAT + (LOVE - NEAT) * 0.67,
      react: ADOPTED,
      typescript: ADOPTED,
      cssModules: ADOPTED,
    },
    {
      age: adjustYearForAdultChart(2021),
      enjoyment: LOVE,
      react: ADOPTED,
      typescript: ADOPTED,
      cssModules: ADOPTED,
    },
    {
      age: adjustYearForAdultChart(2023),
      enjoyment: LOVE,
      react: ADOPTED,
      typescript: ADOPTED,
      cssModules: ADOPTED,
    },
  ];
};
