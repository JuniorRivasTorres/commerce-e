const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HnnJ0FPNMmdgJ6pAKXnlvzwpdo9M8tGZSSQ0aWQL6IpXn9sxEKlnOO4Kt8xn3EFweQX3TaEX2Woul9bvzTAO4aA00IZxsL56n"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/e-commerce-7a00e/us-central1/api
//sk_test_51HnnJ0FPNMmdgJ6pAKXnlvzwpdo9M8tGZSSQ0aWQL6IpXn9sxEKlnOO4Kt8xn3EFweQX3TaEX2Woul9bvzTAO4aA00IZxsL56n