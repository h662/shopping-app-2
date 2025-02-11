import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="p-4 border rounded shadow hover:shadow-lg"
    >
      <img
        src={`/assets/${product.image}`}
        alt="Sample Product"
        className="w-full h-64 object-cover rounded shadow-lg"
      />
      <h3 className="font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-700">$ {product.price}</p>
      <AddToCartButton product={product} />
    </Link>
  );
}

export default ProductCard;
