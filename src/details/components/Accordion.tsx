import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

interface AccordionProps {
    title: string;
    description: string;
}

const Accordion: React.FC<AccordionProps> = ({title, description}) => {

    const [isAccordionOpenned, toggleAccordion] = useState(false)

    return (
        <>
        <div className="w-full">
            <button onClick={() => toggleAccordion(!isAccordionOpenned)}>
                <div className="flex flex-row justify-between items-center p-4 border-white border-2 cursor-pointer">
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronDown}/>
                </div>
            </button>
            <div className={`overrflow-hidden accordion-transition p-4 ${isAccordionOpenned ? 'h-96' : 'h-0'} accordion-content`}>
                {description}
            </div>
        </div>
        </>
    );
}

export default Accordion;