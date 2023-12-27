import { useEffect, useState } from "react"

export const useAppTableController = (props) => {
  const { data, handleAction } = props
  const [confirmModal, setConfirmModal] = useState(false)
  const [orderBy, setOrderBy] = useState("")
  const [order, setOrder] = useState("asc")
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(false)
  const [updateData, setUpdateData] = useState([])

  useEffect(() => {
    setLoading(true)
    handleDataChange()
  }, [order, orderBy, searchText])

  const handleActions = () => {
    setConfirmModal(!confirmModal)
    handleAction()
  }

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleConfirmModal = () => {
    setConfirmModal(!confirmModal)
  }

  //To change in sorting request and data updation
  const handleDataChange = () => {
    const displayedData = data
      .filter((row) => {
        return Object.values(row).some(
          (value) => value.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      })
      .sort((a, b) => {
        if (order === "asc") {
          return a[orderBy] > b[orderBy] ? 1 : -1
        } else {
          return a[orderBy] < b[orderBy] ? 1 : -1
        }
      })
    setUpdateData(displayedData)
    setLoading(false)
  }

  return {
    data,
    handleSort,
    handleSearch,
    handleConfirmModal,
    handleDataChange,
    confirmModal,
    setConfirmModal,
    orderBy,
    setOrderBy,
    order,
    setOrder,
    searchText,
    setSearchText,
    loading,
    setLoading,
    updateData,
    setUpdateData,
    handleActions
  }
}
