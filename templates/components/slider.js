import React from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

//import components
import BoxText from './boxText';

// import Data
import { dataPortfolio } from '../../api-data/components/portfolio';
import { dataBlog } from '../../api-data/components/blog';

export default function Sliders({ data = [] }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 874,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`${
        !data[0].job && data[0].job !== 'undefined'
          ? 'slider slider--portfolio'
          : 'slider slider--blog'
      }`}
      id={`${
        !data[0].job && data[0].job !== 'undefined' ? 'portfolio' : 'blog'
      }`}
    >
      <div className="container">
        {!data[0].job && data[0].job !== 'undefined' ? (
          <BoxText data={dataPortfolio.boxText} />
        ) : (
          <BoxText data={dataBlog.boxText} />
        )}

        <div
          className="slider__wrap"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Slider {...settings}>
            {data.map((item) => {
              const { id, imgUrl, date, job, title, modal } = item;
              return (
                <div key={id} className="slider__item">
                  <div className="slider__images">
                    <img src={imgUrl} className="slider__img"></img>
                  </div>
                  <a className="slider__date">
                    {date}
                    <span className="slider__job">{job}</span>
                  </a>
                  <h4 className="slide__title">{title}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
