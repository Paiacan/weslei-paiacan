import { useNavigate } from 'react-router-dom';
import logo from "../../assets/img/logo_no_bg.png";
import { Product } from "../../data/products";
import TagManager from 'react-gtm-module';
import { TAG_MANAGER_CONSTANTS } from '../../utils/constants';
import React, { useMemo } from 'react';

interface MainGridCardProps {
  product: Product;
  isCookiesAccepted: boolean | null;
}

const MainGridCard: React.FC<MainGridCardProps> = React.memo(({ product, isCookiesAccepted }) => {

  const navigate = useNavigate();
  
  const trackOnCardClick = () => {
    if (isCookiesAccepted) {
      const tagManagerArgs = {
        dataLayer: {
          event: TAG_MANAGER_CONSTANTS.BUTTON_CLICK,
          button_id: product.title,
        },
      };
      TagManager.dataLayer(tagManagerArgs); 
    }
  }

    const handleProductClick = (productId: number) => {
      trackOnCardClick();
      navigate(`/details/${productId}`);
    }

  const mainGridCardStyle: React.CSSProperties = useMemo<React.CSSProperties>(() => ({
    backgroundImage: `url(${product.imagePath})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    aspectRatio: "1/1",
  }), [product.imagePath]);
  return (
      <button onClick={() => handleProductClick(product.id)}>
        <div
          style={mainGridCardStyle}
          className="relative opacity-100 hover:opacity-75 transition-opacity duration-300 group">
          <img
            src={logo}
            loading='lazy'
            alt="Logo"
            className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-32 h-32 lg:w-64 lg:h-64 "
          />
        </div>
      </button>
  );
}
);

export default MainGridCard;
