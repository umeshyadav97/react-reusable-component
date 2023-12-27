import { Grid, TextField, Typography } from "@mui/material"
import React from "react"
import { paymentController } from "./payment.controller"
import styles from "./payment.module.scss"
import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js"
import PaymentFailure from "./paymentFailure"

const Payment = (props) => {
  const atc = paymentController(props)

  return (
    <React.Fragment>
      <>
        <Grid container>
          <Grid container id="checkout" className={styles.payment}>
            {/* Payment-Mode */}
            <Grid container item xs={12}>
              <Grid container>
                <>
                  <Grid item xs={12}>
                    <Typography variant="h5">Credit / Debit Card</Typography>
                  </Grid>
                  <form className="Form" onSubmit={atc.handleSubmit} style={{ width: "100%" }}>
                    <Grid item xs={12} mt={1} mb={1}>
                      <Typography variant="h6">Card Number</Typography>
                    </Grid>

                    <Grid item xs={12} id="stripe_card_number" className={styles.cardInputs}>
                      <CardNumberElement
                        options={atc.options1}
                        placeholder="Card Number"
                        onReady={() => {}}
                        onChange={(event) => atc.handleCompleteStatus(event)}
                        onBlur={() => {
                          atc.removeBorder("stripe_card_number")
                        }}
                        onFocus={() => {
                          atc.addBorder("stripe_card_number")
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item mb={1}>
                        <Typography variant="h6">Name on Card</Typography>
                      </Grid>
                      <TextField
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        variant="outlined"
                        onChange={atc.handleNameChange}
                        value={atc.name}
                        fullWidth
                      />
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid item xs={12} mt={1} mb={1}>
                          <Typography variant="h6">Expiry</Typography>
                        </Grid>
                        <Grid id="stripe_expiry" item xs={12} className={styles.cardInputs}>
                          <CardExpiryElement
                            options={atc.options2}
                            onReady={() => {}}
                            onChange={(event) => atc.handleCompleteStatus(event)}
                            onBlur={() => {
                              atc.removeBorder("stripe_expiry")
                            }}
                            onFocus={() => {
                              atc.addBorder("stripe_expiry")
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid item xs={12} mt={1} mb={1}>
                          <Typography variant="h6">CVV</Typography>
                        </Grid>
                        <Grid id="stripe_cvv" item xs={12} className={styles.cardInputs}>
                          <CardCvcElement
                            options={atc.options3}
                            onReady={() => {}}
                            onChange={(event) => atc.handleCompleteStatus(event)}
                            onBlur={() => {
                              atc.removeBorder("stripe_cvv")
                            }}
                            onFocus={() => {
                              atc.addBorder("stripe_cvv")
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item mt={2}>
                      <Grid item xs={11}>
                        <Typography variant="h6">
                          To view stripe terms and conditions{" "}
                          <a
                            href="https://stripe.com/en-in/legal/ssa"
                            target="_blank"
                            rel="noopener noreferrer">
                            Click here
                          </a>
                          .
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
      <PaymentFailure
        open={atc.paymentFailure}
        handleClose={atc.handleFailureClose}
        errorMessage={atc.errorMessage}
        TotalAmount={"1000"}
      />
    </React.Fragment>
  )
}

export default Payment
