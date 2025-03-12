import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import bonusImage from "../../assets/img/bonus.png";
import paymentMethods from "../../assets/img/payment_methods.png";
import { EXTERNAL_LINKS } from "../../utils/constants";
import PaymentDescriptionCard from "./PaymentDescriptionCard";

interface PriceAndPaymentDetailsProps {
  imagePath: string;
  oldPrice: number;
  actualPrice: number;
  isConsultancy: boolean;
}

const PriceAndPaymentDetails: React.FC<PriceAndPaymentDetailsProps> = ({
  imagePath,
  oldPrice,
  actualPrice,
  isConsultancy
}) => {
  return (
    <>
      <div className="relative flex flex-col w-screen h-auto">
        <div className=" mt-10 w-full h-full lg:mt-0 flex flex-col lg:flex-row justify-start items-center">
          <div className="grid grid-cols-1 grid-rows-3 gap-y-6 place-items-center " >
            <PaymentDescriptionCard
              icon={faCheck}
              description="Dados pessoais seguros"
            />
            <PaymentDescriptionCard
              icon={faDollarSign}
              description="Pagamento automático, rápido e seguro"
            />
            <PaymentDescriptionCard
              icon={faEnvelope}
              description="Acesso enviado para seu email imediatamente"
            />
          </div>
          <div className="flex flex-col h-auto w-[80%] lg:h-[60%] lg:w-1/4 items-center justify-center m-10">
          <img src={imagePath} alt="ebook-img" />
            <h2 className="text-center text-2xl text-white m-4">SEU TREINO <span className="span-text">VITALÍCIO</span> ESTÁ A UM <a className="hover:text-[var(--on-primary-color)] animate-pulse" href={isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#"}
                                  target="_blank">CLICK</a></h2>
          </div>
          <div className="flex flex-col">
          <img className="w-[97%] lg:w-auto" src={bonusImage} alt="bonus-img"/>
          <h2 className="self-center mt-20 mb-10 text-red-600 text-6xl decoration-white"><span className="relative">
            {`R$ ${oldPrice.toFixed(2).toString().replace(".", ",")}`}
            <span className="absolute inset-0 top-1/2 left-0 w-full border-t-4 border-white rotate-[-10deg]"></span></span>
            </h2>
          <h2 className="self-center mb-20 text-white text-6xl text-shadow">{`R$ ${actualPrice.toFixed(2).toString().replace(".", ",")}`}</h2>
          </div>
        </div>
        <img className="w-[80%] lg:w-[50%] self-center" src={paymentMethods} alt="payment-methods" />
      </div>
    </>
  );
};

export default PriceAndPaymentDetails;
