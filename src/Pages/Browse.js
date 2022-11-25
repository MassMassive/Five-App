import React from "react";
import { TopBar } from "../Components/TopBar"
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { FaPlayCircle } from "react-icons/fa";


function Browse() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <div className="page-container">
      <TopBar/>

      <Box sx={{ flexGrow: 1 }} className="main-page">
        <div className="content-container">
          <div className="page-title">
            <h1>Browse page</h1>
            <hr />
          </div>
          <div className="card-slider">
            <Card sx={{ maxWidth: 345 }} className="card-item">
              <CardHeader
                title="Featured Playlist"
                subheader="!st Cover Album"
              />
              <CardMedia
                component="img"
                height="194"
                image="../img/1.jpg"
                alt="Album 1"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                 <FaPlayCircle/>
                </IconButton>
              </CardActions>
            </Card>
          </div>
        </div>
      </Box>
    </div>
  );
}
export { Browse };
