import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size="medium"
        color="secondary"
        helperText="Please Select your Country"
        error
      >
        <MenuItem value="BW">Botswana</MenuItem>
        <MenuItem value="ZAR">South Africa</MenuItem>
        <MenuItem value="ZW">Zimbabwe</MenuItem>
        <MenuItem value="NM">Namibia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
