import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Suspense, useMemo, useState } from "react";
import { TAG_MANAGER_CONSTANTS } from "../../utils/constants";
import TagManager from "react-gtm-module";
import React from "react";

interface DetailsTopicsProps {
  title: string;
  description: string;
  imagePath: string;
  whatYouWillLearn: {
    topics: Array<{ title: string; description: string; imagePath: string }>;
    description: string | null;
  };
  forWhoIsIndicated: {
    topics: Array<{ title: string; description: string }>;
    description: string | null;
  };
  isCookiesAccepted: boolean | null;
}

const DetailsTopics: React.FC<DetailsTopicsProps> = React.memo(
  ({
    title,
    description,
    whatYouWillLearn,
    forWhoIsIndicated,
    isCookiesAccepted,
  }) => {
    const [isHovered, setHover] = useState(false);

    const onBuyButtonClick = () => {
      const url = "#";
      window.open(url, "_blank");
    };

    const trackBuyButtonClick = () => {
      if (isCookiesAccepted) {
        const tagManagerArgs = {
          dataLayer: {
            event: TAG_MANAGER_CONSTANTS.BUTTON_CLICK,
            button_id: TAG_MANAGER_CONSTANTS.BUY_BUTTON,
            buttonDirection: TAG_MANAGER_CONSTANTS.BUY_ON_HOTMART,
            product: title,
          },
        };
        TagManager.dataLayer(tagManagerArgs);
      }
    };

    const Carousel = React.lazy(() => import("./Carousel"));

    return (
      <>
        <div className="relative w-screen bg-[linear-gradient(transparent,black,90%,transparent)] p-4">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-3xl lg:text-6xl pl-1 pr-1 text-center mt-4 lg:mt-10">
              O QUE VOCÊ IRÁ APRENDER
            </h1>
            <p className="text-lg lg:text-xl pl-5 pr-5 text-center mt-4 lg:mt-2">
              {description}
            </p>

            <div
              className={`grid grid-cols-1 lg:grid-cols-2 mt-8 gap-10 place-items-center`}
            >
              {useMemo(
                () =>
                  whatYouWillLearn.topics.map((element, index) => (
                    <div
                      key={index}
                      className={`flex justify-center items-center mt-10 lg:w-[35vw] flex-col ${
                        index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"
                      }`}
                    >
                      <img
                        className="rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 object-cover border-2 mt-6 mb-6"
                        loading="lazy"
                        src={element.imagePath}
                        alt="o-que-ira-aprender"
                      />
                      <div>
                        <h2 className="mt-6 text-lg lg:text-xl pr-4 pl-4 text-center">
                          {element.title}
                        </h2>
                        <p className="mt-2 text-sm lg:text-base pr-4 pl-4 text-justify">
                          {element.description}
                        </p>
                      </div>
                    </div>
                  )),
                [whatYouWillLearn.topics]
              )}
            </div>
            <button
              className="btn-secondary rounded-full p-4 m-4 cursor-pointer mt-15"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => {
                trackBuyButtonClick();
                onBuyButtonClick();
              }}
            >
              <div className="flex flex-row justify-center items-center">
                COMPRE AGORA
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`rounded-full aspect-square p-3 pl-4 pr-4 ml-2 mr-2 ${
                    isHovered ? "text-black bg-white" : "bg-black text-white"
                  }`}
                />
              </div>
            </button>
            <div className="bg-primary w-screen p-10 lg:p-15 mt-15 text-center">
              <h1 className="text-3xl lg:text-6xl">PARA QUEM É INDICADO?</h1>
            </div>
            <Suspense fallback={<div>Carregando...</div>}>
              <Carousel items={forWhoIsIndicated.topics} />
            </Suspense>
          </div>
          {/* <div className="flex flex-col lg:flex-row w-screen h-full lg:h-full justify-center items-center" id="topics-content">
          <div className="flex flex-col h-auto m-10 lg:m-0 w-[97%] lg:h-[80%] lg:w-[30%] bg-primary items-center overflow-y-auto">
            <h2 className="m-4 text-center text-xl lg:text-2xl">
              O QUE VOCÊ IRÁ APRENDER COM O EBOOK {title}
            </h2>
            {whatYouWillLearn.topics.map((element, index) => (
              <Accordion
              isCookiesAccepted={isCookiesAccepted}
              key={index}
                title={element.title}
                description={element.description}
              />
            ))}
          </div>
          <div className="flex flex-col h-auto w-[80%] lg:h-[80%] lg:w-1/4 items-center justify-center m-10">
            <h1 className="text-white m-4 text-justify">{description}</h1>
            <div
              className={`h-60% w-[60%] lg:h-[80%] lg:w-auto bg-contain bg-center bg-no-repeat aspect-square`}
              style={{ backgroundImage: `url(${imagePath})` }}
            ></div>
            <button
              className="btn-secondary rounded-full p-4 m-4 cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => {
                trackBuyButtonClick();
                onBuyButtonClick();
              }}
            >
              <div className="flex flex-row justify-center items-center">
                COMPRE AGORA
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`rounded-full aspect-square p-3 pl-4 pr-4 ml-2 mr-2 ${
                    isHovered ? "text-black bg-white" : "bg-black text-white"
                  }`}
                />
              </div>
            </button>
          </div>
          <div className={`flex-col h-auto m-10 lg:m-0  w-[80%] lg:h-[80%] lg:w-1/4 bg-primary items-center overflow-y-auto ${forWhoIsIndicated.topics.length > 0 ? "flex" : "hidden"}`}>
            <h2 className={`m-4 text-center text-xl lg:text-2xl ${(forWhoIsIndicated.topics.length > 0) ? "flex" : "hidden"}`}>
              PARA QUEM É INDICADO ESTE EBOOK
            </h2>
            {forWhoIsIndicated.topics.map((element, index) => (
              <Accordion
              isCookiesAccepted={isCookiesAccepted}
              key={index}
                title={element.title}
                description={element.description}
              />
            ))}
          </div>
        </div> */}
        </div>
      </>
    );
  }
);

export default DetailsTopics;
