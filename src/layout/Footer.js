import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Información de creador</h5> 
                        <p></p>
                        Correo electrónico:<br/>
                        <i>-    ycachoq1@upao.edu.pe </i> <br/>
                        <i>-    hberrospir1@upao.edu.pe </i> <br/>
                        <i>-    rlavadof1@upao.edu.pe </i> <br/>
                        <i>-    sevelasquezr1@upao.edu.pe </i> <br/>
                        <p></p>
                        <p>Teléfono: 923-456-789</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Acerca de nosotros</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>© 2024 Grupo IHM</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;