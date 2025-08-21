import products from "../../../data/products.json";

export async function GET(req, { params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return Response.json(product);
}
