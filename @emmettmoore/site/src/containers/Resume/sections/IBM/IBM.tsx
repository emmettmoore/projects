import { IBM_LOGO } from '@site/common/static';
import { OccupationRow } from '../../components';

const IBM = (): JSX.Element => {
  return (
    <OccupationRow
      company="IBM"
      imageProps={{
        alt: 'IBM Logo',
        height: 60,
        src: IBM_LOGO,
        width: 144,
      }}
      timespan="June 2013—August 2013"
      title="Software Engineering Intern"></OccupationRow>
  );
};

export default IBM;
