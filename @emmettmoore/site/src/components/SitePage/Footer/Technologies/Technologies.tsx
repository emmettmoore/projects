import { Box, Typography } from '@mui/material';
import styles from './Technologies.module.scss';
import Technology from './Technology';

const Technologies = (): JSX.Element => {
  return (
    <Box sx={{ padding: 1 }}>
      <div>
        <Typography component="div" sx={{ color: 'white ' }} variant="caption">
          This site was built with
        </Typography>
      </div>
      <div className={styles.technologies}>
        <div>
          <Technology>Next.js</Technology>
          <Technology>React</Technology>
        </div>
        <div>
          <Technology>Material UI</Technology>
          <Technology>Typescript</Technology>
        </div>
      </div>
    </Box>
  );
};

export default Technologies;
