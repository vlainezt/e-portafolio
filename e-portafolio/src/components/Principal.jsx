import React from 'react';

export const Principal = () =>{

    return(
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Bienvenido, soy</div>
                    <div className="text-2">Douglas Hernández</div>
                    <div className="text-3"><span className="typing"></span></div>

                </div>
                <div className="social-media">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/douglas-hernandez-9b5395202"
                            target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/TCxDouglas" target="_blank"><i className="fa fa-github"
                            aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}