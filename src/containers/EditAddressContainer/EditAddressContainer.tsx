import React from 'react';

import AddressForm from '../../forms/AddressForm/AddressForm';
import { useCurrentUserContext } from '../../contexts/useCurrentUserContext';
import { AddressFormValues } from '../../forms/AddressForm/models/AddressForm';
import { queryClient } from '../../config/queryClient/queryClient';
import { useDialogContext } from '../../contexts/useDialogContext';
import { getCoordinatesQueryKey } from '../../hooks/queries/useGetCoordinates';

const EditAddressContainer = () => {
  const { currentUser, updateAddress } = useCurrentUserContext();
  const { close } = useDialogContext();

  const handleSubmit = (data: AddressFormValues) => {
    try {
      updateAddress(data.address);
      queryClient.invalidateQueries(getCoordinatesQueryKey());
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddressForm
      defaultValues={{ address: currentUser?.address }}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditAddressContainer;
