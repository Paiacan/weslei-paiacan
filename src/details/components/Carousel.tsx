import { useState } from "react";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CarouselProps {
    items: Array<{ title: string; description: string; }>
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [index, setIndex] = useState(0);
    

    const prev = () => setIndex((index - 1 + items.length) % items.length);
    const next = () => setIndex((index + 1) % items.length);

    return (
        <div className="w-auto max-w-[80vw] flex justify-center items-center overflow-hidden mt-15 mb-15 px-4">
            <FontAwesomeIcon 
                className="btn-secondary rounded-full text-2xl p-4 hover:cursor-pointer z-10"
                onClick={prev}
                icon={faChevronLeft}
            />
            <div className="flex-1 overflow-hidden min-w-0">
                <div 
                    className="flex transition-transform duration-500 ease-in-out justify-center"
                >
                        <div 
                            key={index}
                            className="flex-shrink-0 basis-1/2 p-3" 
                        >
                            <div className="w-[50vw] h-[80vh] lg:h-[40vh] flex flex-col justify-center items-center bg-black text-white rounded-4xl p-5">
                                <h2 className="mt-6 text-lg lg:text-xl px-4 text-center font-bold">
                                    {items[index].title}
                                </h2>
                                <p className="mt-2 text-sm lg:text-base px-4 text-justify">
                                    {items[index].description}
                                </p>
                            </div>
                        </div>
                </div>
            </div>

            <FontAwesomeIcon 
                className="btn-secondary rounded-full text-2xl p-4 hover:cursor-pointer z-10"
                onClick={next}
                icon={faChevronRight}
            />
        </div>
    );
};

export default Carousel;