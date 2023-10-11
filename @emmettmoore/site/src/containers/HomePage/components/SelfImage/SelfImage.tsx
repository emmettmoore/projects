/* eslint-disable filenames/match-exported */
import Image from 'next/image';
import { EMMETT_GREEN_CLIFF } from '@site/common/static';

import styles from './SelfImage.module.scss';

const SelfImage = (): JSX.Element => {
  return (
    <Image
      alt="Me and my cat"
      className={styles.image}
      height={427}
      src={EMMETT_GREEN_CLIFF}
      width={320}
    />
  );
};

export default SelfImage;
