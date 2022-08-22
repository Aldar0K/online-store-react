import IProduct from '../../interfaces/IProduct';
import './ProductInfo.css';

interface IProductInfoProp {
    product: IProduct
}

const ProductInfo = ({ product }: IProductInfoProp) => {
    return (
        <>
            <h2>{product.name}</h2>
            <img className='product__image' src={product.image} alt={product.name} />
            <span>Количество: {product.amount}</span>
            <span>Год выхода: {product.release}</span>
            <span>Производитель: {product.brand}</span>
            <span>Цвет: {product.color}</span>
            <span>Количество камер: {product.cameras}</span>
            <span>Цена: {product.price} рублей</span>
        </>
    )
}

export default ProductInfo;
