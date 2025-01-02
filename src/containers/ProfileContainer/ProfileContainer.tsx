import React from 'react';

import { Box, Container } from '@mui/material';
import UserProfileCard from '../../components/UserAddressCard';
import { useCurrentUserContext } from '../../contexts/useCurrentUserContext';
import { useGetCoordinates } from '../../hooks/queries/useGetCoordinates';
import { useDialogContext } from '../../contexts/useDialogContext';
import EditAddressDialog from '../../dialogs/EditAddressDialog/EditAddressDialog';
import UserAppBar from '../../components/UserAppBar';
import SimpleAlert from '../../components/ui/SimpleAlert';

const ProfileContainer = () => {
  const { currentUser, logout } = useCurrentUserContext();
  const {
    data: coordinates,
    isLoading: isLoadingCoordinates,
    isError: isErrorCoordinates,
  } = useGetCoordinates(currentUser?.address || '');
  const { show, close } = useDialogContext();

  if (!currentUser) {
    return <SimpleAlert message="User not found" />;
  }

  const handleShowEditDialog = () => {
    show(<EditAddressDialog onClose={close} />);
  };

  return (
    <>
      <Box component="div" sx={{ mb: 2 }}>
        <UserAppBar
          name={currentUser.name}
          username={currentUser.username}
          logout={logout}
        />
      </Box>
      <Container>
        <UserProfileCard
          address={currentUser.address}
          coordinates={coordinates}
          isLoadingCoordinates={isLoadingCoordinates}
          isErrorCoordinates={isErrorCoordinates}
          onEdit={handleShowEditDialog}
        />
      </Container>
    </>
  );
};

export default ProfileContainer;
