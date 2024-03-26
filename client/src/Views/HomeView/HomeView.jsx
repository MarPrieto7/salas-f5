import "./HomeView.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function HomeView() {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/rooms/65e987129419f2137c385a75')
            .then(response => response.json())
            .then(data => setImageURL(data.image))
            .catch(error => console.error(error));
    }, []);
    console.log(imageURL)
    return (
        <main>
            <figure> <img src={imageURL} className="home-image" alt="Imagen de una sala con mesas y sillas"/></figure>
           
            <section className="home-section">
                <article>
                <p><u><strong>Barcelona</strong></u><br/>
                    Avinguda Bogatell, 82<br/>
                    08005 Barcelona<br/>
                    info@factoriaf5.org
                </p>
                <button><Link to="/OnWorks">Ver las salas</Link></button>
                    </article>
                    <article>
                <p><u><strong>Madrid</strong></u><br/>
                    C. Fernando Poo, 25<br/>
                    28045 Madrid<br/>
                    madrid@factoriaf5.org</p>
                    <button><Link to="/RoomView">Ver las salas</Link></button>
                    </article>
                    <article>
                <p><u><strong>Langreo</strong></u><br/>
                    Calle Hornos Altos, s/n<br/>
                    33949 Asturias<br/>
                    asturias@factoriaf5.org</p>
                    <button><Link to="/OnWorks">Ver las salas</Link></button>
                    </article>
            </section>
        </main>
    )
}
export default HomeView;