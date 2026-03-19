import { useParams } from "react-router-dom";
import products from "../features/products/data/products.json";

const Product = () => {
     const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) return <div>Not found</div>;

  const whatsappLink = `https://wa.me/5491112345678?text=Me interesa ${product.name}`;

  return (
    <div className="p-4">
      <img src={product.image} className="w-full h-60 object-cover rounded" />

      <h1 className="text-xl font-bold mt-2">{product.name}</h1>
      <p>{product.description}</p>

      <a
        href={whatsappLink}
        target="_blank"
        className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
 } 

export default Product;