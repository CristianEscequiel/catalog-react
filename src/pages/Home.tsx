import { homeContent } from "../config/homeContent";
import FeaturedProducts from "../features/products/components/FeaturedProducts";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div className="space-y-6 pb-6 md:space-y-8">
      <Hero content={homeContent.hero} />
      <AboutUs content={homeContent.aboutUs} />
      <FeaturedProducts content={homeContent.featuredProducts} />
    </div>
  );
};

export default Home;
