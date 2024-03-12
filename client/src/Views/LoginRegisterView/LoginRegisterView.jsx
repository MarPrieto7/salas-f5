import React, { useEffect, useState } from 'react';
import './LoginRegisterView.css';
import {Link} from 'react-router-dom';



const LoginRegisterView = () => {
    useEffect(() => {
        const cajaTraseraLogin = document.querySelector(".article-changes-forms-login");
        const cajaTraseraRegister = document.querySelector(".article-changes-forms-register");
        const formularioLogin = document.querySelector(".formulario__login");
        const formularioRegister = document.querySelector(".formulario__register");
        const contenedorLoginRegister = document.querySelector(".contenedor__login-register");

        const anchoPage = () => {
            if (window.innerWidth > 850) {
                cajaTraseraRegister.style.display = "block";
                cajaTraseraLogin.style.display = "block";
            } else {
                cajaTraseraRegister.style.display = "block";
                cajaTraseraRegister.style.opacity = "1";
                cajaTraseraLogin.style.display = "none";
                formularioLogin.style.display = "block";
                contenedorLoginRegister.style.left = "0px";
                formularioRegister.style.display = "none";
            }
        }

        const iniciarSesion = () => {
            if (window.innerWidth > 850) {
                formularioLogin.style.display = "block";
                contenedorLoginRegister.style.left = "10px";
                formularioRegister.style.display = "none";
                cajaTraseraRegister.style.opacity = "1";
                cajaTraseraLogin.style.opacity = "0";
            } else {
                formularioLogin.style.display = "block";
                contenedorLoginRegister.style.left = "0px";
                formularioRegister.style.display = "none";
                cajaTraseraRegister.style.display = "block";
                cajaTraseraLogin.style.display = "none";
            }
        }

        const register = () => {
            if (window.innerWidth > 850) {
                formularioRegister.style.display = "block";
                contenedorLoginRegister.style.left = "410px";
                formularioLogin.style.display = "none";
                cajaTraseraRegister.style.opacity = "0";
                cajaTraseraLogin.style.opacity = "1";
            } else {
                formularioRegister.style.display = "block";
                contenedorLoginRegister.style.left = "0px";
                formularioLogin.style.display = "none";
                cajaTraseraRegister.style.display = "none";
                cajaTraseraLogin.style.display = "block";
                cajaTraseraLogin.style.opacity = "1";
            }
        }

        window.addEventListener("resize", anchoPage);

        document.getElementById("btn-change-login").addEventListener("click", iniciarSesion);
        document.getElementById("btn-change-signup").addEventListener("click", register);



        return () => {
            window.removeEventListener("resize", anchoPage);
            document.getElementById("btn-change-login").removeEventListener("click", iniciarSesion);
            document.getElementById("btn-change-signup").removeEventListener("click", register);
        };
    }, []);

    //UNIR CON EL BACK LOGIN
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [LoginOk, setLogin] = useState(false);

    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/auth/login',
            {method:"POST", headers: {'Content-Type': 'application/json'            },
            body: JSON.stringify({  password: password, username: username })});
            const data = await response.json();
            console.log(data);
            const user = data.token;
            console.log(user)
            if (user) {
                setLogin(true);
                alert('Bienvenido ' + username);
            } else {
                alert('Las credenciales no son válidas');
            }
        } catch (error) {
            console.error('Error al verificar las credenciales', error);
        }
    }

    //FIN UNIR CON BACK LOGIN
    //BACK CON RESGITER
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [RegisterOk, setRegistrado] = useState(false);
    const [terminosAceptados, setTerminosAceptados] = useState(false);

    const store2 = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/auth/register', 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json' },
                
                body: JSON.stringify({ name: name, email: email, password: password, username: username })});

            const data = response.json();
            console.log(data);
            const user = data.token;//no segura de que esto sea aqui
            console.log(user)
            if (response.ok) {
                setRegistrado(true);
                alert('Registro exitoso');

            } else {
                alert('Error al registrar. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al registrar', error);
        }
    }

    const handleTerminosAceptados = () => {
        setTerminosAceptados(!terminosAceptados);
    }



    return (
        <main>
            <section className="section-forms">
                <article className="article-changes-forms">
                    <div className="article-changes-forms-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn-change-login">Iniciar Sesión</button>
                    </div>
                    <div className="article-changes-forms-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn-change-signup">Regístrarse</button>
                    </div>
                </article>

                {/* Formulario de Login y registro */}
                <article className="contenedor__login-register">
                    {/* Login */}
                    {!LoginOk ? (
                        <form onSubmit={store} action="procesar_formulario.php" method="post" className="formulario__login">
                            <input type="hidden" name="accion" value="iniciar_sesion" />
                            <h2>Iniciar Sesión</h2>
                            <input type="username" value={username}
                                onChange={(e) => setUsername(e.target.value)} name="user" placeholder="Nombre de Usuario" required />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Contraseña" required />
                            <button type="submit">Entrar</button>
                        </form>
                    ) : (
                        <div>
                            <p className="text-send">Bienvenido</p>
                            <Link to="/" className="btn-form">Volver a inicio</Link>
                        </div>
                    )}

                    {/* Register */}
                    {!RegisterOk ? (
                        <form onSubmit={store2} action="procesar_formulario.php" method="post" className="formulario__register">
                            <input type="hidden" name="accion" value="registro" />
                            <h2>Regístrarse</h2>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Nombre completo" required />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Correo Electrónico" required />
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Usuario" required />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Contraseña" required />
                            <div className='form-terms'>
                                <input className="form-check-input" type="checkbox" checked={terminosAceptados} onChange={handleTerminosAceptados} />
                                <label>Acepta los terminos y condiciones de privacidad</label>
                            </div>
                            <button type="submit">Regístrarse</button>
                        </form>
                    ) : (
                        <div>
                            <p className="text-send">Registro completado</p>
                            <Link to="/" className="btn-form">Volver a inicio</Link>
                        </div>
                    )}
                </article>
            </section>
        </main>
    );
}

export default LoginRegisterView;