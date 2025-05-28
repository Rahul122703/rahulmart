import LoadAirtable from "./airtable-credential.js";

export async function handler(event, context) {
  try {
    const airtable = new LoadAirtable("products"); // Here the new key word is not suppored as LoadAirtable as read as a non class by netlify deployment server so i had to somehow change this to function or anything non class so u created this branch so safeguard this OOP apprach for airtable API
    const { records } = await airtable.allRows();

    console.log("all records : ", records);

    const products = records.map((currentItem) => {
      const {
        id,
        fields: {
          stock,
          price,
          review,
          colors,
          rating,
          product,
          records,
          company,
          category,
          shipping,
          featured,
          description,
          image: [{ url }],
        },
      } = currentItem;

      return {
        id,
        image: url,
        price,
        name: product,
        stock,
        review,
        rating,
        colors,
        company,
        records,
        desc: description,
        category,
        featured,
        shipping,
      };
    });

    return products;
  } catch (error) {
    throw new Error("Failed to fetch products: " + error.message);
  }
}

export async function handler(event, context) {
  try {
    const products = await getAllProducts();

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
