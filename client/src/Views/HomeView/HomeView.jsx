import "./HomeView.css";
import ImageRoom from '../../assets/image/roomimage.jpg'
import { Link } from 'react-router-dom'

function HomeView() {
    return (
        <main>
            <img src={ImageRoom} className="home-image" alt="Imagen de una sala con mesas y sillas"/>
            <section className="home-section">
                <article>
                <p><u><strong>Barcelona</strong></u><br/>
                    Avinguda Bogatell, 82<br/>
                    08005 Barcelona<br/>
                    info@factoriaf5.org
                </p>
                <button>Ver las salas</button>
                    </article>
                    <article>
                <p><u><strong>Madrid</strong></u><br/>
                    C. Fernando Poo, 25<br/>
                    28045 Madrid<br/>
                    madrid@factoriaf5.org</p>
                    <button><Link to="/RoomView">Ver las salas</Link></button>
                    </article>
                    <article>
                <p><u><strong>Langreo</strong></u><br/>
                    Calle Hornos Altos, s/n<br/>
                    33949 Asturias<br/>
                    asturias@factoriaf5.org</p>
                    <button>Ver las salas</button>
                    </article>
            </section>
        </main>
    )
}
export default HomeView;