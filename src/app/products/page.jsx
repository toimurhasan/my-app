// import ProductCard from "./components/ProductCard";

import ProductCard from "../components/ProductCard";

// Fetch products from API route
async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // disable caching (useful for dev)
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
