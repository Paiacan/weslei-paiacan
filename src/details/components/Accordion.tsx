import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState,  useRef} from "react";
import { TAG_MANAGER_CONSTANTS } from '../../utils/constants';
import TagManager from 'react-gtm-module';

interface AccordionProps {
    title: string;
    description: string;
    isCookiesAccepted: boolean | null;
}

const Accordion: React.FC<AccordionProps> = ({title, description, isCookiesAccepted}) => {

    const [isAccordionOpenned, toggleAccordion] = useState(false)
    const accordionRef = useRef<HTMLDivElement>(null);

    const trackOpenAccordionAction = () => {
        if (isCookiesAccepted) {
            const tagManagerArgs = {
                        dataLayer: {
                          event: TAG_MANAGER_CONSTANTS.ACCORDION_CLICK,
                          button_id: TAG_MANAGER_CONSTANTS.ACCORDION_OPPENING,
                          AccordionItem: title
                        },
                      };
                      TagManager.dataLayer(tagManagerArgs);
        }
    }

    const handleAccordion = () => {
        if (accordionRef.current) {
            if(isAccordionOpenned) {
                accordionRef.current.style.maxHeight = "0";
                accordionRef.current.style.padding = "0";
            } else {
                trackOpenAccordionAction();
                accordionRef.current.style.maxHeight = `${accordionRef.current.scrollHeight + 150}px`;
                accordionRef.current.style.padding = "16px";
            }
            toggleAccordion(!isAccordionOpenned);
        }
    }

    return (
        <>
        <div className="w-full">
            <button onClick={handleAccordion} className="w-full">
                <div className="flex flex-row w-full justify-between items-center p-4 border-white border-2 cursor-pointer text-black">
                <FontAwesomeIcon icon={faCircle} className="text-xs"/>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronDown} className={`transform transition-transform duration-300 ${isAccordionOpenned ? "rotate-180" : ""}`}/>
                </div>
            </button>
            <div ref={accordionRef} className={`overflow-hidden accordion-transition text-black max-h-0`}>
                {description}
            </div>
        </div>
        </>
    );
}

export default Accordion;