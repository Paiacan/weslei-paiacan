import MainGridCard from "./MainGridCard";
import  products  from "../data/products";

const MainGrid: React.FC = () => {
    return (
        <>
        <div className="w-full lg:h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center gap-10 gap-x-20 p-10" id="main-grid">
            {
                products.map((product) => (
                    <MainGridCard key={product.id} product={product}/>
                ))
            }
        </div>
        </>
    );
}

export default MainGrid;