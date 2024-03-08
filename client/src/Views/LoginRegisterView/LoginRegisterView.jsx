import React, { useEffect } from 'react';
import './LoginRegisterView.css';

const LoginRegisterView = () => {
    useEffect(() => {
        const cajaTraseraLogin = document.querySelector(".caja__trasera-login");
        const cajaTraseraRegister = document.querySelector(".caja__trasera-register");
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

        document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
        document.getElementById("btn__registrarse").addEventListener("click", register);

        return () => {
            window.removeEventListener("resize", anchoPage);
            document.getElementById("btn__iniciar-sesion").removeEventListener("click", iniciarSesion);
            document.getElementById("btn__registrarse").removeEventListener("click", register);
        };
    }, []);

    return (
        <main>
            <section className="contenedor__todo">
                <article className="caja__trasera">
                    <div className="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div className="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </article>

                {/* Formulario de Login y registro */}
                <article className="contenedor__login-register">
                    {/* Login */}
                    <form action="procesar_formulario.php" method="post" className="formulario__login">
                        <input type="hidden" name="accion" value="iniciar_sesion" />
                        <h2>Iniciar Sesión</h2>
                        <input type="text" name="user" placeholder="Usuario" required />
                        <input type="password" name="password" placeholder="Contraseña" required />
                        <button type="submit">Entrar</button>
                    </form>

                    {/* Register */}
                    <form action="procesar_formulario.php" method="post" className="formulario__register">
                        <input type="hidden" name="accion" value="registro" />
                        <h2>Regístrarse</h2>
                        <input type="text" name="name" placeholder="Nombre completo" required />
                        <input type="email" name="email" placeholder="Correo Electrónico" required />
                        <input type="text" name="user" placeholder="Usuario" required />
                        <input type="password" name="password" placeholder="Contraseña" required />
                        <button type="submit">Regístrarse</button>
                    </form>
                </article>
            </section>
        </main>
    );
}

export default LoginRegisterView;