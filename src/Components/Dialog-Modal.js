

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const DialogHandle = () => {
const[openDialog,SetopenDialog] = useState(false);
const[openModal,SetopenModal] = useState(false);

const handleCloseDialog = () => {
    SetopenDialog(false);
}

const handleClickDialog = () => {
    SetopenDialog(true);
}

const handleCloseModal = () => {
    SetopenModal(false);
}

const handleClickModal = () => {
    SetopenModal(true);
}

  return (
    <>
       
       <Button variant="outlined" onClick={handleClickDialog}> Open Dialog Box</Button>
        <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleCloseDialog}>Disagree</Button>
        <Button onClick={handleCloseDialog} autoFocus>
            Agree
        </Button>
        </DialogActions>
        </Dialog>

        <Button onClick={handleClickModal}>Open modal</Button>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
        </Modal>
    </>
  );
};

export default DialogHandle;
