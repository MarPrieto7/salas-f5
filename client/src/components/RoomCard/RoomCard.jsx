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
                {datos && datos.map((room) => (
                    <div key={room._id} className="room-card-div">
                        <img src={room.image} alt="Imagen de la sala" className="room-card-image"/>
                        <p>Sala: <strong>{room.name}</strong></p>
                        <p>Tamaño: {room.size}</p>
                        <p>Características: {room.description.join(', ')}</p>
                        <button><Link to={`/RoomUnicView/${room._id}`}>Ver Sala</Link></button>
                    </div>
                ))}
            </article>
        </section>

    );
};


export default RoomCard;