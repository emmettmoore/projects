// import { getAllSolutions as getAll2022Solutions } from './2022';
import { Solution } from '../types';
import { getAllSolutions as getAll2023Solutions } from './2023';

const getAllSolutions = (): Solution => {
  return getAll2023Solutions();
};

export default getAllSolutions;
