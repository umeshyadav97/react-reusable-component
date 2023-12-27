import { useNavigate, useParams } from "react-router-dom"
import useAddRoleModal from "./addRole.modal"
import { useEffect, useState } from "react"

const useAddRoleController = () => {
  const [defaultData, setDefaultData] = useState(false)
  const navigation = useNavigate()
  const paramas = useParams()
  const armodal = useAddRoleModal()

  useEffect(() => {
    if (paramas?.id) {
      const getData = localStorage.getItem("RoleListingData")
        ? JSON.parse(localStorage.getItem("RoleListingData"))
        : []
      const data = getData.filter((ele) => ele?.id === paramas?.id)
      setDefaultData(data[0])
    }
  }, [])

  const handleNavigate = (path) => {
    navigation(path)
  }

  const handleAddRole = (val) => {
    let getData = localStorage.getItem("RoleListingData")
      ? JSON.parse(localStorage.getItem("RoleListingData"))
      : []
    const payload = {
      id: val?.id ? val?.id : new Date(),
      role: val.role,
      description: val.description,
      permission: val.permission
    }
    if (val?.id) {
      const index = getData.findIndex((obj) => obj.id === val?.id)
      getData.splice(index, 1, payload)
    } else {
      getData.push(payload)
    }
    armodal.saveDataToLocalStorage("RoleListingData", getData)
    handleNavigate(-1)
  }

  return { handleNavigate, handleAddRole, defaultData }
}

export default useAddRoleController
