import React from 'react';

import { Alert } from '@mui/material';

interface SimpleAlertProps {
  message: string;
}

const SimpleAlert = ({ message }: SimpleAlertProps) => {
  return <Alert severity="error">{message}</Alert>;
};

export default SimpleAlert;
