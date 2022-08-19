import './Cart.css';

const Cart = ({ amount }: { amount: number }) => {
    return (
        <div className='main__cart'>
            <img
                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                alt="cart"
            />
            <span>{amount}</span>
        </div>
    );
}

export default Cart;
