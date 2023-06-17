import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import styles from './MobileFooter.module.scss';

const MobileFooter = (): JSX.Element => {
  return (
    <Box
      className={styles.mobileFooter}
      sx={{
        display: {
          sm: `none`,
        },
        width: 500,
      }}>
      <BottomNavigation value="Home">
        <BottomNavigationAction
          icon={<i className="fa-solid fa-house"></i>}
          label="Home"
          value="Home"
        />
        <BottomNavigationAction
          icon={<i className="fa-solid fa-address-book" />}
          label="Contact"
          value="Contact"
        />
        <BottomNavigationAction
          icon={<i className="fa-solid fa-file-lines" />}
          label="Resume"
          value="Resume"
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileFooter;
