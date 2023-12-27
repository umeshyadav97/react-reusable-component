import { useState } from "react"

const dropDownData = {
  data1: {
    id: 1,
    multiple: true,
    label: "Select multiple option",
    options: [
      { id: 1, label: "Male", value: "male" },
      { id: 2, label: "Female", value: "female" },
      { id: 3, label: "Other", value: "other" },
      { id: 4, label: "One", value: "one" },
      { id: 5, label: "Two", value: "two" },
      { id: 6, label: "Three", value: "three" }
    ]
  },
  data2: {
    id: 2,
    multiple: false,
    label: "Select Option",
    options: [
      { id: 1, label: "Male", value: "male" },
      { id: 2, label: "Female", value: "female" },
      { id: 3, label: "Other", value: "other" },
      { id: 4, label: "One", value: "one" },
      { id: 5, label: "Two", value: "two" },
      { id: 6, label: "Three", value: "three" }
    ]
  }
}

export const useCompoenentGuideController = () => {
  const [selectedItem1, setSelectedItem1] = useState([])
  const [mutipleSelect1, setMultipleSelect1] = useState([])

  return {
    dropDownData,
    selectedItem1,
    setSelectedItem1,
    mutipleSelect1,
    setMultipleSelect1
  }
}
