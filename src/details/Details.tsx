import { useParams } from "react-router-dom";
import { Product } from "../data/products";
import products from "../data/products";
import DetailsTopics from "./components/DetailsTopics";

const Details: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product: Product = products.find(
    (p) => p.id === parseInt(productId!, 10)
  ) as Product;

  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden">
        <div
          className="absolute inset-0 bg-[url('assets/img/background.jpg')] bg-cover bg-center filter blur-sm bg-repeat-y"
        ></div>
        <div className="relative z-10 w-screen h-screen grid grid-cols-[1fr_2fr] justify-center items-center">
          <div className="flex bg-black w-1/3 h-full items-center">
            <div className="absolute flex flex-row items-center">
              <img
                src={product.detailsLogoImagePath}
                alt="logo-img"
                className="object-cover h-34 md:h-84 lg:h-104 xlg:h-150"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm lg:text-2xl m-4">{product.description}</h1>
            <div className="flex flex-col w-full md:w-3/4 lg:w-2/4 max-w-full bg-contain bg-center bg-no-repeat aspect-square justify-end items-center" style={{backgroundImage: `url(${product.imagePath})`}}></div>
            <button className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl">ADQUIRA O SEU</button>
          </div>
        </div>
        <DetailsTopics title={product.title} whatYouWillLearn={product.whatYouWillLearn} forWhoIsIndicated={product.forWhoIsIndicated}/>
      </div>
    </>
  );
};

export default Details;
