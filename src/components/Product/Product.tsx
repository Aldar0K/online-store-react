import './Product.css';
import IProduct from '../../interfaces/IProduct';
import Button from '../Button/Button';
// import { useContext } from 'react';
// import { ModalContext } from '../../context/ModalContext';
// import Modal from '../Modal/Modal';

const Product = ({ product }: { product: IProduct }) => {
    // const { modal, openModal, closeModal } = useContext(ModalContext);

    return (
        <li className='products__item product'>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <div className='product__buttons'>
                <Button
                    text='More'
                    type="secondary"
                    small={false}
                    disabled={false}
                    onClick={() => console.log('Create modal for more details!')}
                />
                <Button
                    text='Buy'
                    type="primary"
                    small={false}
                    disabled={false}
                    onClick={() => console.log('Add to the cart!')}
                />
            </div>

            {/* {modal && 
                <Modal 
                    title={product.name}
                    onClose={ closeModal }
                >
                    <span>Количество: {product.amount}</span>
                    <span>Год выхода: {product.release}</span>
                    <span>Производитель: {product.brand}</span>
                    <span>Цвет: {product.color}</span>
                    <span>Камер: {product.cameras}</span>
                    <span>Цена: {product.price}</span>
                </Modal>} */}
        </li>
    );
}

export default Product;
