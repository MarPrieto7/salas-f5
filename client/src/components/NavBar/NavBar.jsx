import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    const [acordeonOpen, setAcordeonOpen] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);


    const handleAcordeonHover = (index) => {
        setAcordeonOpen(index);
    };

    const handleAcordeonLeave = () => {
        setAcordeonOpen(null);
    };

    const handleMenuIconClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleXBtnClick = () => {
        setMenuOpen(false);
    };

    const handleNavLinkClick = () => {
        setAcordeonOpen(null);
        setMenuOpen(false);
};

const handleResize = () => {
    if (window.innerWidth > 840) {
        setMenuOpen(false);
    }
};

useEffect(() => {
    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);


    return (
        <header className="header">
            <section className="nav-bar-section">
                <article className="languages">
                    <p>ES</p>
                    <p>CA</p>
                </article>
                <article className="rrss-logos">
                    <a href="#"> <i className="fa-brands fa-linkedin-in"></i> </a>
                    <a href="#"> <i className="fa-brands fa-twitter"></i> </a>
                    <a href="#"> <i className="fa-brands fa-instagram"></i></a>
                    <a href="#"> <i className="fa-brands fa-youtube"></i> </a>
                    <a href="#"> <i className="fa-brands fa-facebook"></i> </a>
                </article>
            </section>
            <nav className="nav-bar">
                <figure className="logo">
                    <NavLink to="/"><img className="nav-bar-logo" src="https://cdn.discordapp.com/attachments/1213083227359543316/1213083365931225098/factoria-logo.png?ex=65f42eec&is=65e1b9ec&hm=602cc61cb3d8457c4abdf18cbd22a75f77ccf8f4984dce42feed0697dd3ba6e2&" alt="logo factoria" /></NavLink>
                </figure>

                <figure>
                    <label className="menu-icon" onClick={handleMenuIconClick}><i class="fa-solid fa-bars"></i></label>
                </figure>

                {/* <!--Menú--> */}
                <section className={`list ${menuOpen ? 'list-open' : ''}`}>
                    <label className="x-btn" onClick={handleXBtnClick}>
                        <i className="fa-solid fa-x"></i>
                    </label>
                    <ul className="menu">
                        <li><NavLink to="/" onClick={handleNavLinkClick}>H O M E</NavLink></li>
                        <li><NavLink to="/Products" onClick={handleNavLinkClick}>A P R E N D E</NavLink></li>

                        <li>
                            <NavLink to="/Aboutus" onClick={handleNavLinkClick}>
                                C O L A B O R A
                            </NavLink>
                            <article className="acordeon">
                                <div className="opcion">EMPRESAS</div>
                                <div className="opcion">ENTIDADES SOCIALES</div>
                                <div className="opcion">TRABAJA EN FACTORÍA</div>
                            </article>
                        </li>

                        <li>
                            <NavLink to="/Aboutus" onClick={handleNavLinkClick}>
                                S O M O S
                            </NavLink>
                            <div className="acordeon">
                                <div className="opcion">ASOCIACIÓN</div>
                                <div className="opcion">NUESTRO EQUIPO</div>
                                <div className="opcion">TRANSPARENCIA</div>
                                <div className="opcion">PRENSA</div>
                            </div>
                        </li>

                        <li><NavLink to="/Contact" onClick={handleNavLinkClick}>B L O G</NavLink></li>
                        <li>
                            <NavLink to="/Search" onClick={handleNavLinkClick}>
                                S E D E S
                            </NavLink>
                            <div className="acordeon">
                                <div className="opcion">MADRID</div>
                                <div className="opcion">BARCELONA</div>
                            </div>
                        </li>
                        <li><NavLink to="/WishList" onClick={handleNavLinkClick}>C O N T A C T O</NavLink></li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;
