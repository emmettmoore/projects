import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Image, { ImageProps } from 'next/image';

interface Props {
  title: string;
  acquired?: boolean;
  company?: string;
  timespan: string;
  children?: React.ReactNode;
  imageProps: ImageProps;
}

const OccupationRow = ({
  title,
  acquired = false,
  company,
  timespan,
  children,
  imageProps,
}: Props): JSX.Element => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up(`sm`));
  return (
    <Box sx={{ margin: `0 auto`, maxWidth: 750 }}>
      <Box
        sx={{
          display: `flex`,
          flexDirection: {
            xs: `column`,
            sm: `row`,
          },
          alignItems: `flex-start`,
          justifyContent: { xs: ``, sm: `space-between` },
          mb: 2,
        }}>
        <Box sx={{ order: 1 }}>
          {isSmUp && company && (
            <Typography sx={{ mb: 1 }} variant="h3">
              {company}
            </Typography>
          )}
          <Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="caption">
              <em>{acquired ? `${timespan} (acquired)` : timespan}</em>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ minWidth: 25, mb: { xs: 2, sm: 0 }, order: { xs: 0, sm: 2 } }}>
          <Image {...imageProps} />
        </Box>
      </Box>
      {children ? children : null}
    </Box>
  );
};

export default OccupationRow;
