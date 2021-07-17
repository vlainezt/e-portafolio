import React from 'react';

export const Navbar = () => {

    return (

        <div className="navbar">
            <div className="max-width">
                <div className="logo">
                    <img src={'https://firebasestorage.googleapis.com/v0/b/douglas-hernandez.appspot.com/o/Logo3.png?alt=media&token=87af7582-24cc-44a8-b25a-130f6902f07a'} alt="Logo"></img>
                </div>
                    <ul className="menu">
                        <li><a className="menu-btn">Inicio</a></li>
                        <li><a className="menu-btn">Acerca de Mi</a></li>
                        <li><a className="menu-btn">Servicios</a></li>
                        <li><a className="menu-btn">Habilidades</a></li>
                        <li><a className="menu-btn">Proyectos</a></li>
                        <li><a className="menu-btn">Contacto</a></li>
                        <li>
                            <div className="containerTrasnlate">
                                <a href="">Idioma <span><i className="fa fa-globe translateIcon" aria-hidden="true"></i></span> </a>
                                <div className="translate">
                                    <ul>
                                        <li className="mousePointer">
                                            <p style={{ color: '#33c8ea' }}> <span><i className="fa fa-language translateIcon" aria-hidden="true" style={{ color: '#33c8ea' }} ></i></span>Español</p>
                                        </li>
                                        <li className="mousePointer">
                                            <p> <span><i className="fa fa-language translateIcon" aria-hidden="true"></i></span>Ingles</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                
            </div>
        </div>

    )
}