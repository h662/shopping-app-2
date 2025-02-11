import ProductCard from "../components/ProductCard";
import dummyProducts from "../dummyData.json";

function ProductList() {
  return (
    <div className="container">
      <h1 className="page-title">Product list</h1>
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
