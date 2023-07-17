const express = require('express');

const app  = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`)
});

app.get('/available_payments', (req, res) => {
    const object = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
      res.json(object);
});

app.post('/login', (req, res) => {
    const username = req.params.userName;
    res.send(`Welcome ${username}`);
});

app.listen(port, () => {
    console.log('API available on localhost port 7865')
});
