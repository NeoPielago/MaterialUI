import { TextFields } from "@mui/icons-material";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="550px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="PLease select your country"
        error
      >
        <MenuItem value="PH">Philippines</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="ENG">England</MenuItem>
        <MenuItem value="IRE">Ireland</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
