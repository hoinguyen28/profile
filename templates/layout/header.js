import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Header({ data }) {
  const { light, dark } = data;
  useEffect(() => {
    const mode = document.querySelector('.header__icon');
    const body = document.querySelector('.content');
    const openMenu = document.querySelector('.header__btn');
    const sidebar = document.querySelector('.sidebar');
    mode.addEventListener('click', () => {
      body.classList.toggle('content--dark');
    });
    openMenu.addEventListener('click', () => {
      sidebar.classList.toggle('block');
    });
  }, []);
  return (
    <div className="header">
      <div className="header__content">
        <a className="header__logo">
          <img className="header__logo--light" src={light}></img>
          <img className="header__logo--dark" src={dark}></img>
        </a>
        <div className="header__wrap flex">
          <div className="header__icon">
            <i className="header__icon--light">
              <FaMoon />
            </i>
            <i className="header__icon--dark">
              <FaSun />
            </i>
          </div>
          <div className="header__btn">
            <span className="header__span"></span>
            <span className="header__span"></span>
            <span className="header__span"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
