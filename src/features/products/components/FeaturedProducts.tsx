import { Link } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <section id="catalog" className="mt-8 rounded-3xl px-4 py-8 surface-soft md:px-6">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Seleccion curada</p>
          <h2 className="text-2xl font-bold">Productos destacados</h2>
          <p className="mt-1 text-sm text-muted">Explora algunas soluciones recomendadas para tu operacion.</p>
        </div>
        <Link to="/catalog" className="primary-link text-sm font-semibold">
          Ver todo el catalogo
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
