import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { FormatBold } from "@mui/icons-material";
import { FormatItalic, FormatUnderlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log({
    formats,
  });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon></SendIcon>}
          disableRipple
          onClick={() => alert("clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon></SendIcon>}>
          Send
        </Button>
        <IconButton aria-label="send" color="success">
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold></FormatBold>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic></FormatItalic>
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined></FormatUnderlined>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
