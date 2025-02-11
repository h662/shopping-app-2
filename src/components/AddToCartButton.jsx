import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { toast } from "react-toastify";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(
      addToCart({ id: product.id, name: product.name, price: product.price })
    );

    toast.success(`${product.name} has been added to your cart!`);
  };

  return (
    <button className="button-style" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
