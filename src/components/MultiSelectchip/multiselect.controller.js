import { useEffect, useState } from "react"
import _without from "lodash/without"

export const useMultiChipController = (props) => {
  const { names, initialSelected } = props

  const [selectedValue, setSelectedValue] = useState(true)
  const [personName, setPersonName] = useState(initialSelected)

  useEffect(() => {
    if (props.chipsView === false) {
      setSelectedValue(false)
    }
  }, [])

  const handleChange = (event) => {
    setPersonName(event.target.value)
  }

  const handleDelete = (e, value) => {
    e.preventDefault()
    setPersonName((current) => _without(current, value))
  }

  return {
    names,
    personName,
    handleDelete,
    handleChange,
    selectedValue
  }
}
