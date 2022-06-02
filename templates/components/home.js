import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home({ data }) {
  const { imgUrl, subTitle, title, description, iconUrl, btn } = data;
  useEffect(() => {
    AOS.init();
    const textElement = document.querySelector('.home__title');
    const titles = [...title];
    const text = titles[0];
    let speed = 200;
    let index = 0;
    const writeText = () => {
      textElement.innerText = `${text.slice(0, index)} |`;
      index++;
      if (index > text.length) {
        index = 0;
        let random = Math.floor(Math.random() * titles.length);
        text = titles[random];
      }
      setTimeout(writeText, speed);
    };

    writeText();
  }, []);
  return (
    <div className="home" id="home">
      <div
        className="home__content"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img className="home__img" src={imgUrl}></img>
        <h5 className="home__subTitle">{subTitle}</h5>
        <h1 className="home__title"></h1>
        <p className="home__description">{description}</p>
        <div className="home__icons">
          {iconUrl.map((icon, index) => {
            return (
              <img className="home__icon" key={index} src={icon.url}></img>
            );
          })}
        </div>
        <a
          className="home__btn"
          href="{btn.link}"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {btn.title}
        </a>
      </div>
    </div>
  );
}
