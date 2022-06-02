import React from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

//import components
import BoxText from './boxText';

export default function Testimonial({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 825,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { boxText, items } = data;
  return (
    <div className="testimonial" id="testimonial">
      <div className="container">
        <BoxText data={boxText} />
        <div
          className="testimonial__list"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Slider {...settings}>
            {items.map((item) => {
              const { id, imgUrl, name, job, quote, description } = item;
              return (
                <div key={id} className="testimonial__item">
                  <div className="testimonial__content">
                    <div className="testimonial__wrap flex">
                      <div className="testimonial__author flex">
                        <div className="testimonial__img">
                          <img
                            className="testimonial__avatar"
                            src={imgUrl}
                          ></img>
                        </div>
                        <div className="testimonial__info">
                          <h3 className="testimonial__item-title">{name}</h3>
                          <span className="testimonial__item-job">{job}</span>
                        </div>
                      </div>
                      <img className="testimonial__quote" src={quote}></img>
                    </div>
                    <p className="testimonial__item-description">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
