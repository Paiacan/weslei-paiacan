import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface PaymentDescriptionCardProps {
    icon: IconProp;
    description: string;
}

const PaymentDescriptionCard: React.FC<PaymentDescriptionCardProps> = ({icon, description}) => {
    return (
        <>
        <div className="bg-black text-white w-[80%] lg:w-[60%] p-4 flex flex-row justify-between items-center">
            <FontAwesomeIcon className={`bg-[#FAAF02] aspect-square p-4 rounded-full text-2xl lg:text-4xl mr-6`} icon={icon}/>
            <p className="text-xs">{description}</p>
        </div>
        </>
    );
}

export default PaymentDescriptionCard;