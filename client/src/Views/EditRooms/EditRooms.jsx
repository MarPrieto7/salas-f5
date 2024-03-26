import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({});

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`http://localhost:8000/rooms/room/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoom();
  }, [id]);

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/rooms/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(room),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar los datos');
      }
      navigate('/differentpath');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <main className="main-edit-reserve">
    <section className="section-Edit-Reserve">
      <h2 className="section-edit-h2">Editar Sala</h2>
      <form onSubmit={handleSubmit} className="form-Edit">
        <input
          type="text"
          name="name"
          value={room.name || ''}
          onChange={handleChange}
          placeholder="Nombre de la sala"
        />
        <br />
        <input
          type="text"
          name="size"
          value={room.size || ''}
          onChange={handleChange}
          placeholder="Tamaño"
        />
        <br />
        <input
          type="text"
          name="description"
          value={room.description || ''}
          onChange={handleChange}
          placeholder="Descripción de la sala"
        />
        <br />
        <input
          type="text"
          name="image"
          value={room.image || ''}
          onChange={handleChange}
          placeholder="Url de la imagen de la sala"
        />
        <br />
        <input
          type="text"
          name="map"
          value={room.map || ''}
          onChange={handleChange}
          placeholder="Url de la imagen del mapa"
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </section>
    </main>
  );
}

export default EditRoom;