import React, { FC, ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface SimpleDialogProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
  contentText?: string;
}

const SimpleDialog: FC<SimpleDialogProps> = ({
  children,
  onClose,
  title,
  contentText,
}) => {
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {contentText && <DialogContentText>{contentText}</DialogContentText>}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
