import { Typography } from '@mui/material';

import styles from './TechnologiesList.module.scss';

interface Props {
  technologies: Array<string>;
}

const TechnologiesList = ({ technologies }: Props): JSX.Element => {
  return (
    <ul className={styles.technologiesList}>
      {technologies.map((technology) => {
        return (
          <li key={technology}>
            <Typography variant="body2">{technology}</Typography>
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
