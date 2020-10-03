const functions = require('firebase-functions');
const stripe = require('stripe')(
  `sk_test_51HTJOZJpGJGqUhHBADROAxxgCMWUr1B7ylc3kLJP3KfxgCGOQTR2eaNcE9npIs4NQzO39MrcWSxHfb8IofRAKNjk00Xs54pJSz`,
);

exports.completePaymentWithStripe = functions.https.onRequest(
  (request, response) => {
    stripe.charges
      .create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: 'tok_visa',
      })
      .then((charge) => {
        response.send(charge);
      })
      .catch((error) => {
        console.log(error);
      });
  },
);
