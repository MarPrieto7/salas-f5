import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RoomUnicView.css';

function RoomUnicView() {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const response = await fetch(`http://localhost:8000/rooms/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de la sala');
                }
                const data = await response.json();
                setRoom(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRoom();
    }, [id]);

    const handleReservation = () => {
        // Simula la lógica para determinar si el usuario está registrado
        const isUserLoggedIn = true; // Supongamos que el usuario está registrado
        if (isUserLoggedIn) {
            // Redirige a la ruta de calendario
            window.location.href = '/ReservationView';
        } else {
            // Si el usuario no está registrado, puedes redirigirlo directamente a la ruta de inicio de sesión
            window.location.href = '/LoginRegisterView';
        }
    };

    if (!room) {
        return <p>Cargando...</p>;
    }

    return (
        <main>
            <section className="h-roomunic">
                <p><strong>{room.name}</strong></p>
            </section>
            <section className="room-details">
                <div className="room-images">
                    <img src={room.image} alt="Imagen de la sala"/>
                    <img src={room.map} alt="Mapa de la sala"/>
                </div>
                <div className="room-info">
                    <h2>Caracteristicas</h2>
                    <ul>
                        <li><p><strong>Tamaño:</strong> {room.size}</p></li>
                        <li><p><strong>Descripción:</strong> {room.description.join(', ')}</p></li>
                    </ul>
                    <button onClick={handleReservation}>Reserva ya!</button>
                </div>
            </section>
        </main>
    );
}

export default RoomUnicView;
