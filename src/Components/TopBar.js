import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function TopBar() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="top-container">
        <Grid container spacing={1}>
          <Grid item xs>
            <Item>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                >
                  <IconButton aria-label="previous">
                    {theme.direction === "rtl" ? (
                      <SkipNextIcon />
                    ) : (
                      <SkipPreviousIcon />
                    )}
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                  <IconButton aria-label="next">
                    {theme.direction === "rtl" ? (
                      <SkipPreviousIcon />
                    ) : (
                      <SkipNextIcon />
                    )}
                  </IconButton>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h1>my display here</h1>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Box sx={{ width: 200 }}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <VolumeDown />
                  <Slider
                    aria-label="Volume"
                    value={value}
                    onChange={handleChange}
                  />
                  <VolumeUp />
                </Stack>
              </Box>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <h1>Login here</h1>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export { TopBar };
