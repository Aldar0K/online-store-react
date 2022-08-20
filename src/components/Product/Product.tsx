import './Product.css';
import IProduct from '../../interfaces/IProduct';
import Button from '../Button/Button';

interface IProductProp {
    product: IProduct,
    handleAddToCart: (product: IProduct) => void    
}

const Product = ({ product, handleAddToCart }: IProductProp) => {
    return (
        <li className='products__item product'>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <span>Цена: {product.price}</span>
            <div className='product__buttons'>
                <Button
                    text='More'
                    type="secondary"
                    small={false}
                    disabled={false}
                    onClick={() => console.log('Create modal for more details')}
                />
                <Button
                    text='Buy'
                    type="primary"
                    small={false}
                    disabled={false}
                    onClick={() => {handleAddToCart(product)}}
                />
            </div>
        </li>
    );
}

export default Product;
