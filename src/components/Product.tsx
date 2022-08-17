import IProduct from '../interfaces/IProduct';

const Product = ({ product }: { product: IProduct }) => {
    return (
        <li>
            {product.name}
        </li>
    )
}

export default Product;
