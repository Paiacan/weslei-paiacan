import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import products, { Product } from "../data/products";
import { EXTERNAL_LINKS, TAG_MANAGER_CONSTANTS } from "../utils/constants";
import DetailsChallenge from "./components/challenge/DetailsChallenge";
import DetailsConsultancy from "./components/consultancy/DetailsConsultancy";
import DetailsTopics from "./components/DetailsTopics";
import PriceAndPaymentDetails from "./components/PriceAndPaymentDetails";

interface DetailsProps {
  isCookiesAccepted: boolean | null;
}

const Details: React.FC<DetailsProps> = ({ isCookiesAccepted }) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isCookiesAccepted) {
      const tagManagerArgs = {
        dataLayer: {
          event: TAG_MANAGER_CONSTANTS.PAGE_VIEW,
          page: location.pathname,
          pageName: TAG_MANAGER_CONSTANTS.PAGE_DETAILS,
        },
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  }, [isCookiesAccepted, location]);

  const trackReturnButtonClick = () => {
    if (isCookiesAccepted) {
      const tagManagerArgs = {
        dataLayer: {
          event: TAG_MANAGER_CONSTANTS.BUTTON_CLICK,
          button_id: TAG_MANAGER_CONSTANTS.RETURN_BUTTON,
        },
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  };

  const trackOnBuyButtonClick = () => {
    if (isCookiesAccepted) {
      const tagManagerArgs = {
        dataLayer: {
          event: TAG_MANAGER_CONSTANTS.BUTTON_CLICK,
          button_id: TAG_MANAGER_CONSTANTS.BUY_BUTTON,
          buttonDirection: isConsultancy
            ? TAG_MANAGER_CONSTANTS.BUY_ON_WHATSAPP
            : TAG_MANAGER_CONSTANTS.BUY_ON_HOTMART,
          product: product.title,
        },
      };
      TagManager.dataLayer(tagManagerArgs);
    }
  };

  const product: Product = products.find(
    (p) => p.id === parseInt(productId!, 10)
  ) as Product;

  const isConsultancy = product.isConsultancy;
  const isChallenge = product.isChallenge;

  return (
    <>
      <div className="relative w-screen h-screen overflow-x-hidden bg-[url('assets/img/details_background.png')] bg-cover bg-repeat-y">
        <FontAwesomeIcon
          className="absolute top-0 left-0 p-6 text-3xl cursor-pointer hover:text-white"
          onClick={() => {
            trackReturnButtonClick();
            navigate(-1);
          }}
          icon={faArrowLeft}
        />
        <div className="flex flex-col w-screen h-screen items-center">
          <div className="flex flex-col w-full bg-gradient-to-b from-black to-transparent text-center justify-center items-center p-4 pl-10 pr-10 lg:pl-20 lg:pr-20">
            <h1 className="text-lg lg:text-3xl">{product.title}</h1>
            <h2 className="text-base lg:text-2xl mt-4 text-white text-justify">
              {product.description}
            </h2>
          </div>
          <div className="flex flex-col w-full flex-grow items-center justify-between">
            <YouTube
              className="w-[90vw] h-[40vh] lg:w-[60%] lg:h-[60vh] mt-10"
              videoId={product.videoId ?? ""}
              opts={{ width: "100%", height: "100%" }}
            ></YouTube>
            <a
              className="mt-4 mb-4"
              href={isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#"}
              target="_blank"
            >
              <button
                className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl"
                onClick={() => {
                  trackOnBuyButtonClick();
                  onBuyButtonClick(isConsultancy);
                }}
              >
                {isConsultancy ? "CONTATE-ME AGORA" : "ADQUIRA O SEU AGORA"}
              </button>
            </a>
            {isChallenge && (
              <DetailsChallenge
                forWhoIsIndicated={product.forWhoIsIndicated}
                whatYouWillLearn={product.whatYouWillLearn}
              />
            )}
          </div>
        </div>
        {!isChallenge && (
          <>
            <div className="relative flex h-screen w-full justify-center items-center">
              <div className="flex flex-col w-full md:w-3/4 lg:w-2/4 max-w-full justify-center items-center p-4 mt-10 mb-10">
                <img
                  className="cursor-pointer transition-all transition-discrete hover:w-[65%]"
                  onClick={() => {
                    trackOnBuyButtonClick();
                    onBuyButtonClick(isConsultancy);
                  }}
                  src={product.imagePath}
                  width="60%"
                  alt="ebook-img"
                />
                <a
                  href={isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#"}
                  target="_blank"
                >
                  <button
                    className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl"
                    onClick={() => {
                      trackOnBuyButtonClick();
                      onBuyButtonClick(isConsultancy);
                    }}
                  >
                    {isConsultancy ? "CONTATE-ME AGORA" : "ADQUIRA O SEU"}
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
        {!isConsultancy && !isChallenge && (
          <>
            <DetailsTopics
              isCookiesAccepted={isCookiesAccepted}
              title={product.title}
              description={product.description ?? ""}
              imagePath={product.imagePath}
              whatYouWillLearn={product.whatYouWillLearn}
              forWhoIsIndicated={product.forWhoIsIndicated}
            />
            <PriceAndPaymentDetails
              imagePath={product.imagePath ?? ""}
              oldPrice={product.oldPrice}
              actualPrice={product.actualPrice}
              isConsultancy={product.isConsultancy}
              title={product.title}
              isCookiesAccepted={isCookiesAccepted}
            />
          </>
        )}
        {isConsultancy && (
          <>
            <a
              className="relative z-50"
              href={EXTERNAL_LINKS.WHATSAPP}
              target="_blank"
            >
              <div className="fixed bottom-10 right-10 text-5xl aspect-square p-3 pl-4 pr-4 rounded-full bg-[#25D366] text-white animate-bounce">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </a>
            <DetailsConsultancy />
          </>
        )}
      </div>
    </>
  );
};

const onBuyButtonClick = (isConsultancy: boolean) => {
  const url = isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#";
  window.open(url, "_blank");
};

export default Details;
