import { useContext } from 'react';

import { DialogContext } from '../providers/DialogProvider';

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialogContext must be used within DialogProvider');
  }

  return context;
};
