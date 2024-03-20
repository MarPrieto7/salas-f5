import "./AdminReservationView.css";
import RoomTable from "../../components/Rooms/RoomTable.jsx"
import React, { useState, useEffect } from 'react';

function AdminReservationView() {
    //Función para pintar la tabla
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/rooms/reservation");
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
                        <td>  {id.username} </td>
                        <td className='table-responsive'> {id.room} </td>
                        <td className='table-responsive'> {id.date} </td>
                        <td className='table-responsive'> {id.hour}  </td>
                        <td className='table-responsive'>  <i className="fas fa-edit"></i> </td>
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