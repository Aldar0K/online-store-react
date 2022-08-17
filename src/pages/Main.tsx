import Loader from "../components/Loader";
import ErrorMessage from '../components/ErrorMessage';
import Product from "../components/Product";
import useProducts from '../hooks/Products';
import IProduct from "../interfaces/IProduct";

const Main = () => {
    const { products, error, loading } = useProducts();

    return (
        <>
            <h1>Online Store</h1>
            <ul className="products-container">
                { loading && <Loader /> }
                { error && <ErrorMessage error={error} /> }
                { products.map((product: IProduct) => <Product product={product} key={product.id}></Product>) }
            </ul>
        </>
    );
}   

export default Main;
