const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('pk_test_51HnODOKnmLQ1H2vk2U6cCmEbp7qUs95wxuMaMv7CbSuyCJl0DDAJCQhA2nB0KYiz3f2vuoP2rxZC76u271nLjOGS00XZbvQTsp')



const app = express();



app.use(cors({origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'))
            
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "Can"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    });
});

exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/e-commerce-7a00e/us-central1/api