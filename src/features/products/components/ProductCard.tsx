import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) =>  {
    return (
        <>
            <div className="border rounded-xl p-4 shadow">
                <img src={product.image} className="h-40 w-full object-cover rounded" />

                <h2 className="mt-2 font-semibold">{product.name}</h2>

                <Link
                    to={`/product/${product.id}`}
                    className="text-blue-500 text-sm"
                >
                    Ver más
                </Link>
            </div>
        </>
    )
}

export default ProductCard;