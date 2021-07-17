import React from 'react';

export const About = () => {

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">Acerca de mí</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={'https://firebasestorage.googleapis.com/v0/b/douglas-hernandez.appspot.com/o/ayo.jpg?alt=media&token=edb1c77d-bd1f-40dc-a13b-c4e6464e6042'} alt=""></img>
                    </div>
                    <div className="column right">
                        <div className="text">Soy Douglas Hernández <span className="typing-2"></span></div>
                        <p>
                            Actualmente soy estudiante de la carrera de Ingeniera en sistema y redes informática en la
                            Universidad Gerardo Barrios
                            Mi área preferida es la programación especializándome actualmente en desarrollo de aplicaciones
                            webs con las tecnologías de más ascenso y uso en la actualidad. Tengo experiencia en desarrollo
                            de aplicaciones con JavaScript y también usando sus frameworks como Angular y React.
                            También manejo otras áreas de la programación, entre ellas el desarrollo de aplicaciones móvil
                            con Android Studio, java y Kotlin.
                            Soy una persona bastante animada y entusiasta a la hora de trabajar en un nuevo proyecto, ya sea
                            de trabajo estudiantil o simplemente proyectos personales. Me adapto a nuevos equipos de trabajo
                            y siempre intento dar lo mejor en los trabajos que realizo, me gusta trasmitir mi entusiasmo y
                            alegría a los demás miembros del equipo y mantener el hype y la motivación por iniciar y
                            desarrollar un nuevo proyecto.
                            Tengo múltiples hobbies en mi día a día, ver streaming de entretenimiento, ver videos varios en
                            YouTube y pues lo que más disfruto es jugar ya sea con los amigos o solo a juegos ya sea de PC,
                            móvil o incluso juegos en la web.

                        </p>
                        <a href="./docs/CV.pdf" target="_blank">Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}