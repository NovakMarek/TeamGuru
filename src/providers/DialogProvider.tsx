import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

export interface DialogInterface {
  show: (component: ReactNode) => void;
  close: () => void;
}

export const DialogContext = createContext<DialogInterface | null>(null);

interface DialogProviderProps {
  children?: ReactNode;
}

export const DialogProvider: FC<DialogProviderProps> = ({ children }) => {
  const [dialog, setDialog] = useState<ReactNode | null>();

  let dialogPortalNode = document.getElementById('dialog-portal');

  if (!dialogPortalNode) {
    dialogPortalNode = document.createElement('div');
    dialogPortalNode.setAttribute('id', 'dialog-portal');

    document.body.appendChild(dialogPortalNode);
  }

  const openDialog = useCallback((dialogComponent: ReactNode) => {
    setDialog(dialogComponent);
  }, []);

  const closeDialog = useCallback(() => {
    setDialog(null);
  }, []);

  return (
    <DialogContext.Provider value={{ show: openDialog, close: closeDialog }}>
      {dialog && createPortal(dialog, dialogPortalNode)}
      {children}
    </DialogContext.Provider>
  );
};
