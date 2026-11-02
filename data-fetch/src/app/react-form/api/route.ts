import { addProduct, fetchproducts } from "@/src/prisma-db";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};
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
// import { updateProduct, deleteProduct, getProduct } from "@/src/prisma-db";

// // Next.js 15+ / 16 passes `params` as a Promise
// type RouteContext = {
//   params: Promise<{ id: string }>;
// };

// // 1. GET a single product: /react-form/api/123
// export async function GET(request: Request, { params }: RouteContext) {
//   try {
//     const { id } = await params;
//     const productId = parseInt(id, 10);

//     const product = await getProduct(productId);
//     if (!product) {
//       return new Response(JSON.stringify({ error: "Product not found" }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     return new Response(JSON.stringify(product), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// // 2. UPDATE (PATCH/PUT): /react-form/api/123
// export async function PATCH(request: Request, { params }: RouteContext) {
//   try {
//     const { id } = await params;
//     const productId = parseInt(id, 10);

//     const body = await request.json();
//     const { title, price, description } = body;

//     const updated = await updateProduct(
//       productId,
//       title,
//       parseInt(price, 10),
//       description || ""
//     );

//     return new Response(JSON.stringify(updated), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to update product" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// // 3. DELETE: /react-form/api/123
// export async function DELETE(request: Request, { params }: RouteContext) {
//   try {
//     const { id } = await params;
//     const productId = parseInt(id, 10);

//     await deleteProduct(productId);

//     return new Response(
//       JSON.stringify({ message: "Product deleted successfully" }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to delete product" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

export async function GET(request: Request) {
  try {
    // const url = new URL(request.url);
    const products:Product[]= await fetchproducts();


    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}