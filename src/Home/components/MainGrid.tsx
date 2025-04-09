import products from "../../data/products";
import MainGridCard from "./MainGridCard";

interface MainGridProps {
    isCookiesAccepted: boolean | null;
}

const MainGrid: React.FC<MainGridProps> = ({ isCookiesAccepted }) => {

    

    return (
        <>
        <div className="w-full lg:h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10 gap-x-20 p-10 bg-[url('assets/img/background.webp')] bg-cover bg-center">
            {
                products.map((product) => (
                    <MainGridCard isCookiesAccepted={isCookiesAccepted} key={product.id} product={product}/>
                ))
            }
        </div>
        </>
    );
}

export default MainGrid;