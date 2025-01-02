import React, { FC, ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from '../providers/CurrentUserProvider';
import { DialogProvider } from '../providers/DialogProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../config/queryClient/queryClient';

interface ContextsProps {
  children?: ReactNode;
}

const Contexts: FC<ContextsProps> = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <CurrentUserProvider>
          <DialogProvider>{children}</DialogProvider>
        </CurrentUserProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default Contexts;
