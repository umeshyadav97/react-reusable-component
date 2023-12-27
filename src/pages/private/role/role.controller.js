// import { usePermission } from "components/RBAC"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useRoleController = () => {
  const [listData, setListData] = useState([])
  const navigation = useNavigate()
  const module = "Roles"

  useEffect(() => {
    setListData(fetchDataFromLocalStorage())
  }, [])

  const handleNavigation = (path) => {
    navigation(path)
  }

  const fetchDataFromLocalStorage = () => {
    const getData = localStorage.getItem("RoleListingData")
      ? JSON.parse(localStorage.getItem("RoleListingData"))
      : []
    return getData
  }

  const handleEditRole = (obj) => {
    navigation(`/u/roles/edit/${obj?.id}`)
  }

  const handleDeleteRole = (obj) => {
    const getData = listData.filter((ele) => ele?.id !== obj?.id)
    localStorage.setItem("RoleListingData", JSON.stringify(getData))
    setListData(getData)
  }

  return {
    handleNavigation,
    fetchDataFromLocalStorage,
    handleEditRole,
    handleDeleteRole,
    listData,
    module
  }
}

export default useRoleController
