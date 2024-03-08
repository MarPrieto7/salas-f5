import "./Footer.css";
import React from "react";


function Footer() {


    return (
        <footer className="footer">
            <section className="footer-section-1">
                <article className="footer-item">
                    <button className="footer-btn">
                        <i className="fa-regular fa-heart"></i>
                        <p>Donativo 1$ al mes para la comunidad alumni.</p>
                    </button>
                </article>
                <figure className="footer-item"><img className="footer-img" src="FACTORIA.png" alt="Imagen del logo de factoria f5" /></figure>
                <article className="footer-item rrssLogos">
                    <a href="#"> <i className="fa-brands fa-linkedin-in"></i> </a>
                    <a href="#"> <i className="fa-brands fa-twitter"></i> </a>
                    <a href="#"> <i className="fa-brands fa-instagram"></i></a>
                    <a href="#"> <i className="fa-brands fa-youtube"></i> </a>
                    <a href="#"> <i className="fa-brands fa-facebook"></i> </a>
                </article>
            </section>

            <section className="other">
                <ul>
                    <li><p>Todos los derechos reservados 2021 |</p></li>
                    <li><p>Aviso legal |</p></li>
                    <li><p>Política de cookies |</p></li>
                    <li><p>Política de privacidad |</p></li>
                    <li><p>Contacta |</p></li>
                    <li><p>Transparencia |</p></li>
                    <li><p>Blog |</p></li>
                    <li><p>Diseño web Barcelona |</p></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;