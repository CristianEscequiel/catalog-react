import { Check, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { activeClient } from "../config/client";
import ProductImage from "../features/products/components/ProductImage";
import products from "../features/products/data/products.json";

const Product = () => {
  const { id } = useParams();

  const product = products.find((currentProduct) => currentProduct.id === id);

  if (!product) {
    return (
      <div className="surface-card rounded-2xl p-6">
        <p className="text-muted">Producto no encontrado.</p>
        <Link to="/catalog" className="primary-link mt-3 inline-block text-sm font-semibold">
          Volver al catalogo
        </Link>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/${activeClient.whatsappNumber}?text=${encodeURIComponent(
    `Hola, me interesa ${product.name}`
  )}`;

  return (
    <section className="surface-card overflow-hidden rounded-3xl">
      <div className="grid md:grid-cols-2">
        <div className="surface-soft p-4 md:p-6">
          <ProductImage src={product.image} className="h-72 w-full rounded-2xl object-cover md:h-full md:min-h-[520px]" alt={product.name} />
        </div>

        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-sm text-muted md:text-base">{product.description}</p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Ficha tecnica</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {product.technicalSpecs.map((specification) => (
                <li key={specification} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5" aria-hidden="true" />
                  <span>{specification}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Consultar por WhatsApp
            </a>
            <Link to="/catalog" className="surface-soft inline-flex rounded-xl px-5 py-3 text-sm font-semibold">
              Volver al catalogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
