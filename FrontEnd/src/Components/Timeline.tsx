import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Timeline = () => {
    const events = [
        { year: 2015, description: "Assembleia de Posse da Diretoria, Regimento e Estatuto.", position: "top" },
        { year: 2016, description: "Início das atividades de atendimento Psicológico em parceria com a Faculdade Anhanguera", position: "bottom" },
        { year: 2016, description: "Parceria com a rede CRAS, CREAS, CAPS, SAICA, CONSELHO TUTELAR para cadastro e atendimento de crianças, adolescentes e famílias de baixa renda", position: "bottom" },
        { year: 2017, description: "Realização de Evento Público para conscientização do Dia 18 de Maio, Dia Nacional de Combate ao Abuso e à Exploração Sexual Infantil", position: "top" },
        { year: 2018, description: "Aprovação do Cadastro pela Secretaria da Fazenda e Planejamento do Estado de São Paulo", position: "bottom" },
        { year: 2019, description: "Encaminhamento das famílias para inclusão CADÚNICO e acesso aos benéficos socioassistenciais", position: "top" },
        { year: 2020, description: "Inscrição no Conselho Municipal de Assistência Social e Cadastro Nacional de Entidades de Assistência Social - CNEAS", position: "bottom" },
        { year: 2020, description: "Inicio da Parceria com a Corregedoria Geral de Justiça para Prestação da Pecuniária", position: "bottom" },
        { year: 2021, description: "Inicio do Curso de Informática para 80 crianças e adolescentes financiado pelo Termo de Fomento FUMCAD / CMDCA. Cursos de Capacitação, Qualificação Profissional e Empreenda Rápido ", position: "top" },
        { year: 2022, description: "Início do Serviço de Convivência e Fortalecimento de Vínculos financiado pelo Termo de Colaboração da Secretaria de Assistência Social – SAS", position: "bottom" },
        { year: 2023, description: "Ministério da Cidadania concedeu a esta OSC a Certificação de Entidade Beneficente de Assistência Social", position: "top" },
    ];

    useEffect(() => {
        AOS.init({
          duration: 800, // Duração das animações em milissegundos
          offset: 20, // Distância em pixels para ativar a animação
          easing: "ease-in-out", // Tipo de suavização
          once: false, // Animação só ocorre uma vez
        });
        }, []);

    return (
        <div>
            <h2 className='titulolinhadotempo' id='linhadotempoid' data-aos="fade-up">LINHA DO TEMPO</h2>
            <div className="timeline" data-aos="fade-up" >
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-event ${event.position}`}
                    >
                        <div className="timeline-content">
                            <h3>{event.year}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
