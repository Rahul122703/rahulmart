// airtable-products-api.js

import dotenv from "dotenv";
import Airtable from "airtable-node";

dotenv.config();

const apiKey = process.env.AIRTABLE_API_TOKEN;
const baseID = process.env.AIRTABLE_BASE_ID;
const tableName = "products";

const airtable = new Airtable({ apiKey }).base(baseID).table(tableName);

async function getAllProducts() {
  try {
    const { records } = await airtable.list({ maxRecords: 100 });

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
        id,
        image: url,
        price,
        name: product,
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
