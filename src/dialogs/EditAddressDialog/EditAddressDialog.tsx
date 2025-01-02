import React from 'react';

import SimpleDialog from '../../components/SimpleDialog';
import EditAddressContainer from '../../containers/EditAddressContainer/EditAddressContainer';

interface EditAddressDialogProps {
  onClose: () => void;
}

const EditAddressDialog = ({ onClose }: EditAddressDialogProps) => {
  return (
    <SimpleDialog
      title="Update Address"
      onClose={onClose}
      contentText="Please enter your new address below to update your details. Make sure your address is correct before saving."
    >
      <EditAddressContainer />
    </SimpleDialog>
  );
};

export default EditAddressDialog;
