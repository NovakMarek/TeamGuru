import { useContext } from 'react';

import { CurrentUserContext } from '../providers/CurrentUserProvider';

export const useCurrentUserContext = () => {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error(
      'useCurrentUserContext must be used within CurrentUserProvider',
    );
  }

  return context;
};
