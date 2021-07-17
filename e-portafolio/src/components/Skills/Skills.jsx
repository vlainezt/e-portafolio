import React from 'react';

export const Skills = () => {

    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">Mis Habilidades</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">Mis habilidades y conocimiento</div>
                        <p>
                            Actualmente me he especializado más en desarrollo de aplicaciones webs, aprendiendo múltiples
                            tecnologías como JavaScript, Angular, React, CSS, HTML y TypeScript. También he trabajado mucho
                            con la Cloud Platform de Google, usando múltiples servicios que ofrecen, como los servicios de
                            firebase, api Keys de Google Maps y Email, entre otros servicios que nos brinda Google.
                            También poseo conocimientos de desarrollo de aplicaciones móvil usando Android Studio, Java y
                            Kotlin, y diseño móvil con XML

                        </p>
                        <a href="#">Leer más</a>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>80%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>60%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>70%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>75%</span>
                            </div>
                            <div className="line react"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Angular</span>
                                <span>70%</span>
                            </div>
                            <div className="line angular"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Cloud Firestore</span>
                                <span>80%</span>
                            </div>
                            <div className="line firestore"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Google Cloud Platform</span>
                                <span>70%</span>
                            </div>
                            <div className="line cloud"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}