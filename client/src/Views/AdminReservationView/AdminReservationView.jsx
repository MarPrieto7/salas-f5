import "./AdminReservationView.css";
import RoomTable from "../../components/Rooms/RoomTable.jsx"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function AdminReservationView() {
    //Función para pintar la tabla
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/reserve/");
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



    const deleteBlog = async (id) => {
        try {
          const response = await fetch(`http://localhost:8000/reserve/${id}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            throw new Error('Error al eliminar la reserva');
          }
      
          // Actualizar la lista de salas después de eliminar
          const updatedData = await fetchData();
          setDatos(updatedData);
        } catch (error) {
          console.error(error);
        }
      };
    
      const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/reserve");
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            setDatos(data);
        } catch (error) {
            console.error(error);
        }
    };
    

    
    return (
        <main>
            <section className='section-1'>

                <table className='table'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Usuario
                            </th>
                            <th className='table-responsive'> Sala
                            </th>
                            <th className='table-responsive'> Fecha
                            </th>
                            <th className='table-responsive'> Horas
                            </th>
                            <th className='table-responsive'>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((id) => (
                            <tr key={id.id}>
                                <td>  {id.user} </td>
                                <td className='table-responsive'> {id.room} </td>
                                <td className='table-responsive'> {id.date} </td>
                                <td className='table-responsive'> {id.hour}  </td>
                                <td className='table-responsive'>
                                    <Link to={`/EditReserve/${id._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                    <button onClick={() => deleteBlog(id._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <RoomTable />
        </main>
    )
}
export default AdminReservationView;