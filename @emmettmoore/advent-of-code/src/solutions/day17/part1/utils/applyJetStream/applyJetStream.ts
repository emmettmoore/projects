/* eslint-disable no-constant-condition */
import { Direction } from '../../../getData';
import { Chamber } from '../types';

import maybeApplyJetStreamLeft from './maybeApplyJetStreamLeft';
import maybeApplyJetStreamRight from './maybeApplyJetStreamRight';

export default (chamber: Chamber, direction: Direction): Chamber => {
  if (direction === `<`) {
    return maybeApplyJetStreamLeft(chamber);
  } else if (direction === `>`) {
    return maybeApplyJetStreamRight(chamber);
  }

  const exhaustiveCheck: never = direction;

  return exhaustiveCheck;
};
