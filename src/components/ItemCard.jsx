import { useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";

import QuantityButton from "./QuantityButton";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (quantity) => {
    if (quantity > 0) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity,
        })
      );
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <tr className="border-b">
      <td className="p-4">{item.name}</td>
      <td className="p-4">
        <QuantityButton
          text="-"
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
        />
        <span className="px-2">{item.quantity}</span>
        <QuantityButton
          text="+"
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
        />
      </td>
      <td className="p-4">$ {item.price.toFixed(2)}</td>
      <td className="p-4">$ {(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <FaRegTrashCan
          className="hover:text-red-500 cursor-pointer"
          onClick={handleRemoveFromCart}
        />
      </td>
    </tr>
  );
}

export default ItemCard;
