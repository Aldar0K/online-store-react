import './CartProduct.css';
import IProduct from '../../interfaces/IProduct';

interface ICartProductProp {
    product: IProduct    
}

const CartProduct = ({ product }: ICartProductProp) => {
    return (
        <li className='products__item product'>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <span>Цена: {product.price}</span>
        </li>
    );
}

export default CartProduct;
