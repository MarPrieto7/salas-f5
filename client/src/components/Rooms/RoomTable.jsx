import "./RoomTable.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RoomTable() {

    //Función para pintar la tabla
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/rooms/room");
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

    //función para crear nuevas salas
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [map, setMap] = useState('')

    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/rooms/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, size, description, image, map }),
            });
            if (!response.ok) {
                throw new Error('Error al guardar los datos');
            }
            const newData = await response.json();
            setDatos([...datos, newData]);
            setName('');
            setSize('');
            setDescription('');
            setImage('');
            setMap('');
        } catch (error) {
            console.error(error);
        }
    };

    //función desplegable
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <>

            <section className='section-2'>
                <h2 onClick={toggleFormVisibility} className='btn-h2'>Agregar nuevas salas <i class="fas fa-plus"></i></h2>

                {isFormVisible && (
                    <form onSubmit={store} className="form-create-room">
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)} placeholder="Nombre de la sala" /><br />
                        <input type="text" value={size}
                            onChange={(e) => setSize(e.target.value)} placeholder="Tamaño" /><br />
                        <input type="text" value={description}
                            onChange={(e) => setDescription(e.target.value)} placeholder="Descripción de la sala" /><br />
                        <input type="text" value={image}
                            onChange={(e) => setImage(e.target.value)} placeholder="Url de la imagen de la sala" /><br />
                        <input type="text" value={map}
                            onChange={(e) => setMap(e.target.value)} placeholder="Url de la imagen del mapa" /><br />
                        <button type='submit' className='btn btn-primary'>Añadir sala</button>
                    </form>
                )}
            </section>
            <section className='section-3'>
                <article className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Sala</th>
                                    <th className='table-responsive'>Tamaño</th>
                                    <th className='table-responsive'>Descripción</th>
                                    <th className='table-responsive'>Url de imagenes</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {datos.map((id) => (
                                    <tr key={id.id}>
                                        <td> {id.name} </td>
                                        <td className='table-responsive'> {id.size} </td>
                                        <td className='table-responsive'> {id.description} </td>
                                        <td className='table-responsive'> <a href={id.image}> Link de la imagen</a> </td>
                                        <td>
                                            <Link to={`/edit/${id.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                            {/* <button onClick={ ()=> deleteBlog(id.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button> */}
                                        </td>


                                    </tr>
                                ))}
                            </tbody>

                        </table>


                    </div>

                </article>

            </section>
        </>
    )

}
export default RoomTable;