import { useState } from "react"
import { useCounterModel } from "./counter.model"

export const useCounterController = () => {
  const [counterOn, setCounterOn] = useState(false)
  const countData = useCounterModel()

  return {
    counterOn,
    setCounterOn,
    countData
  }
}
