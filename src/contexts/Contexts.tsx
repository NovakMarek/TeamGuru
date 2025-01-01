import React, { FC, ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

interface ContextsProps {
  children?: ReactNode;
}

const Contexts: FC<ContextsProps> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Contexts;
