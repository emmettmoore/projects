import { Chip } from '@mui/material';
import classNames from 'classnames';

import styles from './MediaChip.module.scss';

interface Props {
  label: string;
  active: boolean;
  onClick: () => void;
}

const MediaChip = ({ label, active, onClick }: Props): JSX.Element => {
  return (
    <Chip
      classes={{
        root: classNames(styles.chip, {
          [styles.active]: active,
        }),
      }}
      clickable
      label={label}
      onClick={(): void => {
        onClick();
      }}
    />
  );
};

export default MediaChip;
