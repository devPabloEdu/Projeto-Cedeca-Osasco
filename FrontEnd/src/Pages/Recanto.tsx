import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RecantoBanner from "../Assets/pageImages/Recantobanner.PNG"

function Recanto() {

        useEffect(() => {
        AOS.init({
        duration: 800, // Duração das animações em milissegundos
        offset: 10, // Distância em pixels para ativar a animação
        easing: "ease-in-out", // Tipo de suavização
        once: false, // Animação só ocorre uma vez
        });
        }, []);

    return (
        <div>
            <hr />
            <div className="bannermunhozbox">
                <div data-aos="fade-right">
                    <h1>ATIVIDADES <br /> RECANTO DAS ROSAS</h1>
                    <p>Nesta unidade de atendimento localizada na Zona Sul de Osasco, são realizados vários cursos e qualificação profissional em parceria com a Secretaria de Trabalho e Renda (SETRE), visando a melhor capacitação profissional para os nossos jovens. Ressalta-se que estes mesmos trabalhos são aplicados nas demais unidades de atendimento. Estes cursos são oferecidos como meio de capacitação e qualificação da mão de obra do público jovem, além de promover integração, sociabilização e cidadania.</p>
                </div>

                <div data-aos="fade-left">
                    <img src={RecantoBanner} alt="" />
                </div>
            </div>
                <h2 className="atividadesoferecidas" data-aos="fade-up">ATIVIDADES OFERECIDAS</h2>
            <div className="ListasMunhozBox" data-aos="fade-up">
                <div>
                    <ul>
                        <li>Capacitação Profissional</li>
                        <li>Auxiliar de Logística</li>
                        <li>Auxiliar Administrativo</li>
                    </ul>
                </div>
            </div>
            <div className="MAPSboxmunhoz" data-aos="fade-right">
                <div>
                    <h2>ONDE NOS ENCONTRAR</h2>
                    <p>Estrada das Margaridas n° 212 Recanto das Rosas / Sul – Osasco / SP</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.510724225308!2d-46.81832300782437!3d-23.577228165155447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55473672f843%3A0x91a5d9a785b2bdbf!2sCEDECA%20%7C%20Recanto%20das%20Rosas!5e0!3m2!1spt-BR!2sbr!4v1734045281572!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Recanto;
