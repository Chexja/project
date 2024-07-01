import React, { useEffect } from 'react';
import '/workspaces/project/src/Carrito.css'
const Carrito = () => {
    useEffect(() => {
        // Códigos telefónicos por país
        const countryPhoneCodes = {
            "Peru": { "code": "+51", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
            "USA": { "code": "+1", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "UK": { "code": "+44", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Argentina": { "code": "+54", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Brazil": { "code": "+55", "pattern": "[0-9]{11}", "title": "Debe contener 11 dígitos numéricos" },
            "Canada": { "code": "+1", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Chile": { "code": "+56", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
            "China": { "code": "+86", "pattern": "[0-9]{11}", "title": "Debe contener 11 dígitos numéricos" },
            "France": { "code": "+33", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
            "Germany": { "code": "+49", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "India": { "code": "+91", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Italy": { "code": "+39", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Japan": { "code": "+81", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Mexico": { "code": "+52", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" },
            "Spain": { "code": "+34", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
            "Australia": { "code": "+61", "pattern": "[0-9]{9}", "title": "Debe contener 9 dígitos numéricos" },
            "Colombia": { "code": "+57", "pattern": "[0-9]{10}", "title": "Debe contener 10 dígitos numéricos" }
        };

        // Función para llenar el selector de países
        const populateCountrySelect = () => {
            const select = document.getElementById('pais');
            for (const country in countryPhoneCodes) {
                const option = document.createElement('option');
                option.value = country;
                option.text = country;
                select.appendChild(option);
            }
        };

        // Función para actualizar la validación del número de teléfono
        const updatePhoneValidation = () => {
            const select = document.getElementById('pais');
            const telefono = document.getElementById('telefono');
            const selectedCountry = select.value;

            if (countryPhoneCodes[selectedCountry]) {
                const { pattern, title } = countryPhoneCodes[selectedCountry];
                telefono.pattern = pattern;
                telefono.title = title;
            }
        };

        populateCountrySelect();
        document.getElementById('pais').addEventListener('change', updatePhoneValidation);

        // Agregar la lógica de validación de formulario
        document.getElementById('paymentForm').addEventListener('submit', function (event) {
            let form = event.target;
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);

        // Event listener para el botón de pago
        document.getElementById('boton-pagar').addEventListener('click', function () {
            // Mostrar mensaje de agradecimiento
            alert('¡Gracias por su compra!');

            // Redirigir a la página de inicio
            window.location.href = 'index.html';
        });

    }, []);

    return (
        <aside className="formulario-pago">
            <h2>Pago</h2>
            <form id="paymentForm" action="#" method="post" className="needs-validation" noValidate>
                <section className="info-contacto">
                    <h3>Información de contacto</h3>
                    <div className="name-fields">
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" required />
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id="apellido" name="apellido" required />
                        </div>
                    </div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required />
                    <div className="checkbox-field">
                        <input type="checkbox" id="ofertas" name="ofertas" />
                        <label htmlFor="ofertas">Enviar novedades y ofertas por correo electrónico</label>
                    </div>
                </section>

                <section className="direccion-envio">
                    <h3>Dirección de envío</h3>
                    <label htmlFor="pais">País</label>
                    <select id="pais" name="pais" required />

                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" id="direccion" name="direccion" required />
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" id="ciudad" name="ciudad" required />
                    <label htmlFor="codigo-postal">Código Postal</label>
                    <input type="text" id="codigo-postal" name="codigo-postal" pattern="[0-9]{5}"
                        title="Debe contener 5 dígitos numéricos" required />
                </section>

                <section className="metodos-pago">
                    <h3>Métodos de pago</h3>
                    <label htmlFor="tarjeta">Número de tarjeta</label>
                    <input type="text" id="tarjeta" name="tarjeta" pattern="[0-9]{16}"
                        title="Debe contener 16 dígitos numéricos" required />
                    <div className="exp-cvv-fields">
                        <div>
                            <label htmlFor="fecha-expiracion">Fecha de expiración</label>
                            <input type="text" id="fecha-expiracion" name="fecha-expiracion"
                                pattern="(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})"
                                title="Debe estar en el formato MM/AA o MM/AAAA" required />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" pattern="[0-9]{3}"
                                title="Debe contener 3 dígitos numéricos" required />
                        </div>
                    </div>
                    <label htmlFor="nombre-titular">Nombre del titular</label>
                    <input type="text" id="nombre-titular" name="nombre-titular" required />
                </section>

                <button type="submit" id="boton-pagar" className="btn btn-primary">Pagar</button>
            </form>
        </aside>
    );
};

export default Carrito;
