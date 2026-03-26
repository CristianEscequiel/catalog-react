import { useEffect, useState } from "react";
import productFallback from "../../../assets/hero.png";

type ProductImageProps = {
  src: string;
  alt: string;
  className: string;
};

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [imageSource, setImageSource] = useState(src || productFallback);
  console.log(src)

  useEffect(() => {
    setImageSource(src || productFallback);
  }, [src]);

  return <img src={imageSource} alt={alt} className={className} onError={() => setImageSource(productFallback)} />;
};

export default ProductImage;
