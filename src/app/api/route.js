export async function GET() {
  let data = { msg: "Hello World" };
  return Response.json({ data });
}
