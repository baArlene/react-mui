import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the Test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test you will not be able to
            edit after submission
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
