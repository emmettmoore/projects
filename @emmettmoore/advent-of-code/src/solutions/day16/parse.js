/* eslint-disable */
import { getInput, getSectionsFromRawInput } from '../../utils';

import { Valve } from './utils';

const path = require('path');
const fs = require('fs');

const tunnelMap = new Map();
const input = getInput(`./input/d16p1small.txt`)
  .trim()
  .split('\n')
  .map((line) => {
    let neighbors = line.split(', ');
    neighbors[0] = neighbors[0].slice(-2);

    let valve = line.split(' ')[1];

    let flowRate = parseInt(line.split('=')[1].split(';')[0]);

    tunnelMap.set(valve, { neighbors, flowRate });
  });

module.exports = {
  tunnelMap,
};
