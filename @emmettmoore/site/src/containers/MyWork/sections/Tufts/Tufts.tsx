import { TUFTS_LOGO } from '@site/common/static';

import { OccupationRow } from '../../components';

const Tufts = (): JSX.Element => {
  return (
    <OccupationRow
      company="Tufts University"
      imageProps={{
        alt: 'Tufts Logo',
        height: 57,
        src: TUFTS_LOGO,
        width: 130,
      }}
      timespan="2011-2015"
      title="BS Computer Science"
    />
  );
};

export default Tufts;
