import { Typography } from '@mui/material';

import { HGE_LOGO } from '@site/common/static';

import { OccupationRow } from '../../components';

const HigherGround = (): JSX.Element => {
  return (
    <OccupationRow
      company="Higher Ground Education"
      imageProps={{
        alt: 'HigherGround Logo',
        height: 96,
        src: HGE_LOGO,
        width: 100,
      }}
      timespan="August 2022–present"
      title="Software Engineer">
      <Typography paragraph variant="body2">
        Full stack engineer @ Higher Ground Education
      </Typography>
      <Typography paragraph variant="body2">
        Tech lead of the NeighborSchools product
      </Typography>
    </OccupationRow>
  );
};

export default HigherGround;
