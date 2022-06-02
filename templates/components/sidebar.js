import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Sidebar({ data }) {
  const { logoUrl, items, gmail } = data;
  useEffect(() => {
    const mode = document.querySelector('.sidebar__icon');
    const body = document.querySelector('.content');
    mode.addEventListener('click', () => {
      body.classList.toggle('content--dark');
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header flex">
        <a className="sidebar__logo">
          <img className="sidebar__logo--light" src={logoUrl.light}></img>
          <img className="sidebar__logo--dark" src={logoUrl.dark}></img>
        </a>
        <div className="sidebar__icon">
          <i className="sidebar__icon--light">
            <FaMoon />
          </i>
          <i className="sidebar__icon--dark">
            <FaSun />
          </i>
        </div>
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__nav">
          {items.map((item) => {
            return (
              <li key={item.id} className={`sidebar__li .${item.title}`}>
                <a href={`#${item.title}`} className="sidebar__item flex">
                  <img className="sidebar__img" src={item.imgUrl}></img>
                  <span className="sidebar__title">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar__gmail">
        <div className="sidebar__gmail-img">
          <img src={gmail.imgUrl}></img>
        </div>
        <div className="sidebar__gmail-content">
          <h6 className="sidebar__gmail-name">{gmail.name}</h6>
          <a className="sidebar__gmail-text" href={gmail.link}>
            {gmail.text}
          </a>
        </div>
      </div>
    </div>
  );
}
