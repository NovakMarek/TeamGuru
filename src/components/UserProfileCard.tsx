import React, { FC } from 'react';

import { Box, Divider, Skeleton, Typography } from '@mui/material';
import { Location } from '../models/Geometry';

export interface UserProfileCardProps {
  address: string;
  coordinates?: Location;
  isLoadingCoordinates: boolean;
}

const UserProfileCard: FC<UserProfileCardProps> = ({
  address,
  coordinates,
  isLoadingCoordinates,
}) => {
  return (
    <Box
      component="div"
      sx={{
        p: 3,
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Your address
      </Typography>
      <Box component="div">
        <Typography variant="body1">{address}</Typography>
        <Divider sx={{ my: 2 }} />
        {isLoadingCoordinates || !coordinates ? (
          <>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={100} />
          </>
        ) : (
          <>
            <Typography variant="body1">Lat: {coordinates.lat}</Typography>

            <Typography variant="body1">Lng: {coordinates.lng}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default UserProfileCard;
