import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import CheckoutButton from "../components/CheckoutButton";

function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="container">
      <h1 className="page-title">Shopping Cart</h1>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Quantity</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Total</th>
            <th className="text-left p-4"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <h2 className="text-xl font-bold w-full">
          Total: $ {totalAmount.toFixed(2)}
        </h2>
        <div>
          <CheckoutButton text="Checkout" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
