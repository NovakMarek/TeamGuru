import React from 'react';

import SimpleDialog from '../../components/SimpleDialog';
import EditAddressContainer from '../../containers/EditAddressContainer/EditAddressContainer';

interface EditAddressDialogProps {
  onClose: () => void;
}

const EditAddressDialog = ({ onClose }: EditAddressDialogProps) => {
  return (
    <SimpleDialog title="Update Address" onClose={onClose}>
      <EditAddressContainer />
    </SimpleDialog>
  );
};

export default EditAddressDialog;
