import React from 'react';

export const Services = () => {

    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Mis Servicios</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-paint-brush" aria-hidden="true"></i>
                            <div className="text">Diseñador Web</div>
                            <p>Diseño de webs atractivas e intuitivas con el usuario, usando tecnologías de desarrollo como
                                HTML, CSS y JS</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa fa-code" aria-hidden="true"></i>
                            <div className="text">Desarrollador Frontend</div>
                            <p>Desarrollo de aplicaciones webs con Javascript y frameworks de desarrollo como Angular y
                                ReactJs</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <i className="fa fa-google" aria-hidden="true"></i>
                            <div className="text">Google Cloud platform</div>
                            <p>Uso de servicios de Firebase, Cloud Firestore y demas servicios de Google Cloud para el
                                desarrollo de Apps Webs</p>
                        </div>
                    </div>
                </div>
            </div>
    </section >
    )
}