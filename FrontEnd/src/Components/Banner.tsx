import React from "react";
import ImgHeader from "../Assets/Fundocriancas.jpg";
import { FaSearch } from "react-icons/fa";


function Banner() {
    return <div>
        <div className="bannerdefundo">
            <div>
                <h1>CEDECA <br /> OSASCO</h1>
            </div>
            <div className="inputpesquisabanner">
                <input type="text" name="" id="" />
                <button><FaSearch /></button>
            </div>
        </div>
    </div>
}

export default Banner;