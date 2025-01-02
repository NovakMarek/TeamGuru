import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
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
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [dialogPortalNode, setDialogPortalNode] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    let portalNode = document.getElementById('dialog-portal');
    if (!portalNode) {
      portalNode = document.createElement('div');
      portalNode.setAttribute('id', 'dialog-portal');
      document.body.appendChild(portalNode);
    }
    setDialogPortalNode(portalNode);
  }, []);

  const openDialog = useCallback((dialogComponent: ReactNode) => {
    setDialog(dialogComponent);
  }, []);

  const closeDialog = useCallback(() => {
    setDialog(null);
  }, []);

  return (
    <DialogContext.Provider value={{ show: openDialog, close: closeDialog }}>
      {dialogPortalNode && dialog && createPortal(dialog, dialogPortalNode)}
      {children}
    </DialogContext.Provider>
  );
};
