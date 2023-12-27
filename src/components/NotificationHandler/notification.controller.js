import React from "react"

const useNotificationController = () => {
  const [checked1, setChecked1] = React.useState([])
  const [checked2, setChecked2] = React.useState([])

  const handleChecked1 = (e, index, cb) => {
    if (checked1.indexOf(index) === -1) {
      setChecked1((pre) => [index, ...pre])
    } else {
      const filtered = checked1.filter((ele) => ele !== index)
      setChecked1(filtered)
    }
    cb(e)
  }

  const handleChecked2 = (e, index, cb) => {
    if (checked2.indexOf(index) === -1) {
      setChecked2((pre) => [index, ...pre])
    } else {
      const filtered = checked2.filter((ele) => ele !== index)
      setChecked2(filtered)
    }
    cb(e)
  }
  return {
    checked1,
    checked2,
    handleChecked1,
    handleChecked2
  }
}

export default useNotificationController
