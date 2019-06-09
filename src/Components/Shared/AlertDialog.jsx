import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = (props) => {
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    const handleClickYes = () => {
        props.onClickYes();
        handleClose();
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Contents
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClickYes} color="primary" autoFocus>
                        Continue
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;
