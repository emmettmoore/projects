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
      title="Founding Software Engineer">
      <Typography paragraph variant="body2">
        First engineer @ NeighborSchools
      </Typography>
      <Typography paragraph variant="body2">
        I designed and implemented our customer billing infrastructure, built
        out our core marketplace product, and scaled the engineering team. I
        worked alongside an incredible go-to-market team to empower child care
        providers to open and operate home daycare businesses.
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
