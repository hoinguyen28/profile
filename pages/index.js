import Head from 'next/head';
import { useEffect } from 'react';

//import components
import Header from '../templates/layout/header';
import Sidebar from '../templates/components/sidebar';
import Home from '../templates/components/home';
import About from '../templates/components/about';
import Service from '../templates/components/service';
import Sliders from '../templates/components/slider';
import Testimonial from '../templates/components/testimonial';
import Contact from '../templates/components/contact';

// import Data
import { dataHeader } from '../api-data/layout/header';
import { dataSidebar } from '../api-data/components/sidebar';
import { dataHome } from '../api-data/components/home';
import { dataAbout } from '../api-data/components/about';
import { dataPortfolio } from '../api-data/components/portfolio';
import { dataBlog } from '../api-data/components/blog';
import { dataService } from '../api-data/components/service';
import { dataTestimonial } from '../api-data/components/testimonial';
import { dataContact } from '../api-data/components/contact';

export default function Components() {
  useEffect(() => {
    const listCpn = [];
    dataSidebar.items.map((item) => {
      const cpn = document.querySelector(`.content #${item.title}`);
      return listCpn.push(cpn);
    });
    const listLiElement = document.querySelectorAll('.sidebar__li');
    window.addEventListener('scroll', () => {
      let current = '';
      listCpn.forEach((item) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.clientHeight;
        if (window.pageYOffset >= itemTop - itemHeight / 3) {
          current = item.getAttribute('id');
        }
      });
      listLiElement.forEach((liElement) => {
        liElement.classList.remove('active');
        if (liElement.classList.contains(`.${current}`)) {
          liElement.classList.add('active');
        }
      });
    });
  }, []);

  return (
    <main className="main">
      <div className="content">
        <Header data={dataHeader} />
        <Sidebar data={dataSidebar} />
        <Home data={dataHome} />
        <About data={dataAbout} />
        <Service data={dataService} />
        <Sliders data={dataPortfolio.slider} />
        <Testimonial data={dataTestimonial} />
        <Sliders data={dataBlog.slider} />
        <Contact data={dataContact} />
      </div>
    </main>
  );
}
