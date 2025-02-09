import { useParams } from 'react-router-dom';
import { Product } from '../data/products'
import products from "../data/products";

const Details : React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const product: Product = products.find((p) => p.id === parseInt(productId!, 10)) as Product;
    return (
        <>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1>I ARRIVE ON THE DETAILS PAGE {product.id}</h1>
        </div>
        </>
    );
}

export default Details;