import './Product.css';
import IProduct from '../../interfaces/IProduct';

const Product = ({ product }: { product: IProduct }) => {
    return (
        <li className='products__item'>
            {product.name}
        </li>
    )
}

export default Product;
