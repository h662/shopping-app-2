import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="container">
      <h1 className="page-title">Product list</h1>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Cards */}
        <Link
          to="/products/1"
          className="p-4 border rounded shadow hover:shadow-lg"
        >
          <img
            src="/assets/1.jpg"
            alt="Sample Product"
            className="w-full h-64 object-cover rounded shadow-lg"
          />
          <h3 className="font-semibold mt-4">Sample Product</h3>
          <p className="text-gray-700">$100</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
