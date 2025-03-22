import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import { EMAIL, EXTERNAL_LINKS } from "../../utils/constants";

const SideBar: React.FC = () => {
  const [isShowingWarning, showWarning] = useState<boolean>(false);

  const handleEmailClick = () => {
    const isMailSupported = (): boolean => {
      try {
        const mailLink = document.createElement("a");
        mailLink.href = `mailto:${EMAIL}`;
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
      window.location.href = `mailto:${EMAIL}`;
    } else {
      navigator.clipboard.writeText(EMAIL).then(() => {
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
      <div className="bg-black h-50 w-full lg:h-full lg:w-120 flex flex-row  flex-grow lg:flex-col justify-around items-center">
        <img
          src={logo}
          alt="logo-img"
          className="w-10 h-10 lg:w-60 lg:h-60 ml-10 lg:ml-20 mr-10 lg:mr-20 max-w-md mx-auto object-cover"
        />
        <h1 className="text-sm md:text-2xl flex-grow lg:text-4xl xl:text-5xl font-bold lg:mt-10 ml-5 mr-5">
          CHEGOU A HORA DE VOCÊ MUDAR A SUA VIDA
        </h1>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-16 pt-2 pb-2 lg:mb-5 lg:ml-20 mr-10 lg:mr-20"
          id="contact-row"
        >
          <a href={EXTERNAL_LINKS.WHATSAPP} target="_blank">
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
            href={EXTERNAL_LINKS.INSTAGRAM}
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
