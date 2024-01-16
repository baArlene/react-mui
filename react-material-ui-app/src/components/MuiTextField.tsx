import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setvalue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Medium Secondary" size="medium" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          required
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your password with anyone"
          disabled
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
