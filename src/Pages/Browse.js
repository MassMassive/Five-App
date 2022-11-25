import React, { Component } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { FaChevronRight, FaPlayCircle } from "react-icons/fa";
import Slider from "react-slick";
import { featuredPlayList, newMusic } from "./MusicList";
function Browse() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const bigSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="page-container" maxWidth="sm">
      <Container maxWidth="sm">
        <div className="content-container">
          <div className="page-title">
            <h1>Browse page</h1>
            <hr />
          </div>
          <div className="card-slider">
            <Slider {...bigSettings}>
              {featuredPlayList.map((item) => (
                <Card sx={{ maxWidth: 540 }} className="card-item">
                  <CardHeader title={item.category} subheader={item.genre} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.linkImage}
                    alt={item.category}
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FaPlayCircle />
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
            </Slider>
          </div>
          <div className="card-slider">
            <div className="slider-title" flexDirection="column">
              <h1> Featured Playlists </h1>
              <span>
                <FaChevronRight />
              </span>
            </div>
            <Slider {...settings}>
              {featuredPlayList.map((item) => (
                <Card sx={{ maxWidth: 400 }} className="card-item">
                  <CardHeader title={item.category} subheader={item.genre} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.linkImage}
                    alt={item.category}
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FaPlayCircle />
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
            </Slider>
          </div>
          <div className="card-slider">
            <div className="slider-title" flexDirection="column">
              <h1> New music </h1>
              <span>
                <FaChevronRight />
              </span>
            </div>
            <Slider {...settings}>
              {featuredPlayList.map((item) => (
                <Card sx={{ maxWidth: 400 }} className="card-item">
                  <CardHeader title={item.category} subheader={item.genre} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.linkImage}
                    alt={item.category}
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FaPlayCircle />
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}
export { Browse };
