import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaStore, FaGlobe, FaMicrochip } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                        PC BUILDING WS
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/">
                                    <FaMicrochip /> Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/noticias">
                                    <FaStore /> Tienda
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/preguntas">
                                    <FaGlobe /> Preguntas Frecuentes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/contactanos">
                                    <span className="badge text-bg-light">
                                        <FaShoppingCart /> ¡COMPRAR!
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/iniciar-sesion">
                                    <FaUser /> Iniciar sesión
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;