import React from "react";
import CedecaLogo from "../Assets/Logocedeca.png";
import LinkedinLogo from "../Assets/linkedin.png";
import InstaLogo from "../Assets/instagram.png"

function Footer() {
    return <div>
        <hr />
        <div className="Footerbox">
            <div className="logofooterbox">   
                <img src={CedecaLogo} alt="" />
                <p>Cedeca Osasco &copy;</p>
            </div>

            <div className="desenvolvedorfooterbox">
                <a href="https://www.linkedin.com/in/pablo-eduardopg/" target="new_blank"><img src={LinkedinLogo} alt="" /></a>
                <p>Desenvolvido por Pablo Eduardo</p>
            </div>
            <div className="instalogocedeca">
                <a href="https://www.instagram.com/cedeca_osasco/" target="new_blank"><img src={InstaLogo} alt="" /></a>
            </div>

            <div className="textocedecafooter">
                <p>Nos siga em nossas redes sociais</p>
                <p>Para acompanhar novidades</p>
            </div>
        </div>
    </div>
}

export default Footer;