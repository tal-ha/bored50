import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle } from '@mui/material';

const ConfirmDialog: React.FC<{ title?: string, message: string, onClose: Function }> = ({ title, message, onClose }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (message != "") {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (result: string | null) => {
    setOpen(false);
    onClose(result);
  };

  return (
    <Dialog open={open}>
      {title ? <DialogTitle>{title}</DialogTitle> : <></>}
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => handleClose(null)}>Cancel</Button>
        <Button onClick={() => handleClose(message)}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;