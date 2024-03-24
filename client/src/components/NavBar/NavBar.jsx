import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '../../assets/image/logo.png'
import DarkModeButton from "../DarkMode/DarkModeButton.jsx";

function NavBar() {
    const [acordeonOpen, setAcordeonOpen] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para controlar si el usuario está loggeado


    useEffect(() => {
        // Aquí puedes implementar la lógica real para verificar si el usuario está loggeado, utilizando localStorage, cookies, o cualquier otra forma de autenticación que estés utilizando
        const userLoggedIn = localStorage.getItem('username'); // Suponiendo que has almacenado el nombre de usuario en localStorage al loggearse

        if (userLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

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

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsNavSticky(true);
        } else {
            setIsNavSticky(false);
        }
    };

    const handleLogout = () => {
        // Limpiar la información de autenticación del usuario
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        setIsLoggedIn(false); // Actualizar el estado de loggeado
    };

    useEffect(() => {
        // Agregar un event listener para el cambio de tamaño de la ventana
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isNavSticky ? 'sticky' : ''}`}>
            <section className="nav-bar-section">
                <article className="languages">
                  <DarkModeButton /> 
                </article>
                <section className="iconos">
                    <article className="rrss-logos">
                        <a href="#"> <i className="fa-brands fa-linkedin-in"></i> </a>
                        <a href="#"> <i className="fa-brands fa-twitter"></i> </a>
                        <a href="#"> <i className="fa-brands fa-instagram"></i> </a>
                        <a href="#"> <i className="fa-brands fa-youtube"></i> </a>
                        <a href="#"> <i className="fa-brands fa-facebook"></i> </a>
                    </article>
                   
                </section>


            </section>
            <nav className={`nav-bar ${isNavSticky ? 'sticky' : ''}`}>
                <figure className="logo">
                    <NavLink to="/"><img className="nav-bar-logo" src={logo} alt="logo factoria" /></NavLink>
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
                        <li><NavLink  to="/OnWorks" onClick={handleNavLinkClick}>H O M E</NavLink></li>
                        <li><NavLink  to="/OnWorks" onClick={handleNavLinkClick}>A P R E N D E</NavLink></li>

                        <li>
                            <NavLink  to="/OnWorks" onClick={handleNavLinkClick}>
                                C O L A B O R A
                            </NavLink>
                            <article className="acordeon">
                                <div className="opcion">EMPRESAS</div>
                                <div className="opcion">ENTIDADES SOCIALES</div>
                                <div className="opcion">TRABAJA EN FACTORÍA</div>
                            </article>
                        </li>

                        <li>
                            <NavLink  to="/OnWorks" onClick={handleNavLinkClick}>
                                S O M O S
                            </NavLink>
                            <div className="acordeon">
                                <div className="opcion">ASOCIACIÓN</div>
                                <div className="opcion">NUESTRO EQUIPO</div>
                                <div className="opcion">TRANSPARENCIA</div>
                                <div className="opcion">PRENSA</div>
                            </div>
                        </li>

                        <li><NavLink  to="/OnWorks" onClick={handleNavLinkClick}>B L O G</NavLink></li>
                        <li>
                        <NavLink to="/ContactView" onClick={handleNavLinkClick}>
                            CONTACTO
                            </NavLink>
                            </li>
                        <li>
                            <NavLink to="/" onClick={handleNavLinkClick}>
                                S E D E S
                            </NavLink>
                            <div className="acordeon">
                                <div className="opcion">MADRID</div>
                                <div className="opcion">BARCELONA</div>
                                <div className="opcion">LANGREO</div>
                            </div>
                        </li>
                        <li>
                            {/* Aquí verificamos si el usuario está loggeado y cambiamos la ruta en consecuencia */}
                            {isLoggedIn ? (
                                <NavLink to="/ReservationView" onClick={handleNavLinkClick}>
                                    <i className="fas fa-user"></i>
                                </NavLink>
                            ) : (
                                <NavLink to="/LoginRegisterView" onClick={handleNavLinkClick}>
                                    <i className="fas fa-user"></i>
                                </NavLink>
                            )}
                        </li>
                        <li>
                            {isLoggedIn && ( // Mostrar el ícono de logout solo cuando el usuario está loggeado
                                <NavLink to="/" onClick={handleLogout}> {/* Agregar la función de logout al hacer clic */}
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;
