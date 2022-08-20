import './Product.css';
import IProduct from '../../interfaces/IProduct';
import Button from '../Button/Button';

interface IProductProp {
    product: IProduct,
    handleAddToCart: (product: IProduct) => void,
    inCart: boolean
}

const Product = ({ product, handleAddToCart, inCart }: IProductProp) => {
    return (
        <li className={'products__item product' + (inCart ? ' product_active' : '')}>
            <h3>{product.name}</h3>
            <img className='product__image' src={product.image} alt={product.name} />
            <span>Цена: {product.price}</span>
            <div className='product__buttons'>
                <Button
                    text='More'
                    type="primary"
                    small={false}
                    disabled={false}
                    onClick={() => console.log('More details')}
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
