import React from "react"
import { Box, Divider, Grid, Typography } from "@mui/material"
import BasicDatePicker from "components/Date/DatePicker"
import BasicDateRange from "components/Date/Daterange"
import BasicTimePicker from "components/Date/TimePicker"
import { useSettingController } from "./setting.controller"
import NotificationHandler from "components/NotificationHandler"
import { Button } from "components/Button"
import PopUp from "components/PopUp"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Payment from "components/Payment"

function Settings() {
  const sc = useSettingController()

  return (
    <div>
      <h2>Settings</h2>
      <Divider />
      <Grid container mt={2} xs={12} spacing={2}>
        <Grid item>
          <BasicDatePicker
            label="Basic example"
            value={sc.value}
            onChange={sc.handleOnChange}
            disabled={false}
            disableFuture={false}
            disablePast={false}
            openTo="day"
          />
        </Grid>
        <Grid item>
          <BasicTimePicker />
        </Grid>
        <Grid item>
          <BasicDateRange
            startDate={sc.startDate}
            endDate={sc.endDate}
            focusedInput={sc.focusedInput}
            handleDatesChange={sc.handleDatesChange}
            handleFocusChange={sc.handleFocusChange}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" minWidth="100px" minHeight="48px" onClick={sc.handleOpen}>
            <Typography variant="h5">Payment Method</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container mt={2} xs={12}>
        <NotificationHandler
          header={["Settings", "In App Notification", "Email Notification"]}
          buttonData={[
            {
              title: "Notification when login",
              handleButton1: (e) => {
                console.log("Notification when login", e.target.checked)
              },
              handleButton2: (e) => {
                console.log("Notification when login", e.target.checked)
              }
            },
            {
              title: "Notification when logout",
              handleButton1: (e) => {
                console.log("Notification when logout", e.target.checked)
              },
              handleButton2: (e) => {
                console.log("Notification when logout", e.target.checked)
              }
            },
            {
              title: "Trial Notification login",
              handleButton1: (e) => {
                console.log("Trial Notification login", e.target.checked)
              },
              handleButton2: (e) => {
                console.log("Trial Notification login", e.target.checked)
              }
            }
          ]}
        />
      </Grid>
      <PopUp
        open={sc.open}
        handleClose={sc.handleClose}
        handleSubmit={sc.handleSubmit}
        maxWidth="sm"
        variant="Form"
        title="Warning"
        description="Are you sure ......?"
        isAction={true}
        ButtonVariant="contained"
        ButtonColor="secondary"
        proceedButton="Confirm"
        cancelButton="Cancel"
        component={
          <Elements stripe={loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh")}>
            <Box p={2}>
              <Payment
                sessionId={"1nennrnnr"}
                customerId={"1234556"}
                dispatchCheckout={sc.dispatchCheckout}
                payNow={sc.checkout?.payNow}
                TotalAmount={"100"}
              />
            </Box>
          </Elements>
        }
      />
    </div>
  )
}

export default Settings
