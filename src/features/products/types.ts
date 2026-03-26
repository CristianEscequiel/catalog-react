export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  technicalSpecs: string[];
  image: string;
};

export type ProductInput = Omit<Product, "brand"> & {
  brand?: string;
  marca?: string;
};

export const getProductBrand = (product: Pick<ProductInput, "brand" | "marca">) =>
  product.marca ?? product.brand ?? "Sin marca";
