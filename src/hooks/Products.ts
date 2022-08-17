import { useEffect, useState } from "react";
import getProducts from "../data/Products.DB";
import IProduct from "../interfaces/IProduct";

const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            setError('');
            setLoading(true);

            const response = await getProducts();
            setProducts(response);
    
            setLoading(false);
        } catch (e) {
            setLoading(false);

            const error = e as Error;
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, error, loading };
}

export default useProducts;
