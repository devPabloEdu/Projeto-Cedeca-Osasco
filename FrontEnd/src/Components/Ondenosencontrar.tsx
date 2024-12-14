import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Ondenosencontrar() {

    
    useEffect(() => {
    AOS.init({
      duration: 800, // Duração das animações em milissegundos
      offset: 10, // Distância em pixels para ativar a animação
      easing: "ease-in-out", // Tipo de suavização
      once: false, // Animação só ocorre uma vez
    });
    }, []);

    return <div>
        <div className="ondenosencontrarbox" id="Ondenosencontrarid">
            <h2 data-aos="fade-up">ONDE NOS ENCONTRAR</h2>
            <div className="lugaresbox">
                <div className="MunhozBox" data-aos="fade-right">
                    <h3>Munhoz Junior</h3>
                    <p>Rua Professor Sud Menucci no 1056/1101<br />
                    Munhoz Junior Osasco/SP</p>
                </div>

                <div className="CasperBox" data-aos="fade-up">
                    <h3>Casper Libero</h3>
                    <p>Av. Cásper Líbero n°163<br />
                    Cipava – Osasco/SP</p>
                </div>

                <div className="RecantoBox" data-aos="fade-up">
                    <h3>Recanto Das Rosas</h3>
                    <p>Estrada das Margaridas n°212<br />
                    Recanto das Rosas/ Sul – Osasco/SP</p>
                </div>

                <div className="Centrobox" data-aos="fade-left">
                    <h3>Centro</h3>
                    <p>Av. Dionysia Alves Barreto n°18<br />
                    Centro - Osasco/SP</p>
                </div>
            </div>
        </div>
    </div>
}

export default Ondenosencontrar;