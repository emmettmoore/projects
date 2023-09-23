import { Typography } from '@mui/material';

import { IS2_LOGO } from '@site/common/static';
import { TechnologiesList, OccupationRow } from '../../components';

const InsightSquared = (): JSX.Element => {
  return (
    <OccupationRow
      company="InsightSquared"
      imageProps={{
        alt: 'InsightSquared Logo',
        height: 75,
        src: IS2_LOGO,
        width: 100,
      }}
      timespan="September 2015–October 2018"
      title="Software Engineer">
      <Typography paragraph variant="body2">
        Platform team @ InsightSquared
      </Typography>
      <Typography variant="body2">
        I worked as a full-stack engineer building web services that help
        customers analyze their CRM data.
      </Typography>
      <Typography variant="body2">
        business intelligence platform to help executives and sales operations
        leaders make better decisions.
      </Typography>
      <TechnologiesList
        technologies={[`React.js`, `Django`, `Python`, `AWS`]}
      />
    </OccupationRow>
  );
};

export default InsightSquared;
