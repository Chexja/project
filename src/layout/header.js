import { Link } from 'react-router-dom';
import '/workspaces/project/src/css/Header.css'; 

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                        PC BUILDING WS
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/">
                                    <i data-feather="cpu"></i> Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/noticias">
                                    <i data-feather="book-open"></i> Tienda
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/preguntas">
                                    <i data-feather="globe"></i> Preguntas Frecuentes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/contactanos">
                                    <i data-feather="globe"></i> Contáctanos
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav position-absolute end-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/comprar">
                                <span className="badge text-bg-light">
                                    <i data-feather="shopping-cart"></i> ¡COMPRAR!
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;