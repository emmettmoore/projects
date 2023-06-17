import {
  ListItemText,
  Box,
  Typography,
  ListItemButton,
  ListItemIcon,
  List,
  ListItem,
  IconButton,
  Drawer,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import styles from './MobileDrawer.module.scss';

import { NavItem } from '../../getNavItems';

interface Props {
  open: boolean;
  navItems: Array<NavItem>;
  onClose: () => void;
}

const MobileDrawer = ({ open, navItems, onClose }: Props): JSX.Element => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      PaperProps={{ className: styles.mobileDrawer }}>
      <Box className={styles.row} sx={{ m: 1 }}>
        <Typography component="div" variant="subtitle1">
          Emmett Moore
        </Typography>
        <IconButton aria-label="Close" color="primary" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}></List>
      {navItems.map(({ name, path, Icon }) => {
        return (
          <ListItem key={name} disablePadding>
            <ListItemButton
              color="inherit"
              component={Link}
              href={path}
              onClick={(): void => {
                onClose();
              }}>
              <ListItemIcon>
                <Icon color="primary" />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </Drawer>
  );
};

export default MobileDrawer;
