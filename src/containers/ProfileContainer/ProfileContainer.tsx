import React from 'react';

import { Container } from '@mui/material';
import UserProfileCard from '../../components/UserProfileCard';
import { useCurrentUserContext } from '../../contexts/useCurrentUserContext';

const ProfileContainer = () => {
  const { currentUser } = useCurrentUserContext();

  if (!currentUser) {
    return <p>Error during loading user</p>;
  }

  return (
    <Container>
      <UserProfileCard user={currentUser} />
    </Container>
  );
};

export default ProfileContainer;
