import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Submit
      </Button>
      {/*<Snackbar message="Form Submitted Successfully" autoHideDuration={4000} open={open} onClose={handleClose} 
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      />*/}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert variant="filled" onClose={handleClose} severity="success">
          Form Submitted Successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
