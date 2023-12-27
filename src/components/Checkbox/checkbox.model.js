const items = [
  {
    id: 0,
    name: "checkbox 1"
  },
  {
    id: 1,
    name: "checkbox 2"
  },
  {
    id: 2,
    name: "checkbox 3"
  },
  {
    id: 3,
    name: "checkbox 4"
  },
  {
    id: 4,
    name: "checkbox 5"
  }
]
const items1 = ["Selected Items1", "Selected Items2", "Selected Items3", "Selected Items4"]

export const useCheckboxModel = () => {
  return {
    items,
    items1
  }
}
