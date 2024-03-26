
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditReserve.css'
function EditReserve() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reserve, setReserve] = useState({});

  useEffect(() => {
    const fetchReserve = async () => {
      try {
        const response = await fetch(`http://localhost:8000/reserve/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setReserve(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReserve();
  }, [id]);

  const handleChange = (e) => {
    setReserve({ ...reserve, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/reserve/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserve),
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
    <main className="contenedor-principal">
      <section className="contenedor-Editar-Reserva">
        <h2 className="Encabezado-editar">Editar Reserva</h2>
        <form onSubmit={handleSubmit} className="formulario-Editar">
          <input
            type="text"
            name="user"
            value={reserve.user || ''}
            onChange={handleChange}
            placeholder="Nombre del usuario"
          />
          <br />
          <input
            type="text"
            name="date"
            value={reserve.date || ''}
            onChange={handleChange}
            placeholder="Fecha"
          />
          <br />
          <input
            type="text"
            name="hour"
            value={reserve.hour || ''}
            onChange={handleChange}
            placeholder="Hora"
          />
          <br />
          <input
            type="text"
            name="room"
            value={reserve.room || ''}
            onChange={handleChange}
            placeholder="sala"
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

export default EditReserve;