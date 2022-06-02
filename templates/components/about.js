import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About({ data }) {
  const { title, boxText, skills, btn, imgUrl, span } = data;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="about__title">{title}</h2>
        <div className="about__wrap flex">
          <div
            className="about__left"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {boxText.map((text, index) => {
              return (
                <div key={index} className="about__boxText">
                  <div className="about__wrap flex">
                    <h4 className="about__subTitle">
                      <span className="about__wrap-span">{text.hi}</span>
                      {text.subTitle}
                    </h4>
                  </div>
                  <p className="about__description">{text.description}</p>
                </div>
              );
            })}
            <div className="about__skills">
              {skills.map((item) => {
                return (
                  <div key={item.id} className="about__item">
                    <span className="about__item-title">{item.title}</span>
                    <div className="about__item-bg">
                      <div
                        className="about__item-level"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <a href={btn.link} className="about__btn btn">
              {btn.title}
            </a>
          </div>
          <div
            className="about__right"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="about__img">
              <img src={imgUrl}></img>
              <div
                className="about__span"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about__span-wrap">
                  <span className="about__span-title">{span.title}</span>
                  <p className="about__span-subTitle">{span.subTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
