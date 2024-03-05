import "./RoomCard.css";
import React, { useState, useEffect } from 'react';

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

    const handleRoomClick = (id) => {
        window.location.href = `/RoomUnicView/${id}`;
    };

    return (
        <main>
            <section className="room-card-section">
                {datos && datos.map((item) => (
                    <article key={item.id} className="room-card-article">
                        <img src={item.urlImagen} alt="Imagen" />
                        <p>{item.nombre}</p>
                        <p>Tamaño: {item.tamaño}</p>
                        {item.objeto.map((objeto, index) => (
                            <p key={index}> Caracteristicas: {objeto}</p>
                        ))}
                        <button onClick={() => handleRoomClick(item.id)}>Ver Sala</button>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default RoomCard;