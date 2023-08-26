import { HGE_LOGO } from '@site/common/static';

import { OccupationRow } from '../../components';

const HigherGround = (): JSX.Element => {
  return (
    <OccupationRow
      company="Higher Ground Education"
      imageProps={{
        alt: 'HigherGround Logo',
        height: 114,
        src: HGE_LOGO,
        width: 120,
      }}
      timespan="August 2022–present"
      title="Sr. Software Engineer"
    />
  );
};

export default HigherGround;
