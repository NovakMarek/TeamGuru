import React, { FC, ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from '../providers/CurrentUserProvider';
import { DialogProvider } from '../providers/DialogProvider';

interface ContextsProps {
  children?: ReactNode;
}

const Contexts: FC<ContextsProps> = ({ children }) => {
  return (
    <Router>
      <CurrentUserProvider>
        <DialogProvider>{children}</DialogProvider>
      </CurrentUserProvider>
    </Router>
  );
};

export default Contexts;
