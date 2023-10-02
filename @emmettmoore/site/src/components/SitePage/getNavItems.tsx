import { MyWorkRoute } from '@site/common/routes';

import { Work as WorkIcon, SvgIconComponent } from '@mui/icons-material';
export interface NavItem {
  name: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Icon: SvgIconComponent;
}

export default (): Array<NavItem> => {
  return [
    {
      name: `My Work`,
      path: MyWorkRoute.getPath({}),
      Icon: WorkIcon,
    },
  ];
};
