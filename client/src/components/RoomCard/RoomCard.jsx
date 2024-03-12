import "./RoomCard.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RoomCard() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/salas.json");
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
                {datos && datos.map((item) => (
                    <div key={item.id} className="room-card-div">
                        <img src={item.image} alt="Imagen de la sala" />
                        <p>Sala: <strong>{item.nombre}</strong></p>
                        <p>Tamaño: {item.tamaño}</p>
                        {item.objeto.map((objeto, index) => (
                            <p key={index}> Características: {objeto}</p>
                        ))}
                        <button> <Link to={`/RoomUnicView/${item.id}`}>Ver Sala</Link></button>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default RoomCard;