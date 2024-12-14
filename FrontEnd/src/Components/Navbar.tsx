import React from "react";
import { Link } from "react-router-dom";
import Logocedeca from "../Assets/Logocedeca.png";

function Navbar() {
    return <div>
        <div className="navbarbox" id="iniciodapaginaid">
            <div className="logocedecanav">
                <Link to="/"><img src={Logocedeca} alt="Logo Cedeca" /></Link>
            </div>
            <div className="navbarItens">

                <div  className="nav-item">
                    <a href="#Quemsomosid">Quem somos</a>
                    <div className="Submenu" id="submenuquemsomos">
                        <a href="#Quemsomosid">Sobre Nós</a>
                    </div>
                </div>


                <div className="nav-item">
                    <a href="#Ondenosencontrarid">Onde nos encontrar</a>
                    <div className="Submenu" id="submenuOnde">
                        <a href="#Ondenosencontrarid">Munhoz Júnior</a>
                        <a href="#Ondenosencontrarid">Unidade Centro</a>
                        <a href="#Ondenosencontrarid">Recanto das Rosas</a>
                        <a href="#Ondenosencontrarid">Casper Libero</a>
                    </div>
                </div>


                <div className="nav-item">
                    <a href="#linhadotempoid">Linha do Tempo</a>
                    <div className="Submenu" id="submenulinhadotempo">
                        <a href="#linhadotempoid">Nossa História</a>
                    </div>
                </div>


                <div className="nav-item">
                    <a href="">Nossa Atuação</a>
                    <div className="Submenu" id="submenunossaatuacao">

                    <Link to="/atividades-munhoz-junior">Atividades Munhoz Júnior</Link>

                    <Link to="/atividades-centro">Atividades Unidade Centro</Link>

                    
                    <Link to="/atividades-recanto">Atividades Recanto das Rosas</Link>

                    <Link to="/atividades-casper">tividades Casper Libero</Link>

                    </div>
                </div>


                <div className="nav-item">
                    <a href="">Doe</a>
                    <div className="Submenu" id="submenudoe">
                        <Link to="/Doe">Formas de Apoio</Link>
                    </div>
                </div>


                <div className="nav-item">
                    <a href="">Redes Sociais</a>
                    <div className="Submenu" id="submenuredes">
                        <a href="https://www.instagram.com/cedeca_osasco/" target="new_blank">Instagram</a>
                    </div>
                </div>

            </div>
        </div>

        <div className="voltaroaotopobutton">
            <a href="#iniciodapaginaid"><button>^</button></a>
        </div>
    </div>
}

export default Navbar;