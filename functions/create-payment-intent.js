export const handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: 200,
    body: "namaste this is rahl rahul sharma",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};
