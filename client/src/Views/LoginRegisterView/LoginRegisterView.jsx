import "./LoginRegisterView.css";

function LoginRegisterView() {
    return (
        <main>
            <div className="contenedor__todo">
                <div className="caja__trasera">
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
                </div>

                {/* Formulario de Login y registro */}
                <div className="contenedor__login-register">
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
                </div>
            </div>
        </main>
    );
}

export default LoginRegisterView;
