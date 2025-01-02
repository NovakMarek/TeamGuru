import React, { FC } from 'react';

import { AppBar, Box, Button, Typography } from '@mui/material';

interface UserAppBarProps {
  name: string;
  username: string;
  logout: () => void;
}

const UserAppBar: FC<UserAppBarProps> = ({ name, username, logout }) => {
  return (
    <AppBar position="static" elevation={0}>
      <Box
        component="div"
        sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'space-between' }}
      >
        <Box component="div">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{username}</Typography>
        </Box>
        <Button
          size="small"
          variant="contained"
          disableElevation
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </AppBar>
  );
};

export default UserAppBar;
