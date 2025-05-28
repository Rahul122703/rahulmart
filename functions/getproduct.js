// airtable-single-product-api.js

import dotenv from "dotenv";
import Airtable from "airtable-node";

dotenv.config();

const apiKey = process.env.AIRTABLE_API_TOKEN;
const baseID = process.env.AIRTABLE_BASE_ID;
const tableName = "products";

const airtable = new Airtable({ apiKey }).base(baseID).table(tableName);

async function getProductById(id) {
  try {
    const product = await airtable.retrieve(id);
    return product;
  } catch (error) {
    throw new Error("Failed to fetch product: " + error.message);
  }
}

export const handler = async (event, context) => {
  const { id } = event.queryStringParameters || {};

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Product ID is required" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }

  try {
    const product = await getProductById(id);

    if (!product || !product.id) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Product not found with the id ${id}` }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
    }

    console.log("Product Information:", product);

    return {
      statusCode: 200,
      body: JSON.stringify(product),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server Error" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }
};
