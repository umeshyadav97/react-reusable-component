import { useReducer, useState } from "react"

const checkOutReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return {
        ...state,
        sotreCredit: false,
        loading: false
      }

    case "CardPay":
      return {
        ...state,
        payNow: action?.val
      }

    default:
      return { ...state }
  }
}

export const useSettingController = () => {
  const [value, setValue] = useState(new Date())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)
  const today = new Date()
  const [open, setOpen] = useState(false)
  const [checkout, dispatchCheckout] = useReducer(checkOutReducer, {
    loading: false,
    cartData: null,
    complete: false,
    payNow: false
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setOpen(false)
  }

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  const handleFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput)
  }

  const handleOnChange = (newValue) => {
    setValue(newValue)
  }

  return {
    value,
    startDate,
    endDate,
    focusedInput,
    handleDatesChange,
    handleFocusChange,
    handleOnChange,
    today,
    open,
    handleOpen,
    handleClose,
    handleSubmit,
    checkout,
    dispatchCheckout
  }
}
