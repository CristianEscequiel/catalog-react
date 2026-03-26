import { Link } from "react-router-dom";
import { type FeaturedProductsSectionContent } from "../../../config/homeContent";
import products from "../data/products";
import ProductCard from "./ProductCard";

type FeaturedProductsProps = {
  content: FeaturedProductsSectionContent;
};

const FeaturedProducts = ({ content }: FeaturedProductsProps) => {
  const featuredProducts = products.reduce<typeof products>((selectedProducts, product) => {
    const hasCategory = selectedProducts.some((selectedProduct) => selectedProduct.category === product.category);

    if (hasCategory || selectedProducts.length >= 6) {
      return selectedProducts;
    }

    return [...selectedProducts, product];
  }, []);

  return (
    <section id="catalog" className="mt-8 rounded-3xl px-4 py-8 surface-soft md:px-6">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{content.badge}</p>
          <h2 className="text-2xl font-bold">{content.title}</h2>
          <p className="mt-1 text-sm text-muted">{content.description}</p>
        </div>
        <Link to="/catalog" className="primary-link text-sm font-semibold">
          {content.viewAllLabel}
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
