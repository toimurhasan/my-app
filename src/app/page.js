// import Navbar from "src/components/Navbar";
// import Hero from "src/components/Hero";
// import Footer from "src/components/Footer";
// import ProductCard from "src/components/ProductCard";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./data/products.json"; // Assuming you have a products.json file with product data

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
      <Footer />
    </>
  );
}
