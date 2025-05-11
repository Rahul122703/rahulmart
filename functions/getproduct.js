import dotenv from "dotenv";
import LoadAirtable from "./airtable-credential.js";

dotenv.config();

const loadAirtable = new LoadAirtable("products");

export const handler = async (event, context) => {
  const { id } = event.queryStringParameters;

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
    const product = await loadAirtable.getProduct(id);

    if (!product || !product.id) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Product not found" }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
    }
    console.log("product information", product);
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
