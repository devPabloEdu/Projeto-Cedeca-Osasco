import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Centrobanner from "../Assets/pageImages/Centrobanner.PNG"


function Centro() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 10,
            easing: "ease-in=out",
            once: false,
        })
        }, []); 

    return <div>
<hr />
            <div className="bannermunhozbox">
                <div data-aos="fade-right">
                    <h1>ATIVIDADES <br /> UNIDADE CENTRO</h1>
                    <p>Em nossa unidade central, situada na Rua Antônia Bizarro no 258 no bairro Vila Osasco próximo a Catedral Santo Antônio, são realizados mais de 200 (duzentos) atendimentos semanais as famílias de baixa renda com apoio especifico nas áreas de psicologia e psicopedagogia mediante acompanhamento apropriados de modo a oferecer a todos os interessados possibilidades de autovalorização, reinserção social, emocional, autoconscientização e superação das dependências químicas de substancias psicoativas para uma formação pessoal e cidadã.</p>
                </div>

                <div data-aos="fade-left">
                    <img src={Centrobanner} alt="" />
                </div>
            </div>
                <h2 className="atividadesoferecidas" data-aos="fade-up">ATIVIDADES OFERECIDAS</h2>
            <div className="ListasMunhozBox" data-aos="fade-up">
                <div>
                    <ul>
                        <li>Atendimento Psicológico</li>
                        <li>Atendimento Psicopedagógico</li>
                        <li>Formações e Capacitações</li>
                    </ul>
                </div>
            </div>
            <div className="MAPSboxmunhoz" data-aos="fade-right">
                <div>
                    <h2>ONDE NOS ENCONTRAR</h2>
                    <p>Av. Dionysia Alves Barreto n° 18Centro - Osasco / SP</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.9511330542127!2d-46.78628336000041!3d-23.534553420708697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff08680b8959%3A0x1de5d8b9fa66f1b!2sAv.%20Dionysia%20Alves%20Barreto%2C%20Osasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1734046162325!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
}

export default Centro;