import { Chip, Box } from '@mui/material';
import classNames from 'classnames';
import { saira } from '@site/fonts';

import styles from './TechnologiesList.module.scss';

interface Props {
  technologies: Array<string>;
}

const TechnologiesList = ({ technologies }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        display: `flex`,
        m: 0,
        flexWrap: `wrap`,
        gap: 1,
      }}>
      {technologies.map((technology) => {
        return (
          <Chip
            key={technology}
            className={classNames(saira.className, styles.chip)}
            label={technology}
          />
        );
      })}
    </Box>
  );
};

export default TechnologiesList;
