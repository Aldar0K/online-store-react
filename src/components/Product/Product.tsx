import './Product.css';
import IProduct from '../../interfaces/IProduct';
import Button from '../Button/Button';

interface IProductProp {
    product: IProduct,
    handleAddToCart: (product: IProduct) => void,
    handleShowMore: (product: IProduct) => void,
    inCart: boolean
}

const Product = ({ product, handleAddToCart, inCart, handleShowMore }: IProductProp) => {
    return (
        <li className={'products__item product' + (inCart ? ' product_active' : '')}>
            <h2>{product.name}</h2>
            <img className='product__image' src={product.image} alt={product.name} />
            <span>Цена: {product.price} рублей</span>
            <div className='product__buttons'>
                <Button
                    text='More'
                    type="primary"
                    small={false}
                    disabled={false}
                    onClick={() => {handleShowMore(product)}}
                />
                <Button
                    text={!inCart ? "Buy" : 'Remove'}
                    type={!inCart ? "primary" : 'secondary'}
                    small={false}
                    disabled={false}
                    onClick={() => {handleAddToCart(product)}}
                />
            </div>
        </li>
    );
}

export default Product;
