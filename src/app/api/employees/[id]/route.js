export async function GET(req, { params }) {
  let { id } = params;
  let data = [
    { id: 1, name: "Aon" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Ahmed" },
  ];
  return Response.json({ data: data.find((el) => el.id === parseInt(id)) });
}
