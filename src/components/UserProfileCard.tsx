import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { CurrentUser } from '../models/User';

export interface UserProfileCardProps {
  user: CurrentUser;
}

const UserProfileCard: FC<UserProfileCardProps> = ({ user }) => {
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
        User Profile
      </Typography>
      <Box component="div">
        <Typography variant="body1">Name: {user.name}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Location: {user.location}</Typography>
      </Box>
    </Box>
  );
};

export default UserProfileCard;
