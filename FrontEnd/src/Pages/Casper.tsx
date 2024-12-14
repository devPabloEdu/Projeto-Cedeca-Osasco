import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Centrobanner from "../Assets/pageImages/Centrobanner.PNG"


function Casper() {
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
                    <h1>ATIVIDADES <br /> CASPER LIBERO</h1>
                    <p>Em nossa unidade Casper Libero, situada na Av. Cásper Líbero n° 163 Cipava – Osasco / SP, são realizados mais de 200 (duzentos) atendimentos semanais as famílias de baixa renda com apoio especifico nas áreas de psicologia e psicopedagogia mediante acompanhamento apropriados de modo a oferecer a todos os interessados possibilidades de autovalorização, reinserção social, emocional, autoconscientização e superação das dependências químicas de substancias psicoativas para uma formação pessoal e cidadã.</p>
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
                    </ul>
                </div>
            </div>
            <div className="MAPSboxmunhoz" data-aos="fade-right">
                <div>
                    <h2>ONDE NOS ENCONTRAR</h2>
                    <p>Av. Cásper Líbero n° 163 Cipava – Osasco / SP</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.685684465992!2d-46.78867121952468!3d-23.543804824179773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff74c2c32933%3A0xa09abac68ebddf8b!2sAv.%20C%C3%A1sper%20L%C3%ADbero%2C%20Osasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1734046718293!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
}

export default Casper;