## :Pyment Method

#### Core components of the Payment method Component

- Core
  - [Payment](/src/components/Payment/index.jsx)
  - [Controller](/src/components/Payment/payment.controller.js)
  - [Model](/src/components/Payment/payment.model.js)
  - [Failure](/src/components/Payment/paymentFailure.js)

### Basic Setup

Before calling the components you have to wrap the components with Elements, and send stripe key as props to Elements.

For Multiple select we can use below snippet

```jsx
<Elements stripe={loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh")}>
  <Box p={2}>
    <Payment
      sessionId={"1nennrnnr"}
      customerId={"1234556"}
      dispatchCheckout={sc.dispatchCheckout}
      payNow={sc.checkout?.payNow}
      TotalAmount={"100"}
      CustomPayment={true}
    />
  </Box>
</Elements>
```

### Core Component Instructions

- [Controller](/src/components/Payment/payment.controller.js)
  -Payment controller you have to call the API for connect with stripe ,You have to send stripe payment method id and session id.If it will succeed you will recieve the payment response else you have to wait for confirmation.

#### **_Basic Props_**

_*Mandetory Props*_

- stripe:- It will take the value of stripe tokens
- session id:- It will take the session id
- customerid:- It will take the customer id .
- TotalAmount :- It will show the paybale amount.

```jsx
<Payment
  sessionId={"1nennrnnr"}
  customerId={"1234556"}
  dispatchCheckout={sc.dispatchCheckout}
  payNow={sc.checkout?.payNow}
  TotalAmount={"100"}
  CustomPayment={true}
/>
```

For better understanding you have to visite https://stripe.com/docs/stripe-js/react
