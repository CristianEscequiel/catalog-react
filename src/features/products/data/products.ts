import type { Product, ProductInput } from "../types";
import { getProductBrand } from "../types";
import rawProducts from "./products.json";

const normalizeImagePath = (imagePath: string) => {
  if (imagePath.startsWith("/images/")) {
    return imagePath;
  }

  const fileName = imagePath.split("/").pop();

  return fileName ? `/images/${fileName}` : imagePath;
};

const normalizeProduct = (product: ProductInput): Product => ({
  id: product.id,
  name: product.name,
  brand: getProductBrand(product),
  category: product.category,
  description: product.description,
  technicalSpecs: product.technicalSpecs,
  image: normalizeImagePath(product.image),
});

const products: Product[] = (rawProducts as ProductInput[]).map(normalizeProduct);

export default products;
