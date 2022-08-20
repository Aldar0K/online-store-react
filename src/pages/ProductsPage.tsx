import Loader from "../components/Loader/Loader";
import ErrorMessage from '../components/Error/ErrorMessage';
import Product from "../components/Product/Product";
import useProducts from '../hooks/Products';
import IProduct from "../interfaces/IProduct";
import { useContext, useState } from "react";
import Modal from "../components/Modal/Modal";
import CreateProductForm from "../components/CreateProductForm/CreateProductForm";
import { ModalContext } from "../context/ModalContext";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";

const ProductsPage = () => {
    const { products, error, loading } = useProducts();
    const { modal, openModal, closeModal } = useContext(ModalContext);

    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as IProduct[]);

    const handleAddToCart = (product: IProduct) => {
        if (!cartItems.includes(product)) {
            setCartItems([...cartItems].concat(product));
        } else {
            setCartItems([...cartItems].slice(0, cartItems.indexOf(product))
                .concat([...cartItems].slice(cartItems.indexOf(product) + 1))
            );
        }
    }

    const handleOnCartClick = () => {
        setCartIsOpen(!cartIsOpen);
    }

    return (
        <div className='wrapper'>
            <Header>
                <Navigation />
            </Header>
            <main className="main">
                <div className="conteiner main__conteiner">
                    <Cart
                        amount={cartItems.length}
                        isOpen={cartIsOpen}
                        itemsInCart={cartItems}
                        onCartClick={handleOnCartClick}
                    />

                    {!cartIsOpen && 
                        <div className="main__products products">
                                <ul className="products__items">
                                    { loading && <Loader /> }
                                    { error && <ErrorMessage error={error} /> }
                                    { products
                                        .map((product: IProduct) => 
                                        <Product
                                            product={product}
                                            key={product.id}
                                            handleAddToCart={handleAddToCart}
                                            inCart={cartItems.includes(product)}
                                        />) 
                                    }
                                </ul> 
                        </div>
                    }   

                    {modal && 
                        <Modal 
                            title="Create new product"
                            onClose={ closeModal }
                        >
                            <CreateProductForm onCreate={ closeModal } />
                        </Modal>
                    }

                    <button 
                        className="add-product-button"
                        onClick={ openModal }
                    >
                        +
                    </button>
                </div>
            </main>
            <Footer/>
        </div>
    );
}   

export default ProductsPage;
