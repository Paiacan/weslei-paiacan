import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

const SideBar: React.FC = () => {
  const [isShowingWarning, showWarning] = useState<boolean>(false);
  const email = "weslei_roque@yahoo.com.br";

  const handleEmailClick = () => {
    const isMailSupported = (): boolean => {
      try {
        const mailLink = document.createElement("a");
        mailLink.href = `mailto:${email}`;
        return mailLink.protocol === "mailto:";
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error checking mailto: support:", error.message);
        } else {
          console.error("An unknown error occurred:", error);
        }
        return false;
      }
    };

    if (isMailSupported()) {
      window.location.href = `mailto:${email}`;
    } else {
      navigator.clipboard.writeText(email).then(() => {
        showWarning(true);
        setTimeout(() => showWarning(false), 3000);
      });
    }
  };

  return (
    <>
      {isShowingWarning && (
        <div className="fixed inset-0 bg-white w-100 h-12 lg:w-100 m-4 rounded-lg">
            <div className="flex flex-row h-full w-full justify-around items-center">
                <p>E-mail copiado!</p>
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </div>
        </div>
      )}
      <div className="bg-black h-50 w-full lg:h-full lg:w-120 flex flex-row lg:flex-col justify-around items-center">
        <img
          src={logo}
          alt="logo-img"
          className="w-24 h-24 lg:w-60 lg:h-60 ml-10 lg:ml-20 mr-10 lg:mr-20 max-w-md mx-auto object-cover"
        />
        <h1 className="text-md md:text-2xl lg:text-4xl xl:text-5xl font-bold  ml-5 mr-5">
          CHEGOU A HORA DE VOCÊ MUDAR A SUA VIDA
        </h1>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-16 ml-10 lg:ml-20 mr-10 lg:mr-20"
          id="contact-row"
        >
          <a href="https://wa.me/5575992085520" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-2xl lg:text-5xl xl:text-6xl"
            />
          </a>
          <button onClick={() => handleEmailClick()} className="cursor-pointer">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl lg:text-5xl xl:text-6xl"
            />
          </button>
          <a
            href="https://www.instagram.com/ctpaiacanteam/?hl=pt"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl lg:text-5xl xl:text-6xl"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
