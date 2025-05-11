import LoadAirtable from "./airtable-credential.js";

export async function handler(event, context) {
  try {
    const airtable = new LoadAirtable("products");
    const { records } = await airtable.allRows();

    const products = records.map(({ id, fields }) => ({
      id,
      name: fields.name,
      price: fields.price,
      desc: fields.desc,
      image: fields.image[0].url,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }
}
