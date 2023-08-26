import { Typography } from '@mui/material';

import { IS2_LOGO } from '@site/common/static';
import { TechnologiesList, OccupationRow } from '../../components';

const InsightSquared = (): JSX.Element => {
  return (
    <OccupationRow
      company="InsightSquared"
      imageProps={{
        alt: 'InsightSquared Logo',
        height: 108,
        src: IS2_LOGO,
        width: 144,
      }}
      timespan="September 2015–October 2018"
      title="Software Engineer">
      <Typography variant="body2">
        InsightSquared provided a web-based business intelligence platform to
        help executives and sales operations leaders make better decisions. At
        InsightSquared, I work as a full-stack engineer building web services
        that help customers analyze their CRM data.
      </Typography>
      <Typography sx={{ pt: 2 }} variant="subtitle1">
        <b>Technologies Used</b>
      </Typography>
      <TechnologiesList
        technologies={[`React.js`, `Django`, `Python`, `AWS`]}
      />
    </OccupationRow>
  );
};

export default InsightSquared;
