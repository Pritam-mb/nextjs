import { addProduct } from "@/src/prisma-db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, price, description } = body;

    if (!title || price === undefined || price === null || price === '') {
      return new Response(
        JSON.stringify({ error: "Title and price are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const parsedPrice = parseInt(price, 10);
    if (isNaN(parsedPrice)) {
      return new Response(
        JSON.stringify({ error: "Price must be a valid number." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const product = await addProduct(title, parsedPrice, description || "");
    return new Response(JSON.stringify(product), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
