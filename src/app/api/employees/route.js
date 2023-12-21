export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("q");

  let data = [
    { id: 1, name: "Aon" },
    { id: 2, name: "Salim" },
    { id: 3, name: "Mohammed" },
  ];
  
  return Response.json({ data: q ? data.filter((el) => el.name === q) : data });
}
