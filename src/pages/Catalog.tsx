import ProductList from "../features/products/components/ProductList";

const Catalog = () => {
  return (
    <section className="space-y-4">
      <div className="hero-glow rounded-3xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Catalogo</p>
        <h1 className="mt-2 text-3xl font-bold">Encuentra el producto ideal</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
          Filtra por categoria, cambia el layout y navega rapidamente cada familia de productos.
        </p>
      </div>

      <div className="surface-card rounded-3xl p-4 md:p-6">
        <ProductList />
      </div>
    </section>
  );
};

export default Catalog;
