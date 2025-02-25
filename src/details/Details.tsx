import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import products, { Product } from "../data/products";
import { EXTERNAL_LINKS } from "../utils/constants";
import DetailsConsultancy from "./components/consultancy/DetailsConsultancy";
import DetailsTopics from "./components/DetailsTopics";
import DetailsVideo from "./components/DetailsVideos";
import PriceAndPaymentDetails from "./components/PriceAndPaymentDetails";

const Details: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product: Product = products.find(
    (p) => p.id === parseInt(productId!, 10)
  ) as Product;

  const isConsultancy = product.isConsultancy;

  return (
    <>
      <div className="relative w-screen h-screen overflow-x-hidden bg-[url('assets/img/details_background.png')] bg-cover bg-repeat-y">
        <div className="relative flex h-screen w-full justify-center items-center">
            <FontAwesomeIcon
              className="absolute top-0 left-0 p-6 text-3xl cursor-pointer hover:text-white"
              onClick={() => navigate(-1)}
              icon={faArrowLeft}
            />
          <div className="flex flex-col w-full md:w-3/4 lg:w-2/4 max-w-full justify-center items-center p-4 mt-10 mb-10">
          <img className="cursor-pointer transition-all transition-discrete hover:w-[65%]" onClick={() => onClickImg(isConsultancy)} src={product.imagePath} width="60%" alt="ebook-img" />
            <a
              href={isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#"}
              target="_blank"
            >
              <button className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl">
                {isConsultancy ? "CONTATE-ME AGORA" : "ADQUIRA O SEU"}
              </button>
            </a>
          </div>
        </div>
        {(product.videoPath !== null || product.videoPath !== "") && (
          <>
            <DetailsVideo videoPath={product.videoPath} title={product.title} description={product.description} isConsultancy={isConsultancy}/>
          </>
        )}
        {!isConsultancy && (
          <>
            <DetailsTopics
              title={product.title}
              description={product.description ?? ""}
              imagePath={product.imagePath}
              whatYouWillLearn={product.whatYouWillLearn}
              forWhoIsIndicated={product.forWhoIsIndicated}
            />
            <PriceAndPaymentDetails
              imagePath={product.imagePath ?? ""}
              price={product.price}
              isConsultancy={product.isConsultancy}
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


const onClickImg = (isConsultancy: boolean) => {
  const url = isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#";
  window.open(url, "_blank");
}

export default Details;
