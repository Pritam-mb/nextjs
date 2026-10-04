export async function GET() {
  return Response.json({
    title: "Dashboard",
    message: "This is the dashboard route handler.",
  });
}