import Link from "next/link";

export default function ProductCard({ id, name, description, price }) {
  return (
    <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="mt-3 font-bold text-indigo-600">${price}</p>
      <Link
        href={`/products/${id}`}
        className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        View Details
      </Link>
    </div>
  );
}
