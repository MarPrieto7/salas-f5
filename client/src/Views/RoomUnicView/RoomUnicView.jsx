// // import "./RoomUnicView.css";
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from 'axios';

// // function RoomUnicView() {
// //     const [item, setItem] = useState([]);

// //     const { id } = useParams();
  
// //     useEffect(() => {
// //       const getItemDetails = async () => {
// //         try {
// //           const res = await axios.get(`/RoomUnicView/${item.id}`);
// //           setItem(res.data);
// //         } catch (error) {
// //           console.error('Error fetching blog:', error);
// //         }
// //       };
// //       getItemDetails();
// //     }, [id]);

// //     return (
// //         <main>
// //             {datos && datos.map((item) => (
// //                 <section key={item.id} className="room-card-article">
// //                     <article className="room-unic-view-article-1">
// //                         <p>Sala <br /> {item.nombre}</p>
// //                     </article>
// //                     <article className="room-unic-view-article-2">
// //                         <figure>
// //                             <img src={item.image} alt={`Imagen ${item.nombre}`} />
// //                         </figure>
// //                         <aside>
// //                             <p>Características</p>
// //                             <div>
// //                                 <p>Tamaño: {item.tamaño}</p>
// //                                 {item.objeto.map((objeto, index) => (
// //                                     <p key={index}> Características: {objeto}</p>
// //                                 ))}
// //                             </div>
// //                             <button onClick={() => handleRoomClick(item.id)}>Reservar</button>
// //                         </aside>
// //                     </article>
// //                     <article className="room-unic-view-article-3">
// //                         <img src={item.map} alt={`Mapa ${item.nombre}`} />
// //                     </article>
// //                 </section>
// //             ))}
// //         </main>
// //     );
// // }

// // export default RoomUnicView;



// import "./RoomUnicView.css";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function RoomUnicView() {
//     const [item, setItem] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         const getItemDetails = async () => {
//             try {
//                 const response = await fetch(`/sala.json/${id}`); 
//                 if (!response.ok) {
//                     throw new Error('Error al obtener los detalles de la sala');
//                 }
//                 const data = await response.json();
//                 setItem(data);
//             } catch (error) {
//                 console.error('Error fetching room details:', error);
//             }
//         };
//         getItemDetails();
//     }, [id]);

//     const handleRoomClick = (roomId) => {
//         // Lógica para reservar la sala
//         console.log(`Reservando sala con ID: ${roomId}`);
//     };

//     return (
//         <main>
//             <p>Funciona</p>
//             {item && (
//                 <section key={item.id} className="room-card-article">
//                     <article className="room-unic-view-article-1">
//                         <p>Sala <br /> {item.nombre}</p>
//                     </article>
//                     <article className="room-unic-view-article-2">
//                         <figure>
//                             <img src={item.image} alt={`Imagen ${item.nombre}`} />
//                         </figure>
//                         <aside>
//                             <p>Características</p>
//                             <div>
//                                 <p>Tamaño: {item.tamaño}</p>
//                                 {item.objeto.map((objeto, index) => (
//                                     <p key={index}> Características: {objeto}</p>
//                                 ))}
//                             </div>
//                             <button onClick={() => handleRoomClick(item.id)}>Reservar</button>
//                         </aside>
//                     </article>
//                     <article className="room-unic-view-article-3">
//                         <img src={item.map} alt={`Mapa ${item.nombre}`} />
//                     </article>
//                 </section>
//             )}
//         </main>
//     );
// }

// export default RoomUnicView;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RoomUnicView.css'; // Importamos el archivo CSS para los estilos

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

    if (!room) {
        return <p>Cargando...</p>;
    }

    return (
       
        <main>  
          <section className="h-roomunic">
                  <p><strong>{room.name}</strong></p>
        </section>
            <div className="room-details">
                <div className="room-images">
                    <img src={room.image} alt="Imagen de la sala"/>
                    <img src={room.map} alt="Mapa de la sala"/>
                </div>
                <div className="room-info">
                    <h2>Caracteristicas</h2>
                    <ul>
                          <li>  <p><strong>Tamaño:</strong> {room.size}</p></li>
                    <li><p><strong>Descripción:</strong> {room.description.join(', ')}</p></li>
                    </ul>
                  
                  
                    
                    <button>Reserva ya!</button>
                </div>
            </div>
        </main>
    );
}

export default RoomUnicView;
