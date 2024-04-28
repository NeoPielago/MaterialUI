import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}></Stack>
      <TextField label="Name" variant="outlined"></TextField>
      <TextField label="Name" variant="filled"></TextField>
      <TextField label="Name" variant="standard"></TextField>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          required
        ></TextField>
      </Stack>
      <Stack spacing={3}>
        <TextField
          label="Form input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          type="password"
          helperText={
            !value ? "Required" : "Do not share you password with anyone"
          }
        ></TextField>
        <TextField
          required
          label="password"
          type="password"
          size="small"
          color="secondary"
          helperText="Do not share sensitive information to this form"
        ></TextField>
        <TextField label="readonly" InputProps={{ readOnly: true }}></TextField>
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
