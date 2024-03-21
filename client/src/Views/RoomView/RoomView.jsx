import "./RoomView.css";
import RoomCard from '../../components/RoomCard/RoomCard.jsx'
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
                <p><strong>¿No sabes que sala escoger?</strong></p><br/>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5479765582695!2d-3.7023791246093496!3d40.396709871442816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42276cf3d4b369%3A0x87da8fb573395cad!2sFactor%C3%ADa%20F5!5e0!3m2!1ses!2ses!4v1711015242070!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div>
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
