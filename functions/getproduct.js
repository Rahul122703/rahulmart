import LoadAirtable from "./airtable-credential.js";

export async function handler(event, context) {
  try {
    const airtable = new LoadAirtable("products");
    const { records } = await airtable.allRows();

    const products = records.map((currentItem) => {
      const {
        id,
        fields: {
          product,
          category,
          image: [{ url }],
          colors,
          company,
          description,
          price,
        },
      } = currentItem;
      return {
        id: id,
        image: url,
        price: price,
        name: product,
        colors: colors,
        company: company,
        desc: description,
        category: category,
      };
    });
    console.log("all products", products);

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
