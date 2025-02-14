import { useNavigate, useParams } from "react-router-dom";
import products, { Product } from "../data/products";
import DetailsTopics from "./components/DetailsTopics";
import PriceAndPaymentDetails from "./components/PriceAndPaymentDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import DetailsConsultancy from "./components/consultancy/DetailsConsultancy";
import "animate.css";
import { EXTERNAL_LINKS } from "../utils/constants";

const Details: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product: Product = products.find(
    (p) => p.id === parseInt(productId!, 10)
  ) as Product;

  const isConsultancy = product.isConsultancy;

  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden">
        <div
          className="absolute inset-0 bg-[url('assets/img/background.jpg')] bg-cover bg-center filter blur-sm"
        ></div>
        <div className="relative z-10 w-screen h-screen grid grid-cols-[1fr_2fr] justify-center items-center">
          <div className="flex flex-row bg-black w-2/3 h-full items-center">
          <FontAwesomeIcon className="absolute top-0 left-0 p-6 text-3xl cursor-pointer hover:text-white" onClick={() => navigate(-1)} icon={faArrowLeft}/>
            <div className="absolute flex flex-col items-center">
              <img
                src={product.detailsLogoImagePath}
                alt="logo-img"
                className="object-cover h-45 md:h-84 lg:h-140 xlg:h-150"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-full md:w-3/4 lg:w-2/4 max-w-full bg-contain bg-center bg-no-repeat aspect-square justify-end items-center" style={{backgroundImage: `url(${product.imagePath})`}}></div>
            <a href={isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#" } target="_blank"><button className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl">{isConsultancy ? "Contate-me agora" : "ADQUIRA O SEU"  }</button></a>
          </div>
        </div>
        {!isConsultancy && (
          <>
          <DetailsTopics title={product.title} description={product.description ?? ""} videoPath={product.videoPath} imagePath={product.imagePath} whatYouWillLearn={product.whatYouWillLearn} forWhoIsIndicated={product.forWhoIsIndicated}/>
          <PriceAndPaymentDetails imagePath={product.imagePath ?? ""} price={product.price}/>
          </>
          )
          }
          {isConsultancy && (
            <>
            <a className="relative z-50" href={EXTERNAL_LINKS.WHATSAPP} target="_blank">
              <div className="fixed bottom-10 right-10 text-5xl aspect-square p-3 pl-4 pr-4 rounded-full bg-[#25D366] text-white animate-bounce">
              <FontAwesomeIcon icon={faWhatsapp}/>
              </div>
            </a>
            <DetailsConsultancy/>
            </>
          )
          }
      </div>
    </>
  );
};

export default Details;
