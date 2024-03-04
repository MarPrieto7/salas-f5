import { NavLink } from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
    return (
        <main className="header">
           <nav className="barra">
                <div className="logo">
                    <NavLink to="/"><img className="logoStyle" src="../../image/logo.png" alt="logo Factoria F5" /></NavLink>
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Aprender" >Aprender</NavLink></li>
                    <li><NavLink to="/Colabora" >Colabora</NavLink></li>
                    <li><NavLink to="/Somos" >Somos</NavLink></li>
                    <li><NavLink to="/Blog" >Blog</NavLink></li>
                    <li><NavLink to="/Sedes" >Sedes</NavLink></li>
                    <li><NavLink to="/Contacto" >Contacto </NavLink></li>
                    <li><NavLink to="/Login" >LogIn </NavLink></li>
                </ul>
            </nav>
        </main>
    )
}
export default NavBar;