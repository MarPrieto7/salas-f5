import React, { useState, useEffect } from 'react';
import './NotFound.css';


function NotFound() {
    

    return (
        <section>
            <aside>
                <div className="menssage-container">
                    <h1 className="notification-message">¡No hemos podido encontrar esa página!</h1>
                </div>
                <div className="error-container">
                    <p className="error-404">404</p>
                </div>
            </aside>
            <main>
                <section>
                    <figure>
                        <div className="useful-links">
                            <h2>Enlaces Útiles</h2>
                            <br />

                            <ul className="list-of-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/Products">Aprende</a></li>
                                <li><a href="/Aboutus">Colabora</a></li>
                                <li><a href="/Aboutus">Somos</a></li>
                                <li><a href="/Contact">Blog</a></li>
                                <li><a href="ContactView">Contacto</a></li>
                            </ul>

                        </div>
                        <div class="search-box">
                            <h2>Busque en nuestra web</h2>
                            <br />
                            <p>¿No encuentra lo que busca? Inténtelo con una nueva búsqueda</p>
                            <br />
                            <input type="text" class="search-input" placeholder="Buscar..." />
                            <button class="search-button">Buscar</button>
                        </div>
                    </figure>
                </section>
            </main>
        </section>
    );
}

export default NotFound;
