import { HomePageRoute, MyWorkRoute } from '@site/common/routes';

import {
  Home as HomeIcon,
  Work as WorkIcon,
  SvgIconComponent,
} from '@mui/icons-material';
export interface NavItem {
  name: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Icon: SvgIconComponent;
  visibility: {
    mobile: boolean;
    desktop: boolean;
  };
}

export default (): Array<NavItem> => {
  return [
    {
      name: `Home`,
      path: HomePageRoute.getPath({}),
      Icon: HomeIcon,
      visibility: {
        mobile: true,
        desktop: false,
      },
    },
    {
      name: `My Work`,
      path: MyWorkRoute.getPath({}),
      Icon: WorkIcon,
      visibility: {
        mobile: true,
        desktop: true,
      },
    },
  ];
};
