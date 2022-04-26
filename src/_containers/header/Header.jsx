import React from "react";
import images from "../../constants/images";

const Header = () => {
    const { line } = images.defaultImages;
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo-wrap">
                    <a href="/" className="header__logo">
                        Gerícht
                    </a>
                </div>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#Home" className="menu__link">
                                    Home
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#Pages" className="menu__link">
                                    Pages
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#Contact" className="menu__link">
                                    Contact Us
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#Blog" className="menu__link">
                                    Blog
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#Landing" className="menu__link">
                                    Landing
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__buttons">
                    <a data-da=".menu__list, 767.98, last" href="#Registration" className="header__button">
                        Log In / Registration
                    </a>
                    <span className="header__line">
                        <img src={line} alt="line" />
                    </span>
                    <a data-da=".menu__list, 400, first" href="#Book" className="header__button">
                        Book Table
                    </a>
                </div>
                <button type="button" className="header__icon icon-menu">
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
