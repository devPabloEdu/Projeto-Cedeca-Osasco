import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DoeFoto from "../Assets/pageImages/Doemain-removebg-preview.png";
import TampinhaLegal from "../Assets/pageImages/TampinhaLegal.PNG";
import Financie from "../Assets/pageImages/financie.png";
import Voluntario from "../Assets/pageImages/voluntario.png";
import Logocedeca from "../Assets/Logocedeca.png";

function Doe() {

    useEffect(() => {
    AOS.init({
      duration: 800, // Duração das animações em milissegundos
      offset: 10, // Distância em pixels para ativar a animação
      easing: "ease-in-out", // Tipo de suavização
      once: false, // Animação só ocorre uma vez
    });
    }, []);

    return <div>

        <div className="bannerdoeBox" data-aos="flip-up">
            <div className="sejaparceirobox">
                <h1>SEJA <br />PARCEIRO</h1>
                <p>Esta apresentação é um CONVITE e uma ótima oportunidade de todos participarem da construção e gestão deste grande projeto. Ajude a “CRIAR MAIS OPORTUNIDADES TRANSFORMADORAS” que farão toda diferença na vida social das Crianças e Adolescentes atendidas.</p>
            </div>
        </div>

        <p className="pintroDoe">Assim propomos diversas formas de parcerias com empresas pequenas, médias e de grande porte, <br />comerciantes, pessoa física e jurídica, através das seguintes formas de participação:</p>

        <div className="DoeMainBox">
            <div data-aos="slide-right">
                <img src={DoeFoto} alt="" />
            </div>

            <div className="Lista1doacoesbox" data-aos="flip-up">

                <div className="doacaobox">
                <h3>1 - Doação e dedução de 1% de imposto de renda</h3>
                <p>na fonte em favor deste (CNPJ 24.068.451/0001-29) através do setor contábil;</p>
                </div>

                <div className="doacaobox">
                <h3>2 - Doações Diversas:</h3>
                <p>· Materiais de escritório e pedagógico · Alimentação, Roupa e Limpeza · Através do PIX CNPJ 24.068.451/0001-29</p>                
                </div>

                <div className="doacaobox">
                <h3>3 - Nota Fiscal Paulista</h3>
                <p>Inscrição como: “DOADOR AUTOMÁTICO” · Arrecadação e doação do Cupom Fiscal</p>
                </div>

                <div className="doacaobox">
                <h3>4 - Apadrinhamento nas Datas Comemorativas</h3>
                <p>· Páscoa · Arraiá Beneficente · Dia das Crianças · Festa de Natal</p>
                </div>

            </div>
        </div>

        <div className="doacoes567box" data-aos="zoom-in">
            <div className="doacoes567boxcontent">
                <img src={TampinhaLegal} alt="" width="200" />
                <div>
                    <h3>5 - Campanha Tampinha Legal</h3>
                    <p>Junte tampinhas para o projeto <br />Preencha a ficha de cadastro conosco<br /> Retire o material gráfico<br /> Monte seu ponto de coleta</p>
                </div>
            </div>

            <div className="doacoes567boxcontent">
            <img src={Financie} alt="" width="200" />
                <div>
                    <h3>6 - Financiamento de Projetos</h3>
                    <p>Mãos na Massa <br /> Jovens Conectados <br /> Horta Vertical e Educação Ambiental <br /> Educação no Trânsito <br /> Hip Hop, Grafite e Capoeira <br /> Cursos de Capacitação <br /> Diagnóstico do Trabalho Infantil</p>
                </div>
            </div>

            <div className="doacoes567boxcontent">
                <img src={Voluntario} alt="" width="200" />
                <div>
                    <h3>7 - Voluntariado</h3>
                    <p>Explore o papel do voluntariado na sociedade <br />e como ele contribui para uma comunidade <br />mais justa e solidária.</p>
                </div>
            </div>
        </div>

        <div className="contatosbox" data-aos="zoom-in">
            <h3>ENTRE EM CONTATO</h3>
            <p>(11) 97803-6396 - Gilberto <br /> (11) 94765-4710 - Claudino</p>
        </div>

        <div className="gratidaobox">
            <div>
                <h3>GRATIDÃO!</h3>
                <p>Acreditamos no trabalho, na oferta de oportunidade, na valorização da vida, na partilha do conhecimento, <br />na convivência social harmônica e salutar, no comprimento das determinações sugeridas para nossos serviços <br />fomentando assim o progresso dos nossos jovens como indivíduos, cidadãos portadores de direito.</p>
            </div>

            <div>
                <img src={Logocedeca} alt="" width="30%" data-aos="flip-down"/>
            </div>
        </div>

        
        
    </div>
}

export default Doe;