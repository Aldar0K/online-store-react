import Loader from "../components/Loader/Loader";
import ErrorMessage from '../components/Error/ErrorMessage';
import Product from "../components/Product/Product";
import useProducts from '../hooks/Products';
import IProduct from "../interfaces/IProduct";
import { useContext } from "react";
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

    return (
        <div className='wrapper'>
            <Header>
                <Navigation />
            </Header>
            <main className="main">
                <div className="conteiner main__conteiner">
                    <Cart amount={0} />
                    <div className="main__products products">
                        <ul className="products__items">
                            { loading && <Loader /> }
                            { error && <ErrorMessage error={error} /> }
                            { products
                                .map((product: IProduct) => 
                                <Product product={product} key={product.id}></Product>) }
                        </ul>   
                    </div>

                    {modal && 
                    <Modal 
                        title="Create new product"
                        onClose={ closeModal }
                    >
                        <CreateProductForm onCreate={ closeModal } />
                    </Modal>}

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
