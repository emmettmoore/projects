import { Typography } from '@mui/material';

import { NEIGHBORSCHOOLS_LOGO } from '@site/common/static';

import { TechnologiesList, OccupationRow } from '../../components';

const NeighborSchools = (): JSX.Element => {
  return (
    <OccupationRow
      acquired
      company="NeighborSchools"
      imageProps={{
        alt: 'NeighborSchools Logo',
        height: 50,
        src: NEIGHBORSCHOOLS_LOGO,
        width: 130,
      }}
      timespan="October 2018–August 2022"
      title="Founding Software Engineer (full-stack)">
      <Typography paragraph variant="body2">
        First engineer @ NeighborSchools
      </Typography>
      <Typography paragraph variant="body2">
        I designed and implemented our billing infrastructure, created an
        algorithm to match parents to available daycares, and hired/mentored
        newer members of the engineering team.
      </Typography>
      <Typography paragraph variant="body2">
        I wrote code every day, working with an incredible GTM, product, and
        engineering team to to empower child care providers to open and operate
        home daycare businesses.
      </Typography>
      <Typography paragraph variant="body2">
        NeighborSchools was acquired by Higher Ground Education in 2022.
      </Typography>
      <TechnologiesList
        technologies={[
          `React.js`,
          `GraphQL`,
          `Next.js`,
          `Typescript`,
          `Prisma`,
          `AWS`,
        ]}
      />
    </OccupationRow>
  );
};

export default NeighborSchools;
