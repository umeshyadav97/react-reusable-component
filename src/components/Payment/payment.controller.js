import {
  useElements,
  useStripe,
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement
} from "@stripe/react-stripe-js"
import { useEffect, useMemo, useState } from "react"
import { paymentData } from "./payment.model"
import { Toast } from "helpers/toasts/toastHelper"

const useOptions = (type) => {
  // Styles of all the payment fields
  const cardNumberOptions = useMemo(() => ({
    style: {
      base: {
        placeholder: "Enter Card Number",
        fontSize: "16px",
        color: "black",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    },
    showIcon: true
  }))
  const cardExpiryOptions = useMemo(() => ({
    style: {
      base: {
        fontSize: "16px",
        color: "black",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  }))
  const cardCvvOptions = useMemo(() => ({
    style: {
      base: {
        fontSize: "16px",
        color: "black",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  }))
  if (type === "number") return cardNumberOptions
  if (type === "expiry") return cardExpiryOptions
  return cardCvvOptions
}
export const paymentController = (props) => {
  const {
    sel_payment_method,
    sessionId,
    dispatchCheckout,
    handleSucessOpen,
    payNow,
    updateParent
  } = props
  const stripe = useStripe()
  const elements = useElements()
  const options1 = useOptions("number")
  const options2 = useOptions("expiry")
  const options3 = useOptions("cvv")
  const [sending, setSending] = useState(false)
  const [paymentFailure, setPaymentFailure] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [name, setName] = useState("")
  const [cardComplete, setCardComplete] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [cardStatus, setCardStatus] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
    name: false
  })
  const model = paymentData()

  const handleFailureClose = () => {
    setPaymentFailure(false)
  }

  const addBorder = (id) => {
    const note = document.getElementById(id)
    note.style.border = "2px solid #FC68A2"
  }

  const removeBorder = (id) => {
    const note = document.getElementById(id)
    note.style.border = "1px solid rgba(55, 37, 168, 0.25)"
  }

  const handleNameChange = (e) => {
    const name = e.target.value.trim()
    setName(e.target.value)
    const temp = { ...cardStatus }
    if (name.length) {
      temp["name"] = true
      setCardStatus(temp)
    } else {
      temp["name"] = false
      setCardStatus(temp)
    }
    if (temp["cardNumber"] && temp["cardExpiry"] && temp["cardCvc"] && temp["name"]) {
      setCardComplete(true)
    } else {
      setCardComplete(false)
    }
  }

  const handlePaymentFailure = (msg) => {
    setErrorMessage(msg)
    setPaymentFailure(true)
  }

  const handleCompleteStatus = (e) => {
    const temp = { ...cardStatus }
    temp[e.elementType] = e.complete
    setCardStatus(temp)
    if (temp["cardNumber"] && temp["cardExpiry"] && temp["cardCvc"] && temp["name"]) {
      dispatchCheckout({
        type: "CardComplete",
        val: true
      })
      setCardComplete(true)
    } else {
      dispatchCheckout({
        type: "CardComplete",
        val: false
      })
      setCardComplete(false)
    }
  }

  const handleMakePayment = async (id) => {
    if (!updating) {
      try {
        setUpdating(true)
        const payload = {
          session_id: sessionId,
          sel_payment_method: sel_payment_method,
          stripe_payment_method: id,
          currency: "USD"
        }
        const resp = await model.getUserData(payload)
        if (resp.success) {
          setUpdating(false)
          updateParent(false)
          const result = resp.data
          if (result?.payment_status === "succeeded") {
            dispatchCheckout({
              type: "SucessResponse",
              val: result
            })
            handleSucessOpen(true)
          } else if (result?.payment_status === "requires_action") {
            const result1 = await stripe.handleCardAction(resp.data.client_secrete)
            if (result1.paymentIntent?.status === "requires_confirmation") {
              const payload4 = {
                ...payload,
                order_num: resp.data.order_num,
                order_id: resp.data.order_id
              }
              let res
              const resp = await model.getUserData(payload4)
              if (res.success) {
                if (res.data?.payment_status === "succeeded") {
                  dispatchCheckout({
                    type: "SucessResponse",
                    val: res.data
                  })
                  handleSucessOpen(true)
                }
              } else {
                dispatchCheckout({
                  type: "CardPay",
                  val: false
                })
                setSending(false)
                updateParent(false)
                setUpdating(false)
                handlePaymentFailure(res?.error?.message?.[0])
              }
            } else {
              const msg =
                resp?.error?.message ||
                `We are unable to authenticate your payment method at this time. 
              Please choose a different payment method and try again.`
              Toast.showErrorToast(msg)
              dispatchCheckout({
                type: "CardPay",
                val: false
              })
              setSending(false)
              handlePaymentFailure(msg)
            }
          }
        } else {
          Toast.showErrorToast(resp.error.message || `Error in Payment.`)
          setSending(false)
          dispatchCheckout({
            type: "CardPay",
            val: false
          })
          handlePaymentFailure(resp.error.message)
          updateParent(false)
        }
      } catch (e) {
        setUpdating(false)
        dispatchCheckout({
          type: "CardPay",
          val: false
        })
        const msg =
          typeof e.data.error?.message === "string"
            ? e.data.error?.message
            : e.data.error?.message[0]
        Toast.showErrorToast(msg || `Error Fetching Store Details. Please Refresh`)
        handlePaymentFailure(msg)
        updateParent(false)
      } finally {
        setSending(false)
      }
    }
  }

  const handleSubmit = async () => {
    if (cardComplete) {
      setSending(true)
      event?.preventDefault()

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return
      }

      // Setting Payment_Method_ID
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: name
        }
      })
      const paymentId = payload.paymentMethod.id

      handleMakePayment(paymentId)
    }
  }

  useEffect(() => {
    if (payNow) {
      handleSubmit()
    }
  }, [payNow])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return {
    CardCvcElement,
    CardExpiryElement,
    options1,
    options2,
    options3,
    sending,
    paymentFailure,
    errorMessage,
    handleFailureClose,
    addBorder,
    removeBorder,
    handleNameChange,
    handleCompleteStatus,
    handleSubmit,
    name
  }
}
