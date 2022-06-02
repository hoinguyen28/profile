//import components
import Modal from './modal';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

//import components
import BoxText from './boxText';

export default function Service({ data }) {
  const { boxText, items } = data;
  useEffect(() => {
    AOS.init();
    let listItem = document.querySelectorAll('.service__item');
    let listModal = document.querySelectorAll('.modal');
    let exitModal = document.querySelectorAll('.modal__img-cancel');
    listItem.forEach((item, index) => {
      item.addEventListener('click', () => {
        listModal[index].classList.add('show');
      });
    });
    exitModal.forEach((item) => {
      item.addEventListener('click', () => {
        let ModalShow = document.querySelector('.modal.show');
        ModalShow.classList.remove('show');
      });
    });
  }, []);
  return (
    <div className="service" id="service">
      <div className="container">
        <BoxText data={boxText} />
        <div
          className="service__list flex"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {items.map((item) => {
            return (
              <div key={item.id} className="service__wrap">
                <div className="service__item">
                  <div className="service__t">
                    <img className="service__item-img" src={item.imgUrl}></img>
                    <h3 className="service__item-title">{item.title}</h3>
                  </div>
                  <div className="service__btn">
                    <a>{item.btn}</a>
                    <span className="service__span"></span>
                  </div>
                </div>
                <div className="service__modal">
                  <Modal data={item.modal} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
