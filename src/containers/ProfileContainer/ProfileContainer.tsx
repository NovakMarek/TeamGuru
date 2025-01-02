import React from 'react';

import { Container } from '@mui/material';
import UserProfileCard from '../../components/UserProfileCard';
import { useCurrentUserContext } from '../../contexts/useCurrentUserContext';
import { useGetCoordinates } from '../../hooks/queries/useGetCoordinates';

const ProfileContainer = () => {
  const { currentUser } = useCurrentUserContext();
  const { data: address, isLoading } = useGetCoordinates(
    currentUser?.address || '',
  );

  if (!currentUser) {
    return <p>Error during loading user</p>;
  }

  return (
    <Container>
      <UserProfileCard
        address={currentUser.address}
        coordinates={address}
        isLoadingCoordinates={isLoading}
      />
    </Container>
  );
};

export default ProfileContainer;
