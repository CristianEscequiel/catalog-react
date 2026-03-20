import { MessageCircle, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { activeClient } from "../../../config/client";
import type { Product } from "../types";
import ProductImage from "./ProductImage";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    const updateDeviceType = () => setIsHoverDevice(mediaQuery.matches);

    updateDeviceType();
    mediaQuery.addEventListener("change", updateDeviceType);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  const whatsappLink = `https://wa.me/${activeClient.whatsappNumber}?text=${encodeURIComponent(
    `Hola, me interesa ${product.name}`
  )}`;

  const handleFlip = () => {
    if (!isHoverDevice) {
      setIsFlipped((previous) => !previous);
    }
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleFlip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver informacion de ${product.name}`}
    >
      <div className="flip-card-inner">
        <article className="flip-card-face surface-card flex h-full flex-col rounded-2xl p-4">
          <ProductImage src={product.image} className="h-44 w-full rounded-xl object-cover" alt={product.name} />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">{product.category}</p>
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{product.description}</p>

          {!isHoverDevice && (
            <p className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-medium text-muted">
              <Smartphone size={14} aria-hidden="true" />
              Toca la tarjeta para ver ficha tecnica
            </p>
          )}
        </article>

        <article className="flip-card-face flip-card-back surface-card flex h-full flex-col rounded-2xl p-4">
          <h3 className="text-lg font-semibold">Ficha tecnica</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {product.technicalSpecs.map((specification) => (
              <li key={specification}>• {specification}</li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-2 pt-4">
            <Link
              to={`/product/${product.id}`}
              className="primary-link text-sm font-semibold"
              onClick={(event) => event.stopPropagation()}
            >
              Ver detalle
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold"
              onClick={(event) => event.stopPropagation()}
            >
              <MessageCircle size={14} aria-hidden="true" />
              Consultar
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductCard;
