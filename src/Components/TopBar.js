import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { FaMusic, FaListUl, FaCommentDots} from "react-icons/fa";
import Avatar from "@mui/material/Avatar";

function TopBar() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  return (
    <div>
      <div className="top-container" direction="row">
        <div className="play-skip-next">
          <div class="icon-box">
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
          </div>
        </div>
        <div className="music-player-box">
          <div className="logo-box">
            <FaMusic />
          </div>
          <div className="music-stream">
            <p>music playing here</p>
          </div>
        </div>
        <div className="volume-controls">
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
        </div>
        <div class="user-controls">
          <IconButton color="primary">
            <FaCommentDots/>
          </IconButton>
          <IconButton color="primary">
            <FaListUl />
          </IconButton>
          <IconButton>
            <Avatar alt="user icon" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export { TopBar };
