import { useState } from "react"
import { useAccordionModel } from "./accordion.model"

export const useAccordionController = () => {
  const accordionDataSet = useAccordionModel()

  const [expanded, setExpanded] = useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return {
    expanded,
    handleChange,
    accordionDataSet
  }
}
