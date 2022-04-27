import React, {useContext} from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import sidebar from '../../images/sidebar.png';
import Ecommerce from '../../images/ecommerce.png';
import HOC from '../../images/hoc.png';
import MusicApp from '../../images/musicapp.png';
import 'swiper/css';
import { themeContext } from '../../Context';


function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='portfolio'>

        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}

        <Swiper
        breakpoints ={{
            480:{
                width: 480,
                slidesPerView: 1,
            }
        }}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio