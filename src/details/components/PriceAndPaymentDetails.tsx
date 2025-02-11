import PaymentDescriptionCard from "./PaymentDescriptionCard";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const PriceAndPaymentDetails: React.FC = () => {
    return (
        <>
        <div className="relative flex flex-col w-screen h-screen">
        <div className="absolute inset-0 bg-[url('assets/img/background.jpg')] h-full bg-auto bg-repeat lg:bg-cover lg:bg-no-repeat bg-center filter blur-sm"></div>
            <div className="relative z-10 m-10 flex flex-row lg:flex-col justify-center items-center">
                <div className="grid grid-cols-1 grid-rows-3 gap-12">
                    <PaymentDescriptionCard icon={faCheck} description="Dados pessoais seguros"/>
                    <PaymentDescriptionCard icon={faDollarSign} description="Pagamento automático, rápido e seguro"/>
                    <PaymentDescriptionCard icon={faEnvelope} description="Acesso enviado para seu email imediatamente"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default PriceAndPaymentDetails;