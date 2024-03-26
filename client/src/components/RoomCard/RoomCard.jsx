import "./RoomCard.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ filterName }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/rooms/room");
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const filteredRooms = data.filter(room => room.name.toLowerCase().includes(filterName.toLowerCase()));

    return (
        <section>
            <article className="room-card-article">
                {filteredRooms.map((room) => (
                    <div key={room._id} className="room-card-div">
                        <img src={room.image} alt="Room image" className="room-card-image"/>
                        <p>Sala: <strong>{room.name}</strong></p>
                        <p>Tamaño: {room.size}</p>
                        <p>Características: {room.description.join(', ')}</p>
                        <button><Link to={`/RoomUnicView/${room._id}`}>View Room</Link></button>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default RoomCard;
