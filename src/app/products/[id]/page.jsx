async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Product not found");
  }
  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <p className="text-xl font-semibold text-indigo-600 mb-6">${product.price}</p>
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
}
