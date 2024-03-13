import "./RoomView.css";
import RoomCard from '../../components/RoomCard/RoomCard.jsx'
import Imagemap from '../../assets/image/mapf5.png'
function RoomView() {
    return (
        <main>

            <section className="room-view-section-1">
                <p>Madrid <br/> Nuestras salas</p>
            </section>
            <section className="room-view-section-2">
                <RoomCard/>
            </section>
            <section className="room-view-section-3">

                <p>Condiciones de reserva</p>
                <ul>
                    <li>Las salas pueden ser reservadas por cualquier usuario en sus franjas.</li>
                    <li>Las salas se pueden reservar un máximo de dos horas.</li>
                    <li>Las salas deben quedar limpias después de su uso.</li>
                </ul>

            </section>
            <section className="room-view-section-4">
                <p><strong>¿No sabes que sala escoger?</strong></p>
                <figure>
                    <div className="room-view-section-4-image"><img src={Imagemap} className="image-map" alt="Imagen de google map con la indicación de la sede de madrid en la calle Fernando Poo 25" />
                   </div> <div>
                        <p className="p-color"><strong>Visítanos</strong></p>
                        <p>Madrid <br/>
                        C. Fernando Poo, 25 <br/>
                    28045 Madrid <br/>
                <u>madrid@factoriaf5.org</u></p>
                 </div>
                </figure >
            </section >

        </main >
    )
}
export default RoomView;