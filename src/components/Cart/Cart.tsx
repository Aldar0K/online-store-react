import IProduct from '../../interfaces/IProduct';
import Button from '../Button/Button';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({
    amount,
    onCartClick,
    isOpen,
    itemsInCart
}: {
    amount: number,
    onCartClick: () => void,
    isOpen: boolean,
    itemsInCart: IProduct[]
}) => {
    return (
        <div className='main__cart cart'>
            <div className='cart__icon'>
                <img
                    className='cart__image'
                    src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                    alt="cart"
                />
                <span className='cart__amount'>{amount}</span>
                <Button
                    text={isOpen ? 'Close' : 'Open'}
                    type={isOpen ? 'secondary' : 'primary'}
                    small={false}
                    disabled={false}
                    onClick={onCartClick}
                />
            </div>
            <div className='cart__items'>
                { isOpen && itemsInCart
                    .map((product: IProduct) => 
                    <CartProduct
                        product={product}
                        key={product.id}
                    />) }
            </div>
        </div>
    );
}

export default Cart;
