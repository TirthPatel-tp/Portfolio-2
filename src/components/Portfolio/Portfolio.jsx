import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import KJInfrastructure from "../../img/KJInfrastructure.png";
import iNotebook from "../../img/iNotebook.png";
import MusicApp from "../../img/musicapp.png";
import NewsApp from "../../img/NewsApp.png";
import TextUtils from "../../img/TextUtils.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={KJInfrastructure} alt="Civil Work Website" />
          <div className="project-details">
            <h4>KJ-Infrastructure</h4>
            <p>Civil engineering company website (React)</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={iNotebook} alt="Note-taking App" />
        <div className="project-details">
          <h4>iNotebook</h4>
          <p>Secure note management system (MERN Stack)</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={NewsApp} alt="News Portal" />
        <div className="project-details">
          <h4>News App</h4>
          <p>Responsive news aggregator with dark mode</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={MusicApp} alt="Music App" />
        <div className="project-details">
          <h4>Music App</h4>
          <p>It is a duplica of spotify giving user shuffle and playlist expereince</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={TextUtils} alt="TextUtils" />
        <div className="project-details">
          <h4>TextUtils App</h4>
          <p>It helps user to converts the words in caps or small or count the word</p>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
