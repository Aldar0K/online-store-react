import Loader from "../components/Loader/Loader";
import ErrorMessage from '../components/Error/ErrorMessage';
import Product from "../components/Product/Product";
import useProducts from '../hooks/useProducts';
import IProduct from "../interfaces/IProduct";
import { useContext, useState } from "react";
import Modal from "../components/Modal/Modal";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import { ModalContext } from "../context/ModalContext";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import AuthConteiner from "../components/Auth/AuthConteiner";
import AuthForm from "../components/Auth/AuthForm";

const ProductsPage = () => {
    const { products, error, loading } = useProducts();

    const { modal, openModal, closeModal } = useContext(ModalContext);
    const [ createProductModal, setCreateProductModal ] = useState(false);
    const [ detailsModal, setdetailsModal ] = useState(false);

    const [ currentProduct, setCurrentProduct ] = useState<IProduct>(products[0]);
    
    const handleShowMore = (product: IProduct) => {
        setCurrentProduct(product);
        setdetailsModal(true);
        openModal();
    }

    const [ cartIsOpen, setCartIsOpen ] = useState(false);
    const [ cartIsFull, setCartIsFull ] = useState(false);
    const [ cartItems, setCartItems ] = useState([] as IProduct[]);

    const handleAddToCart = (product: IProduct) => {
        if (cartItems.length >= 5 && !cartItems.includes(product)) {
            setCartIsFull(true);
            openModal(); 
            return;
        }

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

    const handleAddProductButton = () => {
        setCreateProductModal(true);
        openModal(); 
    }

    const [ authModal, setAuthModal ] = useState(false);
    const [ isLogIn, setIsLogIn ] = useState(false);

    const handleAuthModalOpen = () => {
        setAuthModal(true);
        openModal();
    }

    return (
        <div className='wrapper'>
            <Header>
                <Navigation />
                <AuthConteiner isLogIn={isLogIn} onAuthModalOpen={handleAuthModalOpen} />
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
                                            handleShowMore={handleShowMore}
                                            inCart={cartItems.includes(product)}
                                        />) 
                                    }
                                </ul> 
                        </div>
                    }   

                    {modal && createProductModal && 
                        <Modal
                            onClose={() => {
                                closeModal(); 
                                setCreateProductModal(false)
                            }}
                        >
                            <CreateProduct onCreate={closeModal} />
                        </Modal>
                    }

                    {modal && detailsModal &&
                        <Modal
                            onClose={() => {
                                closeModal(); 
                                setdetailsModal(false);
                            }}
                        >
                            <ProductInfo product={currentProduct} />
                        </Modal>
                    }

                    {modal && cartIsFull &&
                        <Modal
                            onClose={() => {
                                closeModal();
                                setCartIsFull(false);
                            }}
                        >
                            <ErrorMessage error={"Sorry. The cart is full"} />
                        </Modal>
                    }

                    {modal && authModal &&
                        <Modal
                            onClose={() => {
                                closeModal();
                                setAuthModal(false);
                            }}
                        >
                            <AuthForm />
                        </Modal>
                    }

                    <button
                        disabled={modal}
                        className="add-product-button"
                        onClick={handleAddProductButton}
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
