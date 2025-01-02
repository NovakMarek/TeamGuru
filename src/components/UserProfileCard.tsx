import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

export interface UserProfileCardProps {
  address: string;
}

const UserProfileCard: FC<UserProfileCardProps> = ({ address }) => {
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
      </Box>
    </Box>
  );
};

export default UserProfileCard;
