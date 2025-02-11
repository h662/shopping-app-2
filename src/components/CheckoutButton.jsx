import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutButton = ({ text }) => {
  const { totalAmount } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <button
      className={`button-style text-center  ${
        totalAmount ? "bg-green-500" : "bg-green-100 cursor-not-allowed"
      }`}
      onClick={() => navigate("/checkout")}
      disabled={!totalAmount}
    >
      {text}
    </button>
  );
};

export default CheckoutButton;
