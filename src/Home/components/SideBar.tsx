import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/img/logo.png";

function SideBar() {
    return (
        <>
        <div className="bg-black h-full w-60 xl:w-116 flex flex-col justify-around items-center">
        <img src={logo} alt="logo-img"  className="w-full h-auto ml-10 lg:ml-20 mr-10 lg:mr-20 max-w-md mx-auto object-cover"/>
        <h1 className="text-2xl lg:text-4xl xl:text-6xl font-bold  ml-10 mr-10">CHEGOU A HORA DE VOCÊ MUDAR A SUA VIDA</h1>
        <div className="grid grid-cols-3 gap-16 ml-10 lg:ml-20 mr-10 lg:mr-20" id="contact-row">
        <a href="https://wa.me/5575992085520" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl lg:text-5xl xl:text-6xl"/>
        </a>
        <a href="mailto:weslei_roque@yahoo.com.br" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl lg:text-5xl xl:text-6xl"/>
        </a>
        <a href="https://www.instagram.com/ctpaiacanteam/?hl=pt" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-3xl lg:text-5xl xl:text-6xl"/>
        </a>
        </div>
        </div>
        </>
    );
}

export default SideBar;