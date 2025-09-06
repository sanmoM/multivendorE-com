import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';
import { handleQuantity, removeFromCart } from '@/lib/redux/features/cartSlice';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import ModalProductCard from '../../../../modal-product-card/ModalProductCard';

export default function CartCard({ item }) {
    const dispatch = useDispatch();
    const handleQuantityChange = (quantity) => {
        dispatch(handleQuantity({ id: item.id, quantity }));
    };
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart({ id: item.id }));
    };
    return (
        <div className="flex items-center justify-between">
            <ModalProductCard item={item} />

            {/* Quantity Selector */}
            <div className="flex items-center space-x-2">
                <IncreaseDecreaseButtons setValue={handleQuantityChange} value={item.quantity} />
            </div>
            <button onClick={() => handleRemoveFromCart(item)}><MdDeleteOutline className='text-red-500 text-xl' /></button>
        </div>
    )
}
