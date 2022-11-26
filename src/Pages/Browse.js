import React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { FaChevronRight, FaPlayCircle} from "react-icons/fa";
import Slider from "react-slick";
import { featuredPlayList } from "./MusicList";
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
    <div className="page-container">
      <Container>
        <div className="content-container">
          <div className="page-title">
            <h1>Browse page</h1>
          </div>
          <div className="card-slider">
            <Slider {...bigSettings}>
              {featuredPlayList.map((item) => (
                <div sx={{ maxWidth: 540 }} className="card-item">
                  <div class="card-header">
                    <h1>{item.category}</h1>
                    <h2>{item.genre}</h2>
                  </div>
                  <div className="big-card-wrap">
                    <img src={item.linkImage} />
                    <IconButton className="card-icon">
                      <FaPlayCircle />
                    </IconButton>
                  </div>
                </div>
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
                <div sx={{ maxWidth: 400 }} className="card-item">
                  <div className="small-card-wrap">
                    <img src={item.linkImage} />
                    <IconButton className="card-icon">
                      <FaPlayCircle />
                    </IconButton>
                  </div>
                  <div class="card-footer">
                    <h1>{item.category}</h1>
                    <h2>{item.genre}</h2>
                  </div>
                </div>
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
                <div sx={{ maxWidth: 400 }} className="card-item">
                  <div className="small-card-wrap">
                    <img src={item.linkImage} />
                    <IconButton className="card-icon">
                      <FaPlayCircle />
                    </IconButton>
                  </div>
                  <div class="card-footer">
                    <h1>{item.category}</h1>
                    <h2>{item.genre}</h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}
export { Browse };
