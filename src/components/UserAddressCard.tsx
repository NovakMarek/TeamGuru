import React, { FC } from 'react';

import { Box, Button, Divider, Skeleton, Typography } from '@mui/material';
import { Location } from '../models/Geometry';
import SimpleAlert from './ui/SimpleAlert';

export interface UserAddressCardProps {
  address: string;
  coordinates?: Location;
  isLoadingCoordinates: boolean;
  isErrorCoordinates: boolean;
  onEdit: () => void;
}

const UserAddressCard: FC<UserAddressCardProps> = ({
  address,
  coordinates,
  isLoadingCoordinates,
  isErrorCoordinates,
  onEdit,
}) => {
  if (isErrorCoordinates) {
    return <SimpleAlert message="Error fetching coordinates" />;
  }

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
      <Box
        component="div"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Your address
        </Typography>
        <Button
          size="small"
          variant="contained"
          disableElevation
          onClick={onEdit}
        >
          Edit
        </Button>
      </Box>
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

            <Typography variant="body1">Lon: {coordinates.lon}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default UserAddressCard;
