import { CSSInterpolation, ButtonProps } from '@mui/material';
import fonts from '../fonts';
export default {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: ButtonProps }): CSSInterpolation => {
      return {
        fontFamily: fonts.family.body,
        fontWeight: 600,
        color:
          // make text color white for secondary buttons on orange background.
          ownerState.variant === `contained` && ownerState.color === `secondary`
            ? `#FFF`
            : undefined,
      };
    },
  },
};
