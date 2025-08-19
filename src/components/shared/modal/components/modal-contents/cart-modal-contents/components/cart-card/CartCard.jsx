import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';
import { handleQuantity } from '@/lib/redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import ModalProductCard from '../../../../modal-product-card/ModalProductCard';

export default function CartCard({ item }) {
    const dispatch = useDispatch();
    const handleQuantityChange = (quantity) => {
        dispatch(handleQuantity({ id: item.id, quantity }));
    };
    return (
        <div key={item.id} className="flex items-center justify-between gap-8">
            <ModalProductCard item={item} />

            {/* Quantity Selector */}
            <div className="flex items-center space-x-2">
                <IncreaseDecreaseButtons setValue={handleQuantityChange} value={item.quantity} />
            </div>
        </div>
    )
}
