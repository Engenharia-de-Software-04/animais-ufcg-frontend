"use client";
import "./styles.css";

export default function Menu() {
  return <div>
    <div className="menu-wrapper">
        <div className="logo"></div>
        <nav>
            <ul className="nav-wrapper">
                <a>
                    <li>Quem somos</li>
                </a>
                <a>
                    <li>Adoção</li>
                </a>
                <a>
                    <li>Relatos</li>
                </a>
                <a>
                    <li>Contato</li>
                </a>
            </ul>
        </nav>
        <nav className="nav-ajuda">
            <a>
                <li>Ajuda</li>
            </a>
        </nav>
    </div>
  </div>;
}