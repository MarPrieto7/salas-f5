import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RoomUnicView.css';
import { useNavigate } from 'react-router-dom';

function RoomUnicView() {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [modalImage, setModalImage] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para controlar si el usuario está loggeado


    const navigate = useNavigate();


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

    // Simula la lógica para determinar si el usuario está loggeado
    useEffect(() => {
  
        const userLoggedIn = localStorage.getItem('username'); 

        if (userLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleReservation = () => {
        if (isLoggedIn) {

      const role = localStorage.getItem('role');


            if (role) {
                const isAdmin = role === 'admin';
                const isUser = role === 'user';
                const isProfessor = role === 'professor';
    
                if (isAdmin) {
                     navigate('/differentpath');
                } else if (isUser) {
                       navigate('/UserReservationView');
                } else  {
                    navigate('/ReservationView');
                } 
            } else {
        
                window.location.href = '/LoginRegisterView';
            }


        } else {
         
            window.location.href = '/LoginRegisterView';
        }
    };

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
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
                    <img 
                        src={room.image} 
                        alt="Imagen de la sala"
                        onMouseEnter={() => openModal(room.image)}
                        onMouseLeave={closeModal}
                    />
                    <img 
                        src={room.map} 
                        alt="Mapa de la sala"
                        onMouseEnter={() => openModal(room.map)}
                        onMouseLeave={closeModal}
                    />
                    {modalImage && (
                        <div className="modal" onMouseLeave={closeModal}>
                            <img src={modalImage} alt="Imagen modal" />
                        </div>
                    )}
                </div>
                <section className="room-info">
                    <h2>Caracteristicas</h2>
                    <ul>
                        <li><p><strong>Tamaño:</strong> {room.size}</p></li>
                        <li><p><strong>Descripción:</strong> {room.description.join(', ')}</p></li>
                        <li><p><strong>Horario:</strong> {room.hour}</p></li>
                        <li><p><strong>Cerrado:</strong> {room.close}</p></li>
                    </ul>
                    <button onClick={handleReservation}>Reserva ya!</button>
                </section>
            </section>
        </main>
    );
}

export default RoomUnicView;