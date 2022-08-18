import Loader from "../components/Loader";
import ErrorMessage from '../components/ErrorMessage';
import Product from "../components/Product";
import useProducts from '../hooks/Products';
import IProduct from "../interfaces/IProduct";
import { useContext } from "react";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { ModalContext } from "../context/ModalContext";

const ProductsPage = () => {
    const { products, error, loading } = useProducts();
    const { modal, openModal, closeModal } = useContext(ModalContext);

    return (
        <>
            <h2>Products</h2>
            <ul className="products-container">
                { loading && <Loader /> }
                { error && <ErrorMessage error={error} /> }
                { products.map((product: IProduct) => <Product product={product} key={product.id}></Product>) }
            </ul>

            {modal && <Modal 
                title="Create new product"
                onClose={ closeModal }
            >
                <CreateProduct onCreate={ closeModal } />
            </Modal>}

            <button 
                className="add-product-button"
                onClick={ openModal }
            >
                +
            </button>
        </>
    );
}   

export default ProductsPage;
