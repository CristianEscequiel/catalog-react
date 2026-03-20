import { ChevronDown, ChevronUp, LayoutGrid, List } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";

type LayoutMode = "grid" | "list";

const LAYOUT_STORAGE_KEY = "catalog-layout-mode";
const CATEGORY_STORAGE_KEY = "catalog-selected-category";

const ProductList = () => {
  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    []
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "Todas";
    }

    const savedCategory = window.localStorage.getItem(CATEGORY_STORAGE_KEY);
    return savedCategory && (savedCategory === "Todas" || categories.includes(savedCategory))
      ? savedCategory
      : "Todas";
  });

  const [layoutMode, setLayoutMode] = useState<LayoutMode>(() => {
    if (typeof window === "undefined") {
      return "grid";
    }

    const savedLayout = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
    return savedLayout === "list" || savedLayout === "grid" ? savedLayout : "grid";
  });

  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    () => categories.reduce((accumulator, category) => ({ ...accumulator, [category]: true }), {})
  );

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "Todas"
        ? products
        : products.filter((product) => product.category === selectedCategory),
    [selectedCategory]
  );

  const productsByCategory = useMemo(
    () =>
      filteredProducts.reduce<Record<string, Product[]>>((accumulator, product) => {
        const categoryProducts = accumulator[product.category] ?? [];
        categoryProducts.push(product);
        accumulator[product.category] = categoryProducts;
        return accumulator;
      }, {}),
    [filteredProducts]
  );

  useEffect(() => {
    window.localStorage.setItem(LAYOUT_STORAGE_KEY, layoutMode);
  }, [layoutMode]);

  useEffect(() => {
    window.localStorage.setItem(CATEGORY_STORAGE_KEY, selectedCategory);
  }, [selectedCategory]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((current) => ({
      ...current,
      [category]: !current[category],
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 rounded-2xl surface-soft p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("Todas")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition md:text-sm ${
              selectedCategory === "Todas" ? "primary-button" : "surface-card"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition md:text-sm ${
                selectedCategory === category ? "primary-button" : "surface-card"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLayoutMode("grid")}
            className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition md:text-sm ${
              layoutMode === "grid" ? "primary-button" : "surface-card"
            }`}
            aria-label="Vista en grilla"
            title="Vista en grilla"
          >
            <LayoutGrid size={15} aria-hidden="true" />
            Grilla
          </button>
          <button
            type="button"
            onClick={() => setLayoutMode("list")}
            className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition md:text-sm ${
              layoutMode === "list" ? "primary-button" : "surface-card"
            }`}
            aria-label="Vista en lista"
            title="Vista en lista"
          >
            <List size={15} aria-hidden="true" />
            Lista
          </button>
        </div>
      </div>

      {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
        <section key={category} className="rounded-2xl surface-soft p-3">
          <button
            type="button"
            onClick={() => toggleCategory(category)}
            className="surface-card flex w-full items-center justify-between rounded-xl px-3 py-2 text-left"
          >
            <span className="text-sm font-semibold md:text-base">
              {category} ({categoryProducts.length})
            </span>
            {expandedCategories[category] ? (
              <ChevronUp size={18} aria-hidden="true" />
            ) : (
              <ChevronDown size={18} aria-hidden="true" />
            )}
          </button>

          {expandedCategories[category] && (
            <div
              className={`mt-3 ${
                layoutMode === "grid" ? "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-2"
              }`}
            >
              {categoryProducts.map((product) =>
                layoutMode === "grid" ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <article key={product.id} className="surface-card rounded-lg px-2 py-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <ProductImage src={product.image} alt={product.name} className="h-8 w-8 rounded object-cover" />
                        <h3 className="truncate text-sm font-semibold">{product.name}</h3>
                      </div>
                      <Link to={`/product/${product.id}`} className="primary-link whitespace-nowrap text-xs font-semibold">
                        Ver mas
                      </Link>
                    </div>
                  </article>
                )
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default ProductList;
