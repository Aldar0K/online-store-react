import './Product.css';
import IProduct from '../../interfaces/IProduct';

const Product = ({ product }: { product: IProduct }) => {
    return (
        <li className='products__item'>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            {/* Кнопка ддя показа дополнительной инфы */}
            <span>Количество: {product.amount}</span>
            <span>Год выхода: {product.release}</span>
            <span>Производитель: {product.brand}</span>
            <span>Цвет: {product.color}</span>
            <span>Камер: {product.cameras}</span>
            <span>Цена: {product.price}</span>
        </li>
    )
}

export default Product;
