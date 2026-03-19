import products from "../data/products.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 p-4">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </>
    )
}

export default ProductList;