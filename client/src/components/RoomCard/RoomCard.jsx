import "./RoomCard.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RoomCard() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/rooms/room");
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setDatos(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <section>
            <article className="room-card-article">
                {datos && datos.map((id) => (
                    <div key={id.id} className="room-card-div">
                        <img src={id.image} alt="Imagen de la sala" className="room-card-image"/>
                        <p>Sala: <strong>{id.name}</strong></p>
                        <p>Tamaño: {id.size}</p>
                        <p>Características: {id.description.join(', ')}</p>
                        <button> <Link to={`/RoomUnicView/${id}`}>Ver Sala</Link></button>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default RoomCard;