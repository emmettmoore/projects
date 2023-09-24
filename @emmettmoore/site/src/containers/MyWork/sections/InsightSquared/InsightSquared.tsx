import { useTheme, useMediaQuery, Typography } from '@mui/material';

import { IS2_LOGO, IS2_LOGO_FULL } from '@site/common/static';
import { TechnologiesList, OccupationRow } from '../../components';

const InsightSquared = (): JSX.Element => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down(`sm`));
  return (
    <OccupationRow
      company="InsightSquared"
      imageProps={
        isSmDown
          ? {
              alt: 'InsightSquared Logo',
              height: 90,
              src: IS2_LOGO_FULL,
              width: 180,
            }
          : {
              alt: 'InsightSquared Logo',
              height: 75,
              src: IS2_LOGO,
              width: 100,
            }
      }
      timespan="September 2015–October 2018"
      title="Software Engineer">
      <Typography paragraph variant="body2">
        Full stack web developer @ InsightSquared
      </Typography>
      <Typography paragraph variant="body2">
        I worked on the platform team to build new features in our core product,
        a web platform that helps businesses automatically insights into their
        CRM data. I learned the principles of B2B SaaS engineering from an
        amazing team.
      </Typography>
      <TechnologiesList
        technologies={[`React.js`, `Django`, `Python`, `AWS`]}
      />
    </OccupationRow>
  );
};

export default InsightSquared;
