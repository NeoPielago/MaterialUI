import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">Heading</Typography>
      <Typography variant="h2">Heading</Typography>
      <Typography variant="h3">Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Heading 4
      </Typography>
      <Typography variant="h5">Heading</Typography>
      <Typography variant="h6">Heading</Typography>

      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis totam
        fugiat expedita cum soluta voluptatem officiis, facere cumque?
        Voluptates, saepe!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
        ipsa amet quia debitis voluptatem tempore consequatur. Magnam, libero
        ipsum?
      </Typography>
    </div>
  );
};
