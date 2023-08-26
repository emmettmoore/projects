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
      title="Sr. Software Engineer">
      <Typography paragraph variant="body2">
        NeighborSchools works with prospective child care providers to help them
        open and operate their own in-home programs. I joined NeighborSchools as
        the first employee to build a web application that helps child care
        professionals open licensed daycare programs in their homes.
      </Typography>
      <Typography paragraph variant="body2">
        I designed and implemented a billing solution that processed over $10M
        transactions, developed a comprehensive GraphQL API for our app using
        Apollo Server / Apollo Client, and built a custom CRM for tracking our
        relationships with parents and child care providers. I also managed our
        engineering hiring process and provided strategic research and technical
        guidance to our SEO efforts.
      </Typography>
      <Typography paragraph variant="body2">
        NeighborSchools was acquired by Higher Ground Education in 2022.
      </Typography>
      <Typography paragraph sx={{ mb: 0, pt: 2 }} variant="subtitle1">
        <b>Technologies Used</b>
      </Typography>
      <TechnologiesList
        technologies={[
          `React.js`,
          `GraphQL`,
          `Next.js`,
          `Node.js`,
          `Material UI`,
          `Express`,
          `AWS`,
        ]}
      />
    </OccupationRow>
  );
};

export default NeighborSchools;
