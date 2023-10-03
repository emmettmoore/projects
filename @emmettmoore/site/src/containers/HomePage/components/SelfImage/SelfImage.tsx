/* eslint-disable filenames/match-exported */
import Image from 'next/image';
import { EMMETT_AND_ROCKY } from '@site/common/static';

import styles from './SelfImage.module.scss';

const SelfImage = (): JSX.Element => {
  return (
    <Image
      alt="Me and my cat"
      className={styles.image}
      height={427}
      src={EMMETT_AND_ROCKY}
      width={320}
    />
  );
};

export default SelfImage;
