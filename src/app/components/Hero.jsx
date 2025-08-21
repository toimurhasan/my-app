import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to MyStore</h1>
      <p className="text-lg mb-6">Your one-stop shop for awesome products</p>
      <Link
        href="/products"
        className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Browse Products
      </Link>
    </section>
  );
}
