import React from "react";
import { Link } from 'react-router-dom';
import authenticate from "../utils/authenticate";

function Navigation({isHomeNavigation}){
    const { isAuthenticated, payload} = authenticate();
    return(
        <header id="header" className={`fixed-top ${isHomeNavigation ? 'position-absolute' : 'bg-light text-dark'} `}>
            <div className="container d-flex">
                <div className="logo mr-auto">
                    <Link  className={` ${isHomeNavigation ? 'text-light' : 'text-dark'} `} to="/">
                        <svg enableBackground="new 0 0 24 24" height="50" viewBox="0 0 24 24" width="50"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m12 20.628c-1.35 1.51-3.098 3.017-5.127 3.262l-.002-.009c-1.996.836-5.851-1.238-5.851-5.001 0-2.49 3.197-8.004 6.581-15.119.892-1.849 1.815-3.761 4.389-3.761 2.593 0 3.476 1.827 4.562 4.079 6.427 12.813 6.427 13.52 6.427 14.801.001 4.404-5.453 7.93-10.979 1.748zm9.48-1.748c0-1.962-6.379-14.365-6.432-14.468-.923-1.913-1.478-2.912-3.038-2.912-1.845 0-2.323 1.472-3.215 3.238-6.275 12.509-6.275 13.194-6.275 14.142 0 2.994 3.683 6.055 8.486.608-1.994-2.576-3.006-4.789-3.006-6.578 0-2.738 2.012-4.17 4-4.17s4 1.432 4 4.17c0 1.789-1.011 4.002-3.006 6.578 4.602 5.219 8.486 2.556 8.486-.608zm-9.48-8.64c-1.244 0-2.5.826-2.5 2.67 0 1.375.863 3.241 2.5 5.408 1.637-2.167 2.5-4.033 2.5-5.408 0-1.844-1.256-2.67-2.5-2.67z"
                                fill={` ${isHomeNavigation ? '#fff' : '#ff5a5f'}`}/>
                        </svg>
                        Airbnb
                    </Link>
                </div>
                <nav className={` nav-menu d-none d-lg-block ${isHomeNavigation ? 'text-light' : 'text-dark'} `}>
                    <ul>
                        <li className="active">
                            <Link className={` ${isHomeNavigation ? '' : 'text-dark'} `} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={` ${isHomeNavigation ? 'text-light' : 'text-dark'} `} to="/properties">Explorar</Link>
                        </li>
                        <li>
                            <Link className={` ${isHomeNavigation ? 'text-light' : 'text-dark'} `} to="/add/property">Recibe huéspedes</Link>
                        </li>
                        { isAuthenticated
                            ? (
                                <>
                                    <li className="drop-down"><Link className={` ${isHomeNavigation ? 'text-light' : 'text-dark'} `} to="/">Hola {payload.first_name}<i className="bx bx-chevron-down"/></Link>
                                        <ul>
                                            <li><Link to="/profile">Ver perfil</Link></li>
                                            {/*<li><Link to="#">Editar Perfil</Link></li>*/}
                                            <li><Link to="/add/property">Añadir Propiedad</Link></li>
                                            {/*<li><Link to="/add/property">Mis Propiedades</Link></li>*/}
                                            <li><Link to="/logout">Cerrar Sesion</Link></li>
                                        </ul>
                                    </li>
                                </>
                            )
                            : (
                                <>
                                    <li>
                                        <Link className={` ${isHomeNavigation ? 'text-light' : 'text-dark'} `} to="/signup">Registrate</Link>
                                    </li>
                                    <li>
                                        <Link className={` ${isHomeNavigation ? 'text-light' : 'text-dark'} `} to="/login">Inicia Sesion</Link>
                                    </li>
                                </>
                            )
                        }


                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Navigation;