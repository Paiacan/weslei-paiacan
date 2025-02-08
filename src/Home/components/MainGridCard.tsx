import { Product } from "../data/products";
import logo from "../../assets/img/logo_no_bg.png";

interface MainGridCardProps {
  product: Product;
}

const MainGridCard: React.FC<MainGridCardProps> = ({ product }) => {
  const mainGridCardStyle: React.CSSProperties = {
    backgroundImage: `url(${product.imagePath})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    aspectRatio: "1/1"
  };
  return (
    <>
      <div
        style={mainGridCardStyle}
        className="relative opacity-100 hover:opacity-75 transition-opacity duration-300 group">
        <img
          src={logo}
          alt="Logo"
          className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-32 h-32 lg:w-64 lg:h-64 "
        />
      </div>
    </>
  );
};

export default MainGridCard;
