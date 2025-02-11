import { Link } from "react-router-dom";

function Cart() {
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
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4">Sample Product</td>
            <td className="p-4">
              <button className="px-2 py-1 border rounded">-</button>
              <span className="px-2">1</span>
              <button className="px-2 py-1 border rounded">+</button>
            </td>
            <td className="p-4">$ 100</td>
            <td className="p-4">$ 100</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <h2 className="text-xl font-bold">Total: $100</h2>
        <Link
          to="/checkout"
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
