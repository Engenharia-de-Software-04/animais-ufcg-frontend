'use client';
import './styles.css';
import { useState } from 'react';

export default function Menu() {
  const [menuBodyDisplay, setMenuBodyDisplay] = useState('none');

  const changeMenu = (event) => {
    const target = event.currentTarget;

    if (target.classList.contains('responsive-menu-opened')) {
      target.classList.remove('responsive-menu-opened');
      target.classList.add('responsive-menu-closed');

      setMenuBodyDisplay('block');
    } else {
      target.classList.remove('responsive-menu-closed');
      target.classList.add('responsive-menu-opened');

      setMenuBodyDisplay('none');
    }
  };

  return (
    <div>
      <div className="menu-wrapper">
        <a href="/">
          <div className="logo"></div>
        </a>

        <nav className="main-nav">
          <ul className="nav-wrapper">
            <a href="/aboutUs">
              <li>Quem somos</li>
            </a>
            <a href="/animalList">
              <li>Adoção</li>
            </a>
            <a href="/adoptionHistory">
              <li>Relatos</li>
            </a>
            <a href="https://www.instagram.com/animaisufcg/">
              <li>Contato</li>
            </a>
          </ul>
        </nav>
        <nav className="help-nav">
          <a href="/donationAndHelp">
            <li>Ajuda</li>
          </a>
        </nav>
        <div
          onClick={changeMenu}
          className="responsive-menu responsive-menu-opened"
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        <div
          className="responsive-menu-body"
          style={{ display: menuBodyDisplay }}
        >
          <nav>
            <ul className="responsive-menu-items">
              <a href="/aboutUs">
                <li>
                  <span className="material-symbols-outlined">forum</span> Quem
                  somos
                </li>
              </a>
              <a href="/animalList">
                <li>
                  <span className="material-symbols-outlined">pets</span> Adoção
                </li>
              </a>
              <a href="/adoptionHistory">
                <li>
                  <span className="material-symbols-outlined">
                    import_contacts
                  </span>{' '}
                  Relatos
                </li>
              </a>
              <a href="https://www.instagram.com/animaisufcg/">
                <li>
                  <span className="material-symbols-outlined">call</span>{' '}
                  Contato
                </li>
              </a>
            </ul>
          </nav>
          <nav className="responsive-help-nav">
            <a href="/donationAndHelp">
              <li>Ajuda</li>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
