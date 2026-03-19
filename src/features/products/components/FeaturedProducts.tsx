import products from "../data/products.json";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 2);

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Productos destacados</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
