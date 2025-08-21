// import products from "@/data/products.json";

import products from "../../data/products.json";

// GET all products
export async function GET() {
  return Response.json(products);
}

// POST new product
export async function POST(req) {
  const body = await req.json();

  const newProduct = {
    id: String(products.length + 1),
    name: body.name,
    description: body.description,
    price: body.price,
  };

  // ⚠️ Note: This only updates in-memory, not actual file
  products.push(newProduct);

  return Response.json(newProduct, { status: 201 });
}
