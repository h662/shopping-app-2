function ProductList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product list</h1>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Cards */}
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <img
            src="/assets/1.jpg"
            alt="Sample Product"
            className="w-full h-64 object-cover rounded shadow-lg"
          />
          <h3 className="font-semibold mt-4">Sample Product</h3>
          <p className="text-gray-700">$100</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
