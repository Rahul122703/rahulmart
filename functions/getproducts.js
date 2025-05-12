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
        id: id,
        image: url,
        price: price,
        name: product,
        review: review,
        rating: rating,
        colors: colors,
        company: company,
        records: records,
        desc: description,
        category: category,
        featured: featured,
        shipping: shipping,
      };
    });
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
