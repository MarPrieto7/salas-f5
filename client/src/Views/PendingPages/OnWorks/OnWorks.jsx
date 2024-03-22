import React, { useState, useEffect } from 'react';

import work from '../../../assets/image/onworks-page-2-Finalisimo.png'
import './OnWorks.css';

function OnWorks() {
    {/*meter useEfect (hooks)*/ }

    return (


        <main>
            <section className="notification-image-container">
                <h1 className="notification-onworks">Estamos mejorando la página para ti.<br></br>Disculpa las molestias.</h1>

                <figure className="image-container">
                    <img className="worker-image" src={work} alt="obreros en las casetas"></img>
                </figure>

            </section>
        </main>

    );
}

export default OnWorks;
