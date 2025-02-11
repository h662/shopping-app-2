import { useParams } from "react-router-dom";
import dummyProducts from "../dummyData.json";
import AddToCartButton from "../components/AddToCartButton";
import CheckoutButton from "../components/CheckoutButton";

function ProductDetail() {
  const { id } = useParams();

  const product = dummyProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Product Detail</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={`/assets/${product.image}`}
          alt={product.name}
          className="w-full lg:w-1/2 h-64 object-cover rounded shadow"
        />
        <div className="flex flex-col gap-4 grow">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-bold text-blue-500">$ {product.price}</p>
          <div className="flex gap-4">
            <CheckoutButton text="Buy Now" />
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
