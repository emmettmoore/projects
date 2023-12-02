import { Fill, Chamber } from '../types';

export default (chamber: Chamber): Chamber => {
  return [
    [Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air],
    [Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air],
    [Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air, Fill.Air],
  ].concat(chamber) as Chamber;
};
