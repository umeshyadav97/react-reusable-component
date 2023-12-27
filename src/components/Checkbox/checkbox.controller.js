import { useState } from "react"
import { useCheckboxModel } from "./checkbox.model"

export const useCheckboxController = () => {
  const [checkedData, setCheckedData] = useState([])
  const [selected, setSelected] = useState([])
  const modelData = useCheckboxModel()

  const handleChange = (event, name) => {
    if (event.target.checked) {
      setCheckedData([...checkedData, name])
    } else {
      setCheckedData(checkedData.filter((data) => data !== name))
    }
  }
  const options = modelData.items1

  const isAllSelected = options.length > 0 && selected.length === options.length
  const handleChange1 = (event) => {
    const value = event.target.value
    if (value === "all") {
      setSelected(selected.length === options.length ? [] : options)
      return
    }

    const list = [...selected]
    const index = list.indexOf(value)
    index === -1 ? list.push(value) : list.splice(index, 1)
    setSelected(list)
  }

  return {
    handleChange,
    modelData,
    selected,
    handleChange1,
    isAllSelected
  }
}
