import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Quemsomos() {

    useEffect(() => {
        AOS.init({
          duration: 800, // Duração das animações em milissegundos
          offset: 20, // Distância em pixels para ativar a animação
          easing: "ease-in-out", // Tipo de suavização
          once: false, // Animação só ocorre uma vez
        });
        }, []);

    return <div>
        <div className="Quemsomosbox" id="Quemsomosid">
            <div>
                <h2 data-aos="fade-right">QUEM SOMOS</h2>
            </div>

            <div>
                <p data-aos="fade-left">O Centro de Defesa dos Direitos da Criança e Adolescente -CEDECA é uma organização da sociedade civil, sem fins lucrativos que atua na defesa da garantia de direitos das crianças, adolescentes e seus familiares em situação devulnerabilidade social. Fundado em 07 de novembro de 2015, em sua formação inicial o CEDECA contou com ovoluntariado de grupos de agentes  de proteção infantojuvenil, engajados sobretudo nas pautas da Rede de Proteção Social Básica. Atualmente o CEDECA realizaatendimentos em três unidades distribuídas na região Norte, Sul e Centro de Osasco especificamente nos bairros Jardim Munhoz Júnior, Vila Osasco e Recanto das Rosas.</p>
            </div>
        </div>
    </div>
}

export	default Quemsomos;