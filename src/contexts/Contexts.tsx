import React, { FC, ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from '../providers/CurrentUserProvider';

interface ContextsProps {
  children?: ReactNode;
}

const Contexts: FC<ContextsProps> = ({ children }) => {
  return (
    <Router>
      <CurrentUserProvider>{children}</CurrentUserProvider>
    </Router>
  );
};

export default Contexts;
