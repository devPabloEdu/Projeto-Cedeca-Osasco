import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MunhozBanner from "../Assets/pageImages/Munhozbanner.PNG"

function MunhozJunior() {

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
                    <h1>ATIVIDADES <br /> MUNHOZ JÚNIOR</h1>
                    <p>O CEDECA unidade Munhoz Júnior disponibiliza o Serviço de Convivência e Fortalecimento de Vínculos (SCFV) para criança e adolescentes de 06 (seis) a 17 (dezessete) anos, conforme Tipificação do Serviços Socioassistenciais – Resolução no 109 de 11 de novembro de 2009 do Conselho Nacional de Assistência Social (CNAS) a qual tem por foco a constituição de um espaço de convivência e formação para a participação e a cidadania a partir do desenvolvimento e protagonismo da criança e adolescente. Tendo como base os interesses, demandas e potencialidades nessa mesma faixa etária.</p>
                </div>

                <div data-aos="fade-left">
                    <img src={MunhozBanner} alt="" />
                </div>
            </div>
                <h2 className="atividadesoferecidas" data-aos="fade-up">ATIVIDADES OFERECIDAS</h2>
            <div className="ListasMunhozBox" data-aos="fade-up">
                <div>
                    <ul>
                        <li>Oficina de Informática</li>
                        <li>Oficina de Recreação e Atividade esportiva</li>
                        <li>Oficina de Grafite</li>
                    </ul>
                </div>

                <div>
                <ul>
                        <li>Curso de Administração</li>
                        <li>Curso de Gastronomia “Mãos na Massa”</li>
                        <li>em parceria com o SENAI e SEBRAE</li>
                    </ul>
                </div>

                <div>
                <ul>
                        <li>Oficina de Capoeira</li>
                        <li>Oficina de Artesanato</li>
                        <li>Roda de Conversa e Educação Ambiental</li>
                    </ul>
                </div>
            </div>
            <div className="MAPSboxmunhoz" data-aos="fade-right">
                <div>
                    <h2>ONDE NOS ENCONTRAR</h2>
                    <p>Rua Professor Sud Menucci no 1056/1101Munhoz Junior Osasco/SP</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0542836465875!2d-46.80852672478555!3d-23.49455417884575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff061a22756f%3A0x62aeed628fc479b!2sCEDECA%20%7C%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1733962898930!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default MunhozJunior;
